import AllAuthors from "../components/all-authors/all-authors";
import { Props } from "../components/all-authors/types/all-authors.interface";
import Layout from "../components/layout/layout";

const AllAuthorsPage = (props: Props) => {
  const { data } = props;
  return (
    <Layout data={data}>
      <AllAuthors {...props} />
    </Layout>
  );
};

export default AllAuthorsPage;
