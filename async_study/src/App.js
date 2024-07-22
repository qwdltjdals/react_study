import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import GetPage from './pages/basic/GetPage';
import DeletePage from './pages/basic/DeletePage';
import PostPage from './pages/basic/PostPage';
import PutPage from './pages/basic/PutPage';
import MainLayout from './components/MainLayout/MainLayout';
import Sidebar from './components/Sidebar/Sidebar';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (

<>
  <Global styles={reset}/>
  <MainLayout>
    <Sidebar />
    <MainContainer>
  <Routes>
      <Route path='/anync/basic/post' element={<PostPage/>} />
      <Route path='/anync/basic/get' element={<GetPage/>} />
      <Route path='/anync/basic/put' element={<PutPage/>} />
      <Route path='/anync/basic/delete' element={<DeletePage/>} />
  </Routes>
  </MainContainer>
  </MainLayout>
</>
  );
}

export default App;
