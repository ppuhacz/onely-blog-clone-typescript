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
    return <div>Loading...</div>; // mógłbym to zrobić jakoś ładniej, ale po co :)
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

export default Post;

// @ Q:
//can i use one api fetch and then modify the queries in other component so it will fetch what has already been fetch without downloading it another time?
//For example, fetch a whole api that containt post, authors, categories, and then in post component get the post data that matches the id?

// @ A:
// Yes, you can use a technique called "data caching" to avoid fetching the same data multiple times from an API. Here's one way to implement this technique:

// Create a cache object to store the fetched data. This object should be accessible from all components that need to use it. For example, you could create a cache.ts file with the following code:
// typescript
// Copy code
// interface Cache {
//   [key: string]: any;
// }

// const cache: Cache = {};

// export function getFromCache(key: string): any {
//   return cache[key];
// }

// export function setInCache(key: string, value: any): void {
//   cache[key] = value;
// }
// This code defines a Cache interface to describe the shape of the cache object, and two functions getFromCache and setInCache to get and set data in the cache.

// Use the cache to store the fetched data. For example, you could modify your API fetching code to store the fetched data in the cache:
// javascript
// Copy code
// import { setInCache } from './cache';

// async function fetchPosts(): Promise<Post[]> {
//   const response = await fetch('/api/posts');
//   const data = await response.json();
//   setInCache('posts', data);
//   return data;
// }

// async function fetchAuthors(): Promise<Author[]> {
//   const response = await fetch('/api/authors');
//   const data = await response.json();
//   setInCache('authors', data);
//   return data;
// }

// async function fetchCategories(): Promise<Category[]> {
//   const response = await fetch('/api/categories');
//   const data = await response.json();
//   setInCache('categories', data);
//   return data;
// }
// This code fetches the data from the API and stores it in the cache using the setInCache function.

// Use the cached data in other components. For example, in your Post component, you could get the post data that matches the ID from the cached posts data:
// typescript
// Copy code
// import { getFromCache } from '../cache';

// interface Props {
//   id: string;
// }

// const Post = ({ id }: Props) => {
//   const posts = getFromCache('posts') as Post[];
//   const post = posts.find(p => p.id === id);
//   if (!post) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       <h1>{post.title}</h1>
//       {/* render other post data */}
//     </div>
//   );
// };

// export default Post;
// This code uses the getFromCache function to get the cached posts data, and then finds the post that matches the given ID.

// By using this technique, you can avoid fetching the same data multiple times from the API, and improve the performance of your application.
