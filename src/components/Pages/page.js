import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Sidebar from '../Sidebar/Sidebar'
import About from '../About/About'
import Footer from '../Footer/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

  return (
        <div>
            <Sidebar isOpen = {isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <Services/>
            <About/>
            <Footer/>
        </div>
  )
}

export default Home;