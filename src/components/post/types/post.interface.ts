import { RichTextContent } from "@graphcms/rich-text-types";

interface Content {
  raw: RichTextContent;
}

interface Author {
  name: string;
  slug: string;
  picture: {
    url: string;
  };
}

interface CoverImage {
  url: string;
}

export interface Post {
  title: string;
  date: string;
  slug: string;
  content: Content;
  coverImage: CoverImage;
  author: Author;
}

export interface Data {
  post: Post;
}

export interface Props {
  data?: Data;
}
