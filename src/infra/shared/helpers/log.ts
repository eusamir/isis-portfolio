export class Log {
  static divider() {
    console.log(
      '\x1b[35m%s\x1b[0m',
      '------------------------------------------'
    )
  }

  static success(message: string) {
    console.log('\x1b[32m%s\x1b[0m', 'SUCCESS -', message)
  }

  static error(message: string) {
    console.log('\x1b[31m%s\x1b[0m', 'ERROR -', message)
  }

  static info(message: string) {
    console.log('\x1b[34m%s\x1b[0m', 'iNFO -', message)
  }

  static warn(message: string) {
    console.log('\x1b[33m%s\x1b[0m', 'WARN -', message)
  }
}
