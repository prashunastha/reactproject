import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './Second'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import MyProfile from './pages/MyProfile'
import Profiles from './pages/Profiles'
import UserProfiles from './pages/UserProfiles'
import Counter from './pages/Counter';  
import DataFetch from './components/DataFetch'
import Post from './components/Post'
import ReduxCounter from './pages/ReduxCounter'
import ReduxPerson from './pages/ReduxPerson'




const MyRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<First />} />
          <Route path='/second' element={<Second />} />

          <Route path='/profile' element={<Profiles />}>
          <Route index element={<UserProfiles/>}/>
            <Route path=':username' element={<MyProfile />} />
          </Route>
          <Route path='/counter' element={<Counter/>}/>

          <Route path='/posts' element={<DataFetch/>}/>

          <Route path='/post/:id' element={<Post/>}/>

          <Route path='/redux/counter' element={<ReduxCounter/>}/>
          

          <Route path='/redux/person' element={<ReduxPerson/>}/>

          <Route path='*' element={<NotFound />} />

        </Route>

      </Routes>
    </HashRouter>
  )
}

export default MyRoutes