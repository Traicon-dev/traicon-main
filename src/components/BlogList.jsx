// // BlogList.jsx
import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import AnimatedText from './AnimatedText'

const BlogsHeader = styled.div`
width: 100%;
height: 20vw;  
display: flex;
align-items: center;
justify-content: center;
position: relative;

& .ab-grid-box{
  position: absolute;
  width: 20vw;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -5vw;
  bottom: -5vw;
  z-index: -1;
}

& .ab-h-grid-box{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

& .ab-h-grid{
  width: 100%;
  height: 1px;
background: linear-gradient(to right, #ffffff00, #ffffff21, #ffffff00);
}

& .ab-v-grid-box{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

& .ab-v-grid{
  width: 1px;
  height: 100%;
background: linear-gradient(#ffffff00, #ffffff21, #ffffff00);
}

@media screen and (max-width:767px) {
  height: 50vw;
}
@media screen and (min-width: 768px) and (max-width:1024px) {
  height: 40vw;
}
`
const BlogsGlow = styled.div`
width: 10vw;
height: 10vw;
background-color: #2f9cda;
position: absolute;
border-radius: 50%;
right: -5vw;
filter: blur(70px);

@media screen and (max-width:768px) {
  height: 30vw;
  width: 30vw;
  right: -15vw;
}
@media screen and (min-width: 768px) and (max-width:1024px){
  height: 20vw;
  width: 20vw;
  right: -10vw;
}
`

const BlogsHeaderCont = styled.div`
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;

h2{
  color: white;
  font-size: 5vw;
  font-family: "sdel";
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
p{
  color: white;
  font-family: "figtree";
  margin: 0;
  font-size: 1.1vw;
  font-weight: 300;
}
.element{
  font-size: 1vw;
  font-weight: 600;
  margin-top: 1vw;
}
.element span{
  color: #2f9cda;
}

@media screen and (max-width:768px){
 h2{
  font-size: 10vw;
 }
 p{
  font-size: 3.5vw;
 }
  .element {
    font-size: 3vw;
    margin-top: 3vw;
}
}
@media screen and (min-width: 768px) and (max-width:1024px){
   h2{
  font-size: 7vw;
 }
 p{
  font-size: 2.5vw;
 }
  .element {
    font-size: 2.2vw;
    margin-top: 2vw;
}
}
`

const BlogList = () => {
  return (

    <>

      <BlogsHeader>
        <Helmet>
          <title>TRAICON EVENTS | BLOGS</title>
          <meta name="description" content="Visit our site to get more blog updates on latest Business and corporate Events." />

        </Helmet>
        <BlogsGlow>

        </BlogsGlow>
        <div className="ab-grid-box">
          <div className="ab-h-grid-box">
            <div className="ab-h-grid"></div>
            <div className="ab-h-grid"></div>
            <div className="ab-h-grid"></div>
            <div className="ab-h-grid"></div>
            <div className="ab-h-grid"></div>
          </div>
          <div className="ab-v-grid-box">
            <div className="ab-v-grid"></div>
            <div className="ab-v-grid"></div>
            <div className="ab-v-grid"></div>
            <div className="ab-v-grid"></div>
            <div className="ab-v-grid"></div>
            <div className="ab-v-grid"></div>

          </div>

        </div>
        <BlogsHeaderCont>
          <h2><AnimatedText lines={['Blogs']} /></h2>
          <p>Latest News, Insights & Highlights from the Event World</p>
          <p className='element'>Home &gt; <span>Blogs Us</span></p>
        </BlogsHeaderCont>
      </BlogsHeader>
      <div className="blogs">

        {blogPosts.map((post) => (

          <Link to={`/blog/${post.id}`} key={post.id}>
            <div className="blog-box" >
              <div className="blog-img">
                <div className="blog-type">{post.category}</div>
                <img src={post.image} alt={post.title} />
              </div>

              <p className="blog-name">{post.title}</p>
              <div className="blog-date">{post.date}</div>
              <button className="blog-btn">Know More</button>
            </div>

          </Link>
        ))}
      </div>

    </>
  );
};

export default BlogList;
