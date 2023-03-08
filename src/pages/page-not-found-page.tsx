import { Props } from "../components/all-authors/types/all-authors.interface";
import Layout from "../components/layout/layout";
import PageNotFound from "../components/page-not-found/page-not-found";

const PageNotFoundPage = ({ data }: Props) => {
  return (
    <Layout data={data}>
      <PageNotFound />;
    </Layout>
  );
};

export default PageNotFoundPage;
