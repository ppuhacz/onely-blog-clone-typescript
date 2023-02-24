import { useParams } from "react-router-dom";
import Pagination from "../pagination/pagination";
import React, { FC } from "react";
import { Props } from "./types/category-inteface";

const Category: FC<Props> = (props) => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  if (props.data) {
    const categories = props.data.categories;

    // Filtering chosen category
    const categoryPosts = categories.filter(
      (category) => category.categoryName.replaceAll(" ", "-") === id
    );

    // Sorting all posts in descending order
    categoryPosts[0].posts.sort(function (post1, post2) {
      return new Date(post2.date).getTime() - new Date(post1.date).getTime();
    });

    if (categoryPosts.length) {
      const categoryName = categoryPosts[0].categoryName.replaceAll(" ", "-");
      const [matchedPosts] = categoryPosts;

      return (
        <Pagination
          data={matchedPosts.posts}
          itemsPerPage={9}
          pageRoute={`category/` + categoryName}
        />
      );
    } else {
      return <div className="not-found">Page not found</div>;
    }
  }
  return null;
};

export default Category;
