import { NavLink } from "react-router-dom";

function Home (props) {
  if (props.data) {
  const allPosts = props.data.posts;

  //Looking for the recommended post to display at the top of the site
  const recommendedPost = allPosts.filter(post => post.recommendedPost === true)
  // console.log(recommendedPost)

  const recommendedPostPanel = [];
  if(recommendedPost.length) {
    recommendedPost.forEach(post => {
      recommendedPostPanel.push(
        <div className="recommended-post">
          <div className="recommended-post-cover">
            <NavLink to={'/post/' + post.slug}>
              <img src={post.coverImage.url} alt='Post cover' />
            </NavLink>
          </div>
          <div className="recommended-post-text">
            <span><p>RECOMMENDED POST</p>   {post.date}</span>
            <br/>
            <span><h2>{post.title}</h2></span>
            <br/>
            <span><p>{post.excerpt}</p></span>
            <br />
            <NavLink to={'/post/' + post.slug}>
              <span><p>Read more!</p></span>
            </NavLink>
          </div>
        </div>
      )
    })
  } else {
    return (
      <div className='missing-recommended-post'>No recommended post at this moment!</div>
    )
  }

  // Getting 3 of the newest posts to be displayed above the "Knowledge Base" panel and rendering them
  const threeLatestPosts = allPosts.slice(0, 3);

  const mostRecentPosts = [];
  threeLatestPosts.forEach(post => {
    mostRecentPosts.push(
    <NavLink to={'/post/' + post.slug}>
      <div className="recent-post">
        <img src={post.coverImage.url} alt='Post cover' />
        <span><p>{post.author.name},</p><p>{post.date}</p></span>
        <span><h3>{post.title}</h3></span>
      </div>
    </NavLink>
    )
  })

  // Getting 3 of the newest posts within the "knowledge base" category
  const allKnowledgeBasePosts = allPosts.filter(function(post) {
    return post.category.some(function(category){
      return category.categoryName === 'Knowledge Base'
    })
  })

  const latestKnowledgeBasePosts = [];
  allKnowledgeBasePosts.slice(0,3).forEach(post => {
    latestKnowledgeBasePosts.push(
      <NavLink to={'/posts/' + post.slug}>
        <div className="recent-post">
          <img src={post.coverImage.url} alt='Post cover' />
          <span><p>{post.author.name},</p><p>{post.date}</p></span>
          <span><h3>{post.title}</h3></span>
        </div>
      </NavLink>
    )
  })

  // Geting the next 6 most recent posts to display on the page
  const nextLatestPosts = allPosts.slice(3, 9);
  const recentPosts = [];

  nextLatestPosts.forEach(post => {
    recentPosts.push(
      <NavLink to={'/post/' + post.slug} key={post.slug}>
        <div className="recent-post">
          <img src={post.coverImage.url} alt='Post cover' />
          <span><p>{post.author.name},</p><p>{post.date}</p></span>
          <span><h3>{post.title}</h3></span>
        </div>
    </NavLink>
    )
  })

  return (
    <main>
      <section className="recommended-post">
        {recommendedPostPanel}
      </section>
      <section className="posts">
        {mostRecentPosts}
      </section>
      <section className="knowledge-base-display">
        <h1>KNOWDLEGE BASE PLACEHOLDER</h1>
        {latestKnowledgeBasePosts}
      </section>
      <section className="posts">
        {recentPosts}
        <NavLink to='/posts'>
          All posts...
        </NavLink>
      </section>
    </main>
  )
  }

}

export default Home