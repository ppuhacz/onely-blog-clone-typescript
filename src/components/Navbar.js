import { NavLink } from 'react-router-dom'

import '../styles/navbar.scss'

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
      categoriesList.push( <li key={category}><NavLink to={'category/' + category.replaceAll(" ", "-") + '/1' } className='nav-link'>{category}</NavLink></li>)
    })

  return(
      <nav>
        <div>
            <ul>
              <li key='categories'>
                  <p className='categories'>Categories</p>
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