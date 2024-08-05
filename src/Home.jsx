import React from 'react'
import image1 from "./images/2.jpg"
import { Stack} from '@mui/material';
import  StyledButton  from './js/ButtonStyle';
import {Link} from "react-scroll";
import Fade from '@mui/material/Fade';

window.onfocus = ()=> {location.reload();};


function Home() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    
  };

  const inter = setInterval(()=>{
    
    handleChange()
  },5000)


 

  return (
  
    
              
  <div  id="home">  
      <div>
        
      <Fade style={{position:"relative"}} in={checked}  timeout={1000}>
      <div><span>Hello!</span>
      <h1>I'm <span>Karim Isaac</span></h1><h2>Bim App Dev</h2></div></Fade>
      <Fade style={{position:'relative',top:-220}} in={!checked} timeout={1000}>
      <div><span>Hello!</span>
      <h1>I'm <span>Karim Isaac</span></h1><h2 >A Freelance Full Stack Web Developer</h2></div></Fade>
      
      <Stack spacing={2} direction={'row'}>
      <Link to="contact-section" spy={true} smooth={true} offset={50} duration={500}><StyledButton variant="contained">Hire Me</StyledButton></Link>
      <Link to="projects-section" spy={true} smooth={true} offset={50} duration={500}><StyledButton variant="contained">My works</StyledButton></Link> 
     
      </Stack>
         
       </div>
      
       <div style={{backgroundImage:`url(${image1}`}}>
	          		
       </div>
       
       </div>
	 

  )
}

export default Home
