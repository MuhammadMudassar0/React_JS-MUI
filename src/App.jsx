
import './App.css'
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import {TableContainer} from './components/TableContainer';

import { OBDReport } from './components/OBDReport';

function App() {


  return (
    <>
    <Header />
    <HeroSection />
    <TableContainer />

    <OBDReport/>

    </>
  )
}

export default App
