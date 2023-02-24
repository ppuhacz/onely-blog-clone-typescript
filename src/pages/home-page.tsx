import Home from "../components/home/home";
import { Props } from "../components/home/types/home-interface";

const HomePage = (props: Props) => {
  return <Home {...props} />;
};

export default HomePage;
