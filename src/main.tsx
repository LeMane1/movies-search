import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'src/app'
import { setupStore } from 'src/app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/movies-search/'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
