import { Navigate, NavLink, useParams } from "react-router-dom";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { request } from "graphql-request";
import PageTop from "../page-top/page-top";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import { Data } from "./types/post.interface";
import "./post.scss";
import { useEffect, useState } from "react";
import { GET_POST } from "./config/GET_POST";

function Post(): JSX.Element {
  const params = useParams<{ id: string }>();
  const { id } = params;

  // Fetching post that matched the pathname of the url

  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

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

        if (data && data) {
          setData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data?.post) {
    return <Navigate to="/404" replace />;
  }

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
            <img src={coverImage.url} alt="Post cover" />
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
