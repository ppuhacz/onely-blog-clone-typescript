import React from "react";
import Pagination from "../pagination/pagination";
import { Props } from "./types/all-posts.interface";
import { AllPostsEnum } from "./types/all-posts.enum";

const AllPosts = ({ data }: Props) => {
  const numberOfPosts: number = AllPostsEnum.numberOfPosts;
  if (!data) {
    return null;
  }
  return (
    <Pagination
      data={data.posts}
      itemsPerPage={numberOfPosts}
      pageRoute="posts"
    />
  );
};

export default AllPosts;
