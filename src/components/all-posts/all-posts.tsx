import React from "react";
import Pagination from "../pagination/pagination";
import { Props } from "./types/all-posts-interface";
import { AllPostsEnum } from "./types/all-posts-enum";

const AllPosts: React.FC<Props> = ({ data }) => {
  const enumValue = AllPostsEnum.numberOfPages;
  if (!data) {
    return null;
  }
  return (
    <Pagination data={data.posts} itemsPerPage={enumValue} pageRoute="posts" />
  );
};

export default AllPosts;
