import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './App.css'
import { router } from './configs/routes'

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
