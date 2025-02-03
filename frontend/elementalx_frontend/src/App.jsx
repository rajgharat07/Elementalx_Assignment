import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Profiles from './components/Profiles'

function App() {

  return (
    <>
      <Provider store={appStore}>

      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
