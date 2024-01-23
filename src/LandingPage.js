
import { useState } from 'react';
import Announcement from './Components/Announcement/Announcement';
import './LandingPage.css';
import Navbar from './Components/Navbar/Navbar';


function LandingPage() {
  const [currencyId, setCurrencyId] = useState([]);



  return (
    <div >
      <Announcement />
      <header>
        <Navbar getId={currencyId} setId={setCurrencyId}/>
      </header>
    </div>
  );
}

export default LandingPage;
