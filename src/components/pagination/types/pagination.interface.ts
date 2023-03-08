export interface Props {
  data: Post[];
  itemsPerPage: number;
  pageRoute: string;
}

export interface Post {
  slug: string;
  coverImage: {
    url: string;
  };
  author: {
    name: string;
  };
  date: string;
  title: string;
}