import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  OperationVariables
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import { GraphqlClient, QueryProps } from './GraphqlClient'
import { Log } from '@/infra/shared/helpers/log'

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL
})

const errorLink = onError(
  ({ graphQLErrors, networkError, operation: { operationName } }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        Log.divider()
        Log.error('[GraphQL error]')
        Log.error(`Operation: ${operationName}`)
        Log.error(`Message: ${message}`)
        Log.error(
          `Location: ${locations?.map(
            l => `| Line: ${l.line} , Column: ${l.column} |`
          )}`
        )
        Log.error(`Path: ${path}`)
        Log.divider()
      })
    }

    if (networkError) {
      Log.divider()
      Log.error('[Network error]')
      Log.error(`${networkError.name}`)
      Log.error(`${networkError.message}`)
      Log.divider()
    }
  }
)

export const CLIENT = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
})

export class ApolloAdapter implements GraphqlClient {
  private client: ApolloClient<NormalizedCacheObject>

  constructor() {
    this.client = CLIENT
  }

  async query<Response, Variables extends OperationVariables = {}>({
    query,
    variables
  }: QueryProps<Variables>): Promise<Response | null> {
    try {
      const response = await this.client.query<Response, Variables>({
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
        query,
        variables
      })

      return response.data
    } catch {
      return null
    }
  }
}
