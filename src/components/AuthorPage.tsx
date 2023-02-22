import { Navigate, NavLink, useParams } from "react-router-dom";
import "../styles/author.scss";
import PageTop from "./PageTop";

interface SocialMedia {
  twitter: string;
  linkedIn: string;
  instagram: string;
}

interface Post {
  title: string;
  date: string;
  category: string;
  content: string;
  slug: string;
  coverImage: {
    url: string;
  };
}

interface Author {
  name: string;
  title: string;
  description: string;
  socialMedia: SocialMedia;
  posts: Post[];
  picture: {
    url: string;
  };
  question1: {
    question: string;
    answer: string;
  };
  question2: {
    question: string;
    answer: string;
  };
  question3: {
    question: string;
    answer: string;
  };
  question4: {
    question: string;
    answer: string;
  };
}

interface Props {
  data?: {
    authors: Author[];
  };
}

const AuthorPage = (props: Props) => {
  const { id } = useParams<{ id: string }>();

  const socialMediaStyles = {
    color: '#3dd44f',
    fontSize: '2rem',
    marginRight: '1rem'
  }

  const quotationMarkStyles = {
    color: '#3dd44f',
    fontSize: '3.6rem',
    marginBottom: '1rem'
  }

  if (props.data) {
    let authors = props.data.authors;

    // Filtering chosen author
    const author = authors.find(author => author.name.toLowerCase().replace(" ", "-") === id);

    if (author) {
      // Iterating through all posts of chosen author
      const authorsPosts = author.posts.map((post) => (
        <NavLink to={`/post/${post.slug}`} key={post.slug}>
          <div className="recent-post">
            <img src={post.coverImage.url} alt='Post cover' />
            <span><p>{author.name},</p><p>{post.date}</p></span>
            <span><h3>{post.title}</h3></span>
          </div>
        </NavLink>
      ));


        return (
          <main>
            <div className="author-page">
              <div className="author-header-container">
                <div className="author-header">
                  <div className="author-header-text">
                    <h1>{author.name}</h1>
                    <p className="author-title">{author.title}</p>
                    <p className="author-description">{author.description}</p>
                    <span className="social-media">
                    {author.socialMedia.twitter ? <a href={author.socialMedia.twitter}><i className="fa fa-twitter" style={socialMediaStyles}></i></a> : '' }
                    {author.socialMedia.instagram ? <a href={author.socialMedia.instagram}><i className="fa fa-instagram" style={socialMediaStyles}></i></a> : '' }
                    {author.socialMedia.linkedIn ? <a href={author.socialMedia.linkedIn}><i className="fa fa-linkedin" style={socialMediaStyles}></i></a> : '' }
                    </span>
                  </div>
                  <img src={author.picture.url} alt='author' />
                </div>
              </div>
              <div className="author-questions-container">
                <div className="question-and-answer">
                  <div className="question">
                    <h4>{author.question1.question}</h4>
                  </div>
                  <div className="answer">
                    <i className="material-symbols-outlined" style={quotationMarkStyles}>
                      format_quote
                    </i>
                    <p>{author.question1.answer}</p>
                  </div>
                  <div className="question">
                    <h4>{author.question2.question}</h4>
                  </div>
                  <div className="answer">
                  <i className="material-symbols-outlined" style={quotationMarkStyles}>
                    format_quote
                  </i>
                    <p>{author.question2.answer}</p>
                  </div>
                  <div className="question">
                    <h4>{author.question3.question}</h4>
                  </div>
                  <div className="answer">
                    <i className="material-symbols-outlined" style={quotationMarkStyles}>
                      format_quote
                    </i>
                    <p>{author.question3.answer}</p>
                  </div>
                  <div className="question">
                    <h4>{author.question4.question}</h4>
                  </div>
                  <div className="answer">
                    <i className="material-symbols-outlined" style={quotationMarkStyles}>
                      format_quote
                    </i>
                    <p>{author.question4.answer}</p>
                  </div>
                </div>
              </div>
              {authorsPosts.length ? (
                <div className="authors-posts-container">
                  <div className="authors-recent-posts"><h3>All posts from this author:</h3></div>
                  <div className="authors-posts">
                    {authorsPosts}
                  </div>
                </div>
              ) : ''}

            </div>
          </main>
        )
      } else {
        return <Navigate to='/404'/>
      }
}
return null
}

export default PageTop(AuthorPage);
