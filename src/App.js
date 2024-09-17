import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import MenuBar from './components/MenuBar';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AllPost from './components/AllPost';
import CreatePost from './components/CreatePost';
import DetailsPost from './components/DetailsPost';
import UpdatePost from './components/UpdatePost';
import Home from './components/Home';
import LoadmorePagi from './components/LoadmorePagi';
import PostPagination from './components/PostPagination';
import InfinityPagination from './components/InfinityPagination';
import InfinityPagination2 from './components/InfinityPagination2';


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