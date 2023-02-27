import AllPosts from "../components/all-posts/all-posts";
import { Props } from "../components/all-posts/types/all-posts-interface";
import Layout from "../components/layout/layout";

const AllPostsPage = (props: Props) => {
  const { data } = props;
  return (
    <Layout data={data}>
      <AllPosts {...props} />
    </Layout>
  );
};

export default AllPostsPage;
