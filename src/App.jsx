import { useState } from 'react'

import './App.css'

//components
// import NavTop from './components/nav/NavTop'
import Navbar from './components/NavBar/Navbar'
import Story from './components/story/Story'
import Post from './components/postBox/Post'
// import Test from './test/test'

//dataUsers
import { DataUser } from './data/user'

function App() {

  return (
    <div className='Add'>
      <Navbar/>
      {/* <Test user={DataUser}/> */}
      <Story user={DataUser}/>
      <Post user={DataUser}/>
      
    </div>
  )
}

export default App
