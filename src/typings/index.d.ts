declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        GRAPHQL_ENDPOINT: string;
      }
    }
  }
}
