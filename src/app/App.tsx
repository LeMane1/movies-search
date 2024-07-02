import './styles/index.css';
import { themeData } from './styles/theme';
import { ConfigProvider } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'src/pages/home-page';
import { MoviePage } from 'src/pages/movie-page';
import { NotFoundPage } from 'src/pages/not-found-page';

export const App: React.FC = () => {
  return (
    <>
      <ConfigProvider
        theme={themeData}
      >
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/about'} element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ConfigProvider>
    </>
  )
}
