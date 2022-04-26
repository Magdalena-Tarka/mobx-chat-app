import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Login from './components/views/Login/Login';
import Chat from './components/views/Chat/Chat';

const App: FC = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default App;
