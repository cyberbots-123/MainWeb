import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Home1 from '../../components/Home1/Home1'
import Home2 from '../../components/Home2/Home2'
import Home3 from '../../components/Home3/Home3'
import Home4 from '../../components/Home4/Home4'
import Home5 from '../../components/Home5/Home5'
import Home6 from '../../components/Home6/Home6'
import Home02 from '../../components/Home02/Home02'

const Home = () => {
  return (
    <div>
      {/* <SocialMedia/> */}
        <Navbar/>
        <Home1/>
        <Home02/>
        <Home2/>
        <Home3/>
        <Home4/>
        <Home5/>
        <Home6/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home