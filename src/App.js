import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.js";
import { request } from 'graphql-request';



function App() {
const [data, setData] = useState(null);

useEffect(() => {
const fetchData = async() => {

      const response = await request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcozcwgx0lbo01uneoby69s1/master',
      `
      query Assets {
        authors {
          name
          title
          description
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
          posts {
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
        posts {
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
      )
      setData(response)
    }
  fetchData();
}, []);

// console.log(data)
  return (
    <div className="App">
      <Navbar data={data}/>
    </div>
  );
}

export default App;
