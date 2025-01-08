import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,createRoutesFromElements ,Route, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Users from './components/Users/Users.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element ={<Home />} />
      <Route path='about' element ={<About />} />
      <Route path='contact' element ={<Contact />} />
      <Route path='users/' element ={<Users />} >
        <Route path=':userid' element={<Users/>}/>
      </Route>

      <Route path='github' element ={<Github />} />
      

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
