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
import Layout from './pages/Layout.jsx'
import { useAuth } from '@clerk/clerk-react'
import Loading from './components/Loading.jsx'
import toast, { Toaster } from 'react-hot-toast'

const App = () => {
  const { isSignedIn, isLoaded } = useAuth();

  // Show loading while Clerk loads
  if (!isLoaded) {
    return <Loading />
  }

  // If user is not signed in, show login page
  if (!isSignedIn) {
    return <Login />
  }

  // If user is signed in, show the main app with Layout
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="discover" element={<Discover />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="connections" element={<Connections />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="createpost" element={<CreatePost />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </>
  )
}

export default App
