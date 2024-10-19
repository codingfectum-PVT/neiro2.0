import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'
import Header from '../../Sections/S1_Header'
import About from '../../Sections/S2_About'
import HowToBuy from '../../Sections/S3_howtobuy'
import Neironomics from '../../Sections/S4_Neironomics'
import Footer from '../../Sections/S5_Footer'

const MainPage = (props) => {
  return (
    <PageWrapper>
        <Header />
        <About />
        <HowToBuy />
        <Neironomics />
        <Footer />
    </PageWrapper>
  )
}

export default MainPage