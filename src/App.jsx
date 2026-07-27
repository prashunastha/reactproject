import React from 'react'
import MyRoutes from './MyRoutes'
import './App.css'
import { MyContextProvider } from './context/MyContext'
import { MyThemeContextProvider } from './context/MyThemeContext'
import { MyStoreProvider } from './redux/store'


const App = () => {
  return (
    <>
   <MyStoreProvider>
   {/*react fragment<></>*/}
      <MyThemeContextProvider>
        <MyContextProvider>
         <MyRoutes/>
        </MyContextProvider>
      </MyThemeContextProvider>
    </MyStoreProvider>
   
   
   
    </>
  )
}

export default App