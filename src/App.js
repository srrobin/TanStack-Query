import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import MenuBar from './components/TanStackQueryBasic/MenuBar';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/TanStackQueryBasic/Layout';
import AllPost from './components/TanStackQueryBasic/AllPost';
import CreatePost from './components/TanStackQueryBasic/CreatePost';
import DetailsPost from './components/TanStackQueryBasic/DetailsPost';
import UpdatePost from './components/TanStackQueryBasic/UpdatePost';
import Home from './components/TanStackQueryBasic/Home';
import LoadmorePagi from './components/TanStackQueryBasic/LoadmorePagi';
import PostPagination from './components/TanStackQueryBasic/PostPagination';
import InfinityPagination from './components/TanStackQueryBasic/InfinityPagination';
import InfinityPagination2 from './components/TanStackQueryBasic/InfinityPagination2';


const App = () => {
  return (
    <div>
      <MenuBar/>
       <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            {/* <Route path='/post' element={<AllPost/>}/> */}
            {/* <Route path='/post' element={<PostPagination/>}/> */}
            <Route path='/post' element={<LoadmorePagi/>}/>
            {/* <Route path='/post' element={<InfinityPagination/>}/> */}
            {/* <Route path='/post' element={<InfinityPagination2/>}/> */}
            <Route path='/create' element={<CreatePost/>}/>
            <Route path='/post/:id' element={<DetailsPost/>}/>
            <Route path='/update/:id' element={<UpdatePost/>}/>
            <Route path='*' element={<> Not Found </>}/>
          </Route>
       </Routes>
    </div>
  );
};

export default App;