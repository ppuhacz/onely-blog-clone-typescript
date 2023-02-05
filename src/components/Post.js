import { NavLink, useParams } from "react-router-dom"
import { RichText } from "@graphcms/rich-text-react-renderer";


function Post(props) {
  const params = useParams();
  const id = params.id;

  if(props.data) {
    const allPosts = props.data.posts;

    // Looking for a post that matches the id
    const postFiltered = allPosts.filter(post => post.slug === id)

    if(postFiltered.length) {
      // Iterating through all the post data in order to render a post
      const matchingPostData = []
      postFiltered.forEach(post => {
        matchingPostData.push(
          <div key={post.slug}>
            <div className="post-header">
              <small>Bradcrumbs will go here</small>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-info">{post.author.name} • Published: {post.date} • Edited: {post.date}</p>
              <img src={post.coverImage.url} alt='Post cover' />
            </div>
            <div className="post-content">
              <RichText content={post.content.raw} />
            </div>
            <div className="post-author-info">
              <span><p>See all articles by <NavLink to={'/author/' + post.author.name.toLowerCase().replace(" ", "-")}>{post.author.name}</NavLink></p></span>
            </div>
          </div>
        )
      })
      return (
        <main>
          {matchingPostData}
        </main>

    )
    } else {
      return <div className="not-found">Page not found</div>
    }

  }
}

export default Post