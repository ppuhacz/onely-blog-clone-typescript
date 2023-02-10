import { NavLink } from "react-router-dom";
import PageTop from "./PageTop";
import "../styles/our-team.scss";
import { useState } from "react";

function AllAuthors(props) {

  const [isHovered, setIsHovered] = useState(false)

  if(props) {
    let allAuthors = props.data.authors

    const socialMediaStyles = {
      color: '#3dd44f',
      fontSize: '1.6rem',
      marginRight: '1rem'
    }

    let authorsList = []
    allAuthors.forEach(author => {
      authorsList.push(
        <div className="author-card"
          onMouseEnter={() => setIsHovered(author.name)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <img src={author.picture.url} alt='author' />
          <div className={isHovered === author.name ? 'author-card-hovered' : 'author-card-not-hovered'}>
            <div className="author-card-hovered-info">
            <NavLink to={`/author/` + author.name.toLowerCase().replaceAll(" ", "-")}><h3>{author.name}</h3>
            <p className="author-title">{author.title}</p></NavLink>
            <p className="author-excerpt">{author.description.substring(0, author.description.indexOf("."))}.</p>
            {author.socialMedia.twitter ? <a href={author.socialMedia.twitter}><i className="fa fa-twitter" style={socialMediaStyles}></i></a> : '' }
            {author.socialMedia.instagram ? <a href={author.socialMedia.instagram}><i className="fa fa-instagram" style={socialMediaStyles}></i></a> : '' }
            {author.socialMedia.linkedIn ? <a href={author.socialMedia.linkedIn}><i className="fa fa-linkedin" style={socialMediaStyles}></i></a> : '' }
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="all-authors-container">
        <h2>Our Team</h2>
        {authorsList}
      </div>
    )
  }
}

export default PageTop(AllAuthors)