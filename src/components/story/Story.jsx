import React from 'react'
import './Story.css'

import { GrFormAdd } from "react-icons/gr";

const Story = ({user}) => {

  return (
    <div className="con">
        <div className='boxall'>
        <div className="story">

            <div className="box">

                <div className="photo">
                    <img src="https://images.unsplash.com/photo-1706018167918-a1b9ef373eac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <i><GrFormAdd /></i>
                    
                </div>
            <p>Your story</p>
            </div>
            

            {user.map((story, index) => (
                <div key={index} className='storyUser'>
                    <div className="photoUser">
                        <div className="img">
                             <img src={story.photo} alt={story.name} />
                        </div>
                    </div>
                    
                    <p>{story.name}</p>
                </div>
            ))}
        </div>
    </div>
    </div>
    
  )
}

export default Story