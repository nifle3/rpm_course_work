import React from 'react';
import ReactDOM from 'react-dom/client';
import Error from "./pages/error/error.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Error errorCode={404} errorShortInfo={"oops! Page not found"} errorInfo={"We havent this page"}/>
  </React.StrictMode>,
)