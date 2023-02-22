import { Navigate, NavLink, useParams } from "react-router-dom";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextContent, } from "@graphcms/rich-text-types";
import PageTop from "./PageTop";
import Breadcrumbs from './Breadcrumbs';
import '../styles/post.scss';

interface PostData {
  slug: string;
  title: string;
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  date: string;
  coverImage: {
    url: string;
  };
  content: {
    raw: RichTextContent;
  }
}

interface Props {
  data?: {
    posts: PostData[];
  };
}

function Post(props: Props): JSX.Element {
  const params = useParams<{ id: string }>();
  const id = params.id;

  if (props.data) {
    const allPosts = props.data.posts;

    // Looking for a post that matches the id
    const postFiltered = allPosts.filter((post) => post.slug === id);

    if (postFiltered.length) {
      // Iterating through all the post data in order to render a post
      const matchingPostData: JSX.Element[] = [];
      postFiltered.forEach((post) => {
        matchingPostData.push(
          <div key={post.slug}>
            <div className='header-container'>
              <div className="post-header">
                <Breadcrumbs />
                <h1 className="post-title">{post.title}</h1>
                <p className="post-info">{post.author.name} • Published: {post.date}</p>
                <div className="post-cover-container">
                  <img src={post.coverImage.url} alt='Post cover' />
                </div>

              </div>
            </div>
            <div className="post-container">
              <div className="post-content">
                <RichText content={post.content.raw} />
              </div>
              <div className="post-author-info">
                <span><img src={post.author.picture.url} alt='author'/><p><NavLink to={'/author/' + post.author.name.toLowerCase().replaceAll(" ", "-")}>See all articles by <strong>{post.author.name}</strong></NavLink></p></span>
              </div>
            </div>
          </div>
        );
      });

      return (
        <main>
          {matchingPostData}
        </main>
      );
    } else {
      return <Navigate to="/404" replace />;
    }
  }
  return <p>Loading...</p>
}

export default PageTop(Post);