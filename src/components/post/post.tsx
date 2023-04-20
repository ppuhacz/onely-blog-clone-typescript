import { Navigate, NavLink, useLocation, useParams } from "react-router-dom";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { request } from "graphql-request";
import PageTop from "../page-top/page-top";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import { Data } from "./types/post.interface";
import "./post.scss";
import { useEffect, useState } from "react";
import { GET_POST } from "./config/GET_POST";

function Post(): JSX.Element {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams<{ id: string }>();
  const { id } = params;

  const location = useLocation();

  useEffect(() => {
    async function fetchPost() {
      try {
        const query = GET_POST;
        const variables = {
          slug: id,
        };

        const data = await request<Data>(
          "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcozcwgx0lbo01uneoby69s1/master",
          query,
          variables
        );

        if (data?.post) {
          setData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }

    // If page is loaded and doesnt have a state, it will fetch the post from the API, otherwise use location's state
    if (!location.state) {
      fetchPost();
    } else if (location.state[0].post) {
      setData(location.state[0]);
      setLoading(false);
    }
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-circle"></div>
      </div>
    );
  }

  if (!data) {
    return <Navigate to="/404" />;
  }
  console.log(data);
  const { slug, title, date, author, coverImage, content } = data.post;
  return (
    <div key={slug}>
      <div className="header-container">
        <div className="post-header">
          <Breadcrumbs />
          <h1 className="post-title">{title}</h1>
          <p className="post-info">
            {author.name} • Published: {date}
          </p>
          <div className="post-cover-container">
            <img src={coverImage.url} alt="Post cover" className="post-cover" />
          </div>
        </div>
      </div>
      <div className="post-container">
        <div className="post-content">
          <RichText content={content.raw} />
        </div>
        <div className="post-author-info">
          <span>
            <img src={author.picture.url} alt="author" />
            <p>
              <NavLink to={`/author/${author.slug}`}>
                See all articles by <strong>{author.name}</strong>
              </NavLink>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageTop(Post);
