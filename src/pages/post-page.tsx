import Layout from "../components/layout/layout";
import Post from "../components/post/post";
import { Props } from "../components/post/types/post.interface";

const PostPage = (props: Props) => {
  const { data } = props;
  return (
    <Layout data={data}>
      <Post {...props} />
    </Layout>
  );
};

export default PostPage;
