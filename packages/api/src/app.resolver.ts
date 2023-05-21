// exists to test initial version

import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class AppResolver {
  @Query(() => String)
  hello() {
    return 'Hello World!'
  }
}
