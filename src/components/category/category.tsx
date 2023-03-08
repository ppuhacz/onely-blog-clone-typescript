import React, { FC } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../pagination/pagination";
import { Props } from "./types/category.inteface";
import { CategoryEnum } from "./types/category.enum";

const Category: FC<Props> = ({ data }) => {
  const { id } = useParams<{ id: string }>();
  const pagesNum: number = CategoryEnum.numberOfPages;
  if (data) {
    const { categories } = data;
    console.log(categories);
    console.log(id);

    // Filtering chosen category
    const categoryPosts = categories.filter((category) => category.slug === id);

    // Sorting all posts in descending order

    // !!! To powinno być posortowane na etapie pobrania danych z graphQL, tam są komendy do sortowania

    categoryPosts[0].posts.sort(function (post1, post2) {
      return new Date(post2.date).getTime() - new Date(post1.date).getTime();
    });

    if (categoryPosts.length) {
      const [matchedPosts] = categoryPosts;

      return (
        <Pagination
          data={matchedPosts.posts}
          itemsPerPage={pagesNum}
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
