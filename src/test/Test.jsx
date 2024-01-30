import React,{useRef, useState} from 'react'
// import './test.css'
const Test = ({user}) => {
    // console.log(user)
const post = user.map(user => user.post)
// console.log(post)
     const sliderRef = useRef(null);
  const scrollAmount = 400; // The amount to scroll when clicking the navigation buttons
  const [images, setImages] = useState([
    // Here, you can add your own image objects with their respective URLs
    // For this example, we'll use some cool images from Unsplash
    {url:'https://images.unsplash.com/photo-1705893899659-64ab90038965?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {url:'https://images.unsplash.com/photo-1705714135183-dbe57919b735?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {url: 'https://images.unsplash.com/photo-1680068390604-be280c495124?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
  ]);
  return (
    <div className="App">

      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
        }}
      >
        {/* <ChevronLeftIcon /> */}
        <span>{'<'}</span>
      </button>
    {/* Image container */}


  {/* {post.map(post => (
    <div>{console.log(post)}

        {post?.map(post => (
            <div>

                <img src={post.img} alt="" />
            </div>
        ))}
    </div>
    
  ))} */}
                
                
                



    
      <div className="images-container" ref={sliderRef}>
        {images.map((image) => {
          return (
            <img
              className="image"
              alt="sliderImage"

              src={image?.url}
            />
          );
        })}
      </div>
    {/* Right navigation button */}
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount; // Scroll right by the specified amount
        }}
      >
        {/* <ChevronRightIcon /> */}
        <span>{'>'}</span>
      </button>
   </div>
  )
}

export default Test