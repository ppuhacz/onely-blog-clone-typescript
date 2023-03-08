import { gql } from "graphql-request";

export const GET_POST = gql`
query GetPost($slug: String!) {
  post(where: { slug: $slug }) {
    title
    date
    slug
    content {
      raw
    }
    coverImage {
      url
    }
    author {
      name
      slug
      picture {
        url
      }
    }
  }
}
`;