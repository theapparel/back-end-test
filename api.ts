import { request, gql } from 'graphql-request'

const PAGE_SIZE = 20

const messagesQuery = gql`
  query channelMessages($channelId: ID!, $pageSize: PositiveInt!) {
    channel(channelId: $channelId) {
      messages(input: {
        page: {
          first: $pageSize,
        }
      }) {
        nodes {
          text, createdAt
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`

export default {
  messages: async () => {
    const data = await request({
      url: 'https://dev.gql.manufactured.com/graphql',
      document: messagesQuery,
      variables: {
        channelId: 'cky902c9f317160fml1bja26yy',
        pageSize: PAGE_SIZE,
      },
      requestHeaders: {
        Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzZXNzaW9uIiwic3ViIjoiY2t5OHp4enF0MzA4MjQwZm1sMjF3d2s0dmgiLCJzY29wZXMiOnt9LCJpc3MiOiJodHRwczovL2Rldi5ncWwubWFudWZhY3R1cmVkLmNvbS8ifQ.hP2mOXrZY2ho-uZgdWkQawfrr0QxX2ajapn9x4Bi8e605Pq0wNJI24s3bQvlt9Hj69CSHx4Mo4hixbpLQ6ohmg",
      }
    })
    return data.channel.messages
  }
}
