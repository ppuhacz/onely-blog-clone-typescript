import Home from "../components/home/home";
import { Props } from "../components/home/types/home-interface";
import Layout from "../components/layout/layout";

const HomePage = (props: Props) => {
  const { data } = props;
  return (
    <Layout data={data}>
      <Home {...props} />
    </Layout>
  );
};

export default HomePage;
