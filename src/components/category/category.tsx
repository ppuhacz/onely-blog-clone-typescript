import React, { FC } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../pagination/pagination";
import { Props } from "./types/category.inteface";
import { CategoryEnum } from "./types/category.enum";

const Category: FC<Props> = ({ data }) => {
  const { id } = useParams<{ id: string }>();
  const itemsPerPage: number = CategoryEnum.numberOfPages;
  if (data) {
    const { categories } = data;

    // Filtering chosen category
    const categoryPosts = categories.filter((category) => category.slug === id);

    if (categoryPosts.length) {
      const [matchedPosts] = categoryPosts;

      return (
        <Pagination
          data={matchedPosts.posts}
          itemsPerPage={itemsPerPage}
          pageRoute={`category/` + categoryPosts[0].slug}
        />
      );
    } else {
      return <div className="not-found">Page not found</div>;
    }
  }
  return null;
};

export default Category;
