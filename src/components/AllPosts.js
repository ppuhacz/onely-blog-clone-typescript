import Pagination from "./Pagination";

function AllPosts(props) {

  if (props) {
    return (
      <Pagination
        data={props.data.posts}
        itemsPerPage={9}
        pageRoute='posts'
        />
    )
  }
  }



export default AllPosts