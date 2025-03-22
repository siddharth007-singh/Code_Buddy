import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainLayout from "./components/MainLayout"
import QuestionForm from './components/Question_Form'
import User from "./components/Users";

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


