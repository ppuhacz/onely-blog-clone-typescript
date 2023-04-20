import { gql } from "@apollo/client";

export const AUTHOR_QUERY: any = gql`
query Assets {
  authors {
    name
    title
    description
    slug
    picture {
      url
    }
    posts {
      slug
      title
      coverImage {
        url
      }
      date
    }
    question1 {
      ... on QuestionTemplate {
        question
        answer
      }
    }
    question2 {
      ... on QuestionTemplate {
        question
        answer
      }
    }
    question3 {
      ... on QuestionTemplate {
        question
        answer
      }
    }
    question4 {
      ... on QuestionTemplate {
        question
        answer
      }
    }
    socialMedia {
      ... on SocialMedia {
        instagram
        linkedIn
        twitter
      }
    }
  }
}
`