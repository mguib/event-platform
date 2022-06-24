import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rnho0e1bl401wg1lnc8rnx/master',
    cache: new InMemoryCache()
})