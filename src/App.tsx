import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/routes'

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
