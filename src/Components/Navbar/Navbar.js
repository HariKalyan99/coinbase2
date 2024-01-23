import React, { useEffect, useState } from 'react'
import { ReactComponent as LogoIcon} from '../../assets/black.svg'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styles from './Navbar.module.css';
import { TextField, Autocomplete, Stack } from '@mui/material';
import axios from 'axios';




const Navbar = ({getId, setId}) => {

  const [getSymbol, setSymbol] = useState([]);

  const fetchData = async() => {
    try{
      const {data} = await axios.get("https://api.coincap.io/v2/rates")
      const ratesData = data.data;
      setSymbol(ratesData);
    }catch(error){
      console.log("Error", error.message)
    }
  }


  useEffect(() => {
    fetchData();
  }, []);





  return (
      <div>

      </div>
  )
}



export default Navbar