import { OperationVariables } from '@apollo/client'
import { DocumentNode } from 'graphql'

export interface QueryProps<V> {
  query: DocumentNode
  variables?: V
}

export interface GraphqlClient {
  query<Response, Variables extends OperationVariables = {}>(
    props: QueryProps<Variables>
  ): Promise<Response | null>
}
