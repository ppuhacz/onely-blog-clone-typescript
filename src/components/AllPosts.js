import Pagination from "./Pagination";

function AllPosts(props) {

  if (props) {
    return (
      <Pagination data={props.data} />
    )
  }
  }



export default AllPosts