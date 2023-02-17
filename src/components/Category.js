import { useParams } from 'react-router-dom'
import Pagination from './Pagination';


function Category(props) {
  const params = useParams();
  const id = params.id;

    if(props.data) {
      const categories = props.data.categories;

      // Filtering chosen category
      const categoryPosts = categories.filter(category => category.categoryName.replaceAll(" ", "-") === id)

      // Sorting all posts in descending order
      categoryPosts[0].posts.sort(function(post1, post2) {
        return new Date(post2.date) - new Date(post1.date)
      })

      if(categoryPosts.length) {
        const categoryName = categoryPosts[0].categoryName.replaceAll(" " , "-")
        const [matchedPosts] = categoryPosts

        return (
          <Pagination
            data={matchedPosts.posts}
            itemsPerPage={9}
            pageRoute={`category/`+ categoryName}
          />
        )
      } else {
        return <div className='not-found'>Page not found</div>
      }


    }
}

export default Category

