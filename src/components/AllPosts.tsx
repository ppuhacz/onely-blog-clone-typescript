import React from 'react';
import Pagination from "./Pagination";

interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  recommendedPost: boolean;
  slug: string;
  coverImage: {
    url: string;
  }
  excerpt: string;
  author: {
    name: string;
  }
}

interface Category {
  categoryName: string;
  posts: Post[];
}

interface Props {
  data?: {
    categories: Category[];
    posts: Post[];
  };
}

const AllPosts: React.FC<Props> = ({ data }) => {

  if (data) {
    return (
      <Pagination
        data={data.posts}
        itemsPerPage={9}
        pageRoute='posts'
        />
    )
  }
  return null
}



export default AllPosts