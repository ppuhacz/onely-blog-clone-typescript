import { NavLink, useParams } from "react-router-dom";

function Author(props) {
  const params = useParams();
  const id = params.id;

  const socialMediaStyles = {
    color: '#3dd44f',
    fontSize: '2rem',
    marginRight: '1rem'
  }

    if(props.data) {
      let author = props.data.authors;
      console.log(author)

      // Filtering chosen author
      author = author.filter(author => author.name.toLowerCase().replace(" ", "-") === id);

      if(author.length) {

        // Replacing an array with an object
        author = author[0]

        // Iterating through all posts of chosen author
        const authorsPosts = [];
        author.posts.forEach(post => {
          authorsPosts.push(
            <NavLink to={'/post/' + post.slug} key={post.slug}>
            <div className="recent-post">
              <img src={post.coverImage.url} alt='Post cover' />
              <span><p>{author.name},</p><p>{post.date}</p></span>
              <span><h3>{post.title}</h3></span>
            </div>
          </NavLink>
          )
        })
        return (
          <main>
            <div className="author-page">
              <div className="author-header">
                <h1>{author.name}</h1>
                <p>{author.title}</p>
                <p>{author.description}</p>
                {author.socialMedia.twitter ? <a href={author.socialMedia.twitter}><i className="fa fa-twitter" style={socialMediaStyles}></i></a> : '' }
                {author.socialMedia.instagram ? <a href={author.socialMedia.instagram}><i className="fa fa-instagram" style={socialMediaStyles}></i></a> : '' }
                {author.socialMedia.linkedIn ? <a href={author.socialMedia.linkedIn}><i className="fa fa-linkedin" style={socialMediaStyles}></i></a> : '' }
                <img src={author.picture.url} alt='author' />
              </div>
              <div className="author-questions-container">
                <div className="question-and-answer">
                  <div className="question">
                    <h4>{author.question1.question}</h4>
                  </div>
                  <div className="answer">
                    <p>{author.question1.answer}</p>
                  </div>
                  <div className="question">
                    <h4>{author.question2.question}</h4>
                  </div>
                  <div className="answer">
                    <p>{author.question2.answer}</p>
                  </div>
                  <div className="question">
                    <h4>{author.question3.question}</h4>
                  </div>
                  <div className="answer">
                    <p>{author.question3.answer}</p>
                  </div>
                  <div className="question">
                    <h4>{author.question4.question}</h4>
                  </div>
                  <div className="answer">
                    <p>{author.question4.answer}</p>
                  </div>
                </div>
              </div>
              <div className="authors-posts">
                {authorsPosts}
              </div>
            </div>
          </main>
        )
      } else {
        return <div className='not-found'>Page not found</div>
      }
}
}

export default Author