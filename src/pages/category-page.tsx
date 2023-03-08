import Category from "../components/category/category";
import { Props } from "../components/category/types/category.inteface";
import Layout from "../components/layout/layout";

const CategoryPage = (props: Props) => {
  const { data } = props;
  return (
    <Layout data={data}>
      <Category {...props} />
    </Layout>
  );
};

export default CategoryPage;
