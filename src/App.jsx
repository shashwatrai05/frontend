import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed.jsx'
import Discover from './pages/Discover.jsx'
import Messages from './pages/Messages.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'
import ChatBox from './pages/ChatBox'
import Connections from './pages/Connections.jsx'
import CreatePost from './pages/CreatePost.jsx'

const App = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route index element={<Feed />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:userId" element={<ChatBox />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:profileId" element={<Profile />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </>
  )
}

export default App
