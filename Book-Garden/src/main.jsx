import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import ListedBook from './Component/ListedBook/ListedBook';
import PagesRead from './Component/PagesRead/PagesRead';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import BookInformation from './Component/BookInformation/BookInformation';
// import ReadBook from './Component/ReadBook/ReadBook';
// import WishlistBook from './Component/WishlistBook/WishlistBook';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/listedbooks',
        element: <ListedBook></ListedBook>,
        loader: () => fetch('https://shahriyar06.github.io/book-api/book.json')
      },
      {
        path: '/pagesread',
        element: <PagesRead></PagesRead>,
        loader: () => fetch('https://shahriyar06.github.io/book-api/book.json')
      },
      {
        path: '/book/:bookId',
        element: <BookInformation></BookInformation>,
        loader: () => fetch('https://shahriyar06.github.io/book-api/book.json')
        // loader: () => fetch('book.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
