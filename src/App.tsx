

import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Technologies from './components/Technologies'

function App() {
  

  return (
    <>
     <Nav></Nav> 
     <Banner></Banner>
     <Suspense fallback={<div>Loading...</div>}>
        <Technologies techPromise={techPromise}></Technologies>
      </Suspense>
    </>
  )
}

export default App
