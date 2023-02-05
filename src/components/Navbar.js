import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'
import onelyLogo from '../images/onely-logo.png'
import Home from './Home.js'
import Category from './Category.js'
import Post from './Post.js'
import AllPosts from './AllPosts'
import Author from './Author'

function Navbar(props) {
  if (props.data) {
    let categories = props.data.categories
    let categoriesList = [];
    const allPosts = props.data.posts


      // Sorting all posts by the date, from the newest to the oldest
    allPosts.sort(function(post1, post2) {
    return new Date(post2.date) - new Date(post1.date)
  })


    // Mapping all categories
    categories.forEach(category => {
      category = category.categoryName
      categoriesList.push( <li key={category}><NavLink to={'category/' + category.replace(' ', '-')}>{category}</NavLink></li>)
    })

  return(
    <Router>
      <header>
        <div>
          <nav>
            <ul>
              <li key='home'>
                <NavLink to='/'><img src={onelyLogo} alt='Onely'/></NavLink>
              </li>
              <li key='categories'>
                  Categories
                  <ul className='services-list'>
                    <li key='allPosts'>
                      <NavLink to='/posts'>
                        All Posts
                      </NavLink>
                    </li>
                    {categoriesList}
                  </ul>
              </li>
              <li key='blog'>
                <NavLink to='/'>Blog</NavLink>
              </li>
              <li key='contact'>
                <NavLink to='/contact' className='contact-link'>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path='/' element={ <Home data={props.data} /> } />
        <Route path='/category/:id' element={ <Category data={props.data} /> } />
        <Route path='/posts' element={ <AllPosts data={props.data} /> } />
        <Route path='/post/:id' element={ <Post data={props.data} /> } />
        <Route path='/author/:id' element={ <Author data={props.data} /> } />
      </Routes>

    </Router>

  )
}}

export default Navbar