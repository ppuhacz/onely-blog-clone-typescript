import Post from "../components/post/post";
import { Props } from "../components/post/types/post-interface";

const PostPage = (props: Props) => {
  return <Post {...props} />;
};

export default PostPage;
