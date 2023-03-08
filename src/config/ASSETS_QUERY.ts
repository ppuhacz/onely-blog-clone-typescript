import { gql } from "graphql-request";

export const ASSETS_QUERY = gql`
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
  categories {
    categoryName
    slug
    posts (orderBy: date_DESC){
      slug
      title
      author {
        name
      }
      coverImage {
        url
      }
      date
    }
  }
  pages {
    content {
      raw
    }
    slug
    title
    subtitle
  }
  posts (orderBy: date_DESC){
    author {
      name
      socialMedia {
        ... on SocialMedia {
          instagram
          linkedIn
          twitter
        }
      }
      title
      picture {
        url
      }
    }
    category {
      categoryName
    }
    content {
      raw
    }
    coverImage {
      url
    }
    date
    excerpt
    slug
    title
    recommendedPost
  }
}
`

