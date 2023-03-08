export interface SocialMedia {
  twitter: string;
  instagram: string;
  linkedIn: string;
}

export interface Author {
  name: string;
  slug: string;
  picture: {
    url: string;
  };
  title: string;
  description: string;
  socialMedia: SocialMedia;
}

export interface Props {
  data: {
    authors: Author[];
  };
}
