import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.js";
import { request } from 'graphql-request';
import Footer from "./components/Footer.js";
import './styles/app.scss'
import Header from "./components/Header.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Home from './components/Home.js'
import Category from './components/Category.js'
import Post from './components/Post.js'
import AllPosts from './components/AllPosts'
import Author from './components/Author'
import AllAuthors from './components/AllAuthors'
import PageNotFound from './components/PageNotFound'



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


  return (
    <Router>
      <div className="App">

        <Header />
        <Navbar data={data}/>

        <Routes>
          <Route path='*' element={ <PageNotFound /> } />
          <Route path='/' element={ <Home data={data} /> } />
          <Route path='/category/:id/:page' element={ <Category data={data} /> } />
          <Route path='/posts/:page' element={ <AllPosts data={data} /> } />
          <Route path='/post/:id' element={ <Post data={data} /> } />
          <Route path='/author/:id' element={ <Author data={data} /> } />
          <Route path='/authors/' element = { <AllAuthors data={data} /> } />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
