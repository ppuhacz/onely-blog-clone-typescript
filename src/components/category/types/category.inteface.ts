export interface Post {
  title: string;
  date: string;
  slug: string;
  coverImage: {
    url: string;
  };
  author: {
    name: string;
  };
}

export interface CategoryData {
  categoryName: string;
  slug: string;
  posts: Post[];
}

export interface Props {
  data?: {
    categories: CategoryData[];
  };
}
