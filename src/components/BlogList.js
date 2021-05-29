import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.blogs.map((blog, i) => {
        return <BlogListItem key={i} {...blog} />
      })}
    </ul>
  )
}
const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps)(BlogList);
