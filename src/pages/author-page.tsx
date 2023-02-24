import Author from "../components/author/author";
import { Props } from "../components/author/types/author-interface";

const AuthorPage = (props: Props) => {
  return <Author {...props} />;
};

export default AuthorPage;
