import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Header from './Header'
import Form from './Form'
import Choose from './Choose'
import Confirm from './Confirm'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Form />} />
      <Route exact path="/Choose" element={<Choose />} />
      <Route exact path="/Confirm" element={<Confirm />} />
    </Routes>
  </BrowserRouter>
)

export default App
