export interface Category {
  categoryName: string;
}

export interface Post {
  date: string;
}

export interface Data {
  categories: Category[];
  posts: Post[];
}

export interface NavbarProps {
  data?: Data;
}