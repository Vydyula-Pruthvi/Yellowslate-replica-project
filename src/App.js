import React from 'react'
import Header from './Logic Planet/Header'
import Industries from './Logic Planet/Industries'
import Staffing from './Logic Planet/Staffing'
import Locations from './Logic Planet/Locations'
import GetInTouch from './Logic Planet/GetInTouch'
import Body from './Logic Planet/Body'
import Footer from './Logic Planet/Footer'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <>

<Router>
  <Header/>
  <Body/>
<Routes>
<Route path='/Body' element={<Body/>}></Route>
<Route path='/Industries' element={<Industries/>}></Route>
<Route path='/Locations' element={<Locations/>}></Route>
<Route path='/Staffing' element={<Staffing/>}></Route>
<Route path='/GetInTouch' element={<GetInTouch/>}></Route>

</Routes>
<Footer/>
</Router>
</>
  )
}

export default App