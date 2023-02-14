import { NavLink, useLocation } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs.js'
import '../styles/navbar.scss'

function Navbar(props) {
  const location = useLocation();
  const path = location.pathname.split("/").slice(1);

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
      categoriesList.push( <li key={category}><NavLink to={'category/' + category.replaceAll(" ", "-") + '/1' } className='nav-link'>{category}</NavLink></li>)
    })

    const titleDisplay = () => {
      if(path[0] === 'category') {
        return (
          <span className='category-name'>
            <h1>{path[1].replaceAll('-', ' ')}</h1>
          </span>
        )
      }
    }

    // Navbar will not be display while on a post page
    if (location.pathname.includes(`/post/`)) {
      return null
    }

  return(
      <nav>
        <div>
          <Breadcrumbs />
          {titleDisplay()}
            <ul>
              <li key='categories'>
                  <span className='categories-span'>Categories <i class="material-symbols-outlined expand-icon">expand_more</i></span>
                  <ul className='categories-list'>
                    <li key='allPosts'>
                      <NavLink to='/posts/1' className='nav-link'>
                        All posts
                      </NavLink>
                    </li>
                    {categoriesList}
                  </ul>
              </li>
              <li key='blog'>
                <NavLink to='/' className='nav-link'>Blog</NavLink>
              </li>
              <li key='allAuthors'>
                <NavLink to='/authors' className='authors-list nav-link' >Our team</NavLink>

              </li>
            </ul>
        </div>
      </nav>
  )
}}

export default Navbar