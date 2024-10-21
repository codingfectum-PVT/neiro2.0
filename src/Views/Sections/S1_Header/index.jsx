import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import LockerMenu from '../../Components/LockerMenu'
import emotionStyled from '@emotion/styled'
import bg from '../../../assets/header-bg.jpg'
import headerimg from '../../../assets/headerimage.png'
import paw from '../../../assets/paw.png'
import bars from '../../../assets/bars.png'
import {ButtonLink} from '../../Styles/style' 
import { dexToolsLink, uniSwapLink } from '../../../links'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wrapper = emotionStyled.div`
    // min-height: 100vh;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px 0 40px;
`
const Image = emotionStyled.img`
    width: 100%;
    max-width: 500px;
    height: auto;
    margin-top: -15px;
    
    @media(max-width: 600px){
        margin-top: -8px;
    }
`

const TextBox = emotionStyled(Box)`
    background-color: #F6E6D6;
    border: 2px solid #252211;
    border-radius: 3px;
    max-width: 800px;
    margin: -23px auto 0;
    padding: 20px 20px;

    @media(max-width: 600px){
        margin-top: -15px;
    }
`

const Header = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <Wrapper>
        <LockerMenu />
        <Container maxWidth='xl' data-aos="zoom-in">
            <Grid container textAlign={'center'}>
                <Grid xs={12}>
                    <Image src={headerimg} />
                    <TextBox>
                        <Typography variant='h1'>The heir of doge</Typography>
                        <Typography variant='body2' maxWidth={'620px'} marginX={'auto'} marginTop={2}>Neiro 2.0 is here. Revamped, redefined, and ready to spark the next crypto revolution!</Typography>
                        <Box sx={{display: {xs: 'block', sm:'flex'}, justifyContent: 'center'}}>
                            <ButtonLink href={uniSwapLink} target="_blank" className='marginRight'><img src={paw} />Buy now</ButtonLink>
                            <ButtonLink href={dexToolsLink} className='white' target="_blank"><img src={bars} />View chart</ButtonLink>
                        </Box>
                    </TextBox>
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Header