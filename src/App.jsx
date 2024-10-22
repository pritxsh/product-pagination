import React, { Suspense } from 'react'
import "./App.css"
import Shimmer from './Components/Shimmer/Shimmer'

const LazyLoading = React.lazy(()=>import("../src/Components/Pagination/Pagination"))

const App = () => {
  return (
   <>
   <h1>SuperInfo</h1>
  <Suspense fallback={<Shimmer/>}>
    <LazyLoading/>
  </Suspense>
   </>
  )
}

export default App