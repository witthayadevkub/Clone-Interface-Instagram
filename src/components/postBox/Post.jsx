import React,{ useState, useRef } from 'react'
import './Post.css'
import { MdMoreHoriz } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import { LuSend } from "react-icons/lu";
const Post = ({user}) => {


  const [indexImage, setIndexImage] = useState(0)



    const handleprev = () =>{
      setIndexImage(indexImage-1)
       
        
    }

    const handlenext = () =>{
      setIndexImage(indexImage+1)
   
    }
  return (
    <div>

       {user.map((user, index) => (
        <div key={index}>
            

            <div  className="post">
                    {user.post?.map((post, i) => (
                    <div key={i}>
                        <div  className="postBar">
                            <div className="user">
                                <div className="photo">
                                    <img src={post.photo} alt={post.name} />
                                </div>
                                <p>{user.name}</p>
                            </div>
                            <span><MdMoreHoriz /></span>
                        </div>

                        <div className="postImg" >     

                                <div className='box' >
                                {post.img.map((img, index) =>(
                                <div key={index}  >


                            {post.img.length > 1 ?<img src={img} alt="" className={indexImage === index ? 'Img': 'hidden_Img'}/>
                            :<img src={img} alt="" className='Img'/>}
                                    
                            
                            {post.img.length > 1 && <div>
                              {indexImage != post.img.length-1 && <div className='right' onClick={handlenext}><FaAngleRight /></div>}
                              {indexImage != 0 && <div className='left' onClick={handleprev}><FaAngleLeft /></div>}
                              
                            </div>}
                            
                             
                                </div>
                            ))}
                                </div> 
                                <div className='points'>
                                  {post.img.map((_, index) =>(<div>
                                  {post.img.length > 1 && <button key={index}  className={indexImage === index ? 'point active': 'point inactive'}></button>}
                                      
                                      
                                    </div>
                                      
                                    ))}
                                </div>
                                    
                                

                        
                        </div>

                        <div className="title">
                            <div className="iconbox">
                                  <div className="iconleft">
                                        <i><FaRegHeart /></i>
                                        <i><TbMessageCircle /></i>
                                        <i><LuSend /></i>
                                  </div>
                                  <div className="iconright">
                                        <i><FaRegBookmark /></i>
                                  </div>
                            </div>
                        <p>{post.title} I'm {post.name}</p>
                    </div>
                        
                    </div>
                ))}
            </div>
        </div>
       ))}
    </div>
  )
}

export default Post