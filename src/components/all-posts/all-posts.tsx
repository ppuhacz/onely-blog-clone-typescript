import React from "react";
import Pagination from "../pagination/pagination";
import { Props } from "./types/all-posts-interface";

const AllPosts: React.FC<Props> = ({ data }) => {
  if (data) {
    return <Pagination data={data.posts} itemsPerPage={9} pageRoute="posts" />;
  }
  return null;
};

export default AllPosts;
