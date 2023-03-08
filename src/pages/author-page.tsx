import Author from "../components/author/author";
import { Props } from "../components/author/types/author.interface";
import Layout from "../components/layout/layout";

const AuthorPage = (props: Props) => {
  const { data } = props;
  return (
    <Layout data={data}>
      <Author {...props} />
    </Layout>
  );
};

export default AuthorPage;
