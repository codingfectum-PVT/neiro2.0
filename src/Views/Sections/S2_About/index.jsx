import emotionStyled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import aboutImage from '../../../assets/aboutImage.png'
import aboutImage2 from '../../../assets/aboutImage2.png'
import { Markee } from '../../Components/Markee'
import { ButtonLink } from '../../Styles/style'
import { uniSwapLink } from '../../../links'
import paw from '../../../assets/paw.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wrapper = emotionStyled.div`
    padding: 50px 0;
`
const Image = emotionStyled.img`
    position: absolute;
    bottom: 10%;
    right: 20px;
    width: 38%;
    max-width: 480px;
    height: auto;

    @media(max-width: 1085px){
        display: none;
    }
    @media(max-width: 670px){
        position: unset;
        width: 100%;
        margin-top: 30px;
    }
`
const GridEx = emotionStyled(Grid)`
    position: relative;
    margin-top: 3px;
    background: #F6E6D6;
    border: 2px solid #252211;
    border-radius: 3px;
    margin-top: 20%;
`


const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
    <Markee />
    <Wrapper id='about'>
        <Container maxWidth="xl" data-aos="fade-up">
            <Grid container>
                <Grid xs={12} md={6}>
                    <img src={aboutImage} style={{width: '100%', height: 'auto', paddingTop: 30, paddingRight: 30}} />
                </Grid>
                <Grid xs={12} md={6}>
                    <Typography variant='h2' maxWidth={'370px'}>About Neiro 2.0</Typography>
                    <Typography variant='body2' maxWidth={'620px'} marginTop={2}>Neiro 2.0 builds on the legacy of the beloved dog-themed meme coins, blending fun with function. Rooted in a community-driven spirit, it offers more than just a token, it's a platform for engagement, creativity, and innovation. With enhanced tokenomics, cross-chain compatibility, and unique community incentives, Neiro 2.0 aims to lead the evolution of meme coins while honoring its playful origins.</Typography>
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="xl" data-aos="fade-up">
            <Grid container>
                <GridEx items xs={12} container paddingTop={4} paddingX={5} paddingBottom={5}>
                    <Grid xs={12}>
                        <Typography variant='h2' color={'#F33B2F'}>Missed on neiro?</Typography>
                        <Typography variant='h2' color={''}>Don't miss on</Typography>
                        <Typography variant='h2' color={'#EBAD36'}>neiro 2.0!</Typography>
                        <ButtonLink href={uniSwapLink} target="_blank" className='marginRight'><img src={paw} />Buy now</ButtonLink>
                    </Grid>
                    <Image src={aboutImage2} />
                </GridEx>
            </Grid>
        </Container>
    </Wrapper>
    </>
  )
}

export default About