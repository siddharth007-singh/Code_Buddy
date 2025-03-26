import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainLayout from "./components/MainLayout"
import QuestionForm from './components/Question_Form'
import User from "./components/Users";
import TagPage from './components/TagPage'

//Ye tumara apne roting hai 

const yashRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>
  },

  {
    path:"/ask-question",
    element:<QuestionForm/>
  },

  {
    path:"/users",
    element:<User/>
  },

  {
    path:"/tags",
    element:<TagPage/>
  }

  
])


function App() {
  return (
    <main>
      <Header/>
     <RouterProvider router={yashRouter}/>
    </main>
  ) 
}

export default App


