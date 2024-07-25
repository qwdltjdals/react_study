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
import PostPage2 from './pages/basic/PostPage2';
import PromisePage from './pages/basic/PromisePage';
import RegisterSizePage from './pages/basic/RegisterSizePage';
import RegisterColorPage from './pages/basic/RegisterColorPage';
import ComputerPage from './pages/basic/ComputerPage';

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
      <Route path='/anync/basic/post2' element={<PostPage2 />} />
      <Route path='/anync/basic/promise' element={<PromisePage />} />
      <Route path='/anync/basic/size/register' element={<RegisterSizePage />} />
      <Route path='/anync/basic/color/register' element={<RegisterColorPage />} />
      <Route path='/computer' element={<ComputerPage />} /> 
  </Routes>
  </MainContainer>
  </MainLayout>
</>
  );
}

export default App;
