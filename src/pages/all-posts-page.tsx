import AllPosts from "../components/all-posts/all-posts";
import { Props } from "../components/all-posts/types/all-posts-interface";

const AllPostsPage = (props: Props) => {
  return <AllPosts {...props} />;
};

export default AllPostsPage;
