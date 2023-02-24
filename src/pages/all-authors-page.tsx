import AllAuthors from "../components/all-authors/all-authors";
import { Props } from "../components/all-authors/types/all-authors-interface";

// import Layout from "../components/layout/layout";
// zaimplementować jakoś ten layout

const AllAuthorsPage = (props: Props) => {
  return <AllAuthors {...props} />;
};

export default AllAuthorsPage;
