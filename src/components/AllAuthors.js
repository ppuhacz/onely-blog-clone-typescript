import { NavLink } from "react-router-dom";
import PageTop from "./PageTop";

function AllAuthors(props) {

  if(props) {
    let allAuthors = props.data.authors


    const socialMediaStyles = {
      color: '#3dd44f',
      fontSize: '2rem',
      marginRight: '1rem'
    }

    let authorsList = []
    allAuthors.forEach(author => {
      authorsList.push(
        <div className="author-card">
          <img src={author.picture.url} alt='author' />
          <NavLink to={`/author/` + author.name.toLowerCase().replaceAll(" ", "-")}><h1>{author.name}</h1>
          <p>{author.title}</p></NavLink>
          {author.socialMedia.twitter ? <a href={author.socialMedia.twitter}><i className="fa fa-twitter" style={socialMediaStyles}></i></a> : '' }
          {author.socialMedia.instagram ? <a href={author.socialMedia.instagram}><i className="fa fa-instagram" style={socialMediaStyles}></i></a> : '' }
          {author.socialMedia.linkedIn ? <a href={author.socialMedia.linkedIn}><i className="fa fa-linkedin" style={socialMediaStyles}></i></a> : '' }
        </div>
      )


    })
    return (
      <div className="all-authors-container">
        {authorsList}
      </div>
    )
  }
}

export default PageTop(AllAuthors)