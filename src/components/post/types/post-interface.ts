import { RichTextContent } from "@graphcms/rich-text-types";

export interface PostData {
  slug: string;
  title: string;
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  date: string;
  coverImage: {
    url: string;
  };
  content: {
    raw: RichTextContent;
  };
}

export interface Props {
  data?: {
    posts: PostData[];
  };
}