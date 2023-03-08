import React from "react";
import Pagination from "../pagination/pagination";
import { Props } from "./types/all-posts.interface";
import { AllPostsEnum } from "./types/all-posts.enum";

const AllPosts = ({ data }: Props) => {
  const numberOfPages = AllPostsEnum.numberOfPages;
  if (!data) {
    return null;
  }
  return (
    <Pagination
      data={data.posts}
      itemsPerPage={numberOfPages}
      pageRoute="posts"
    />
  );
};

export default AllPosts;
