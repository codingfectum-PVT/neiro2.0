import emotionStyled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import siteIcon from '../../../assets/siteIcon.png'
import { menuList } from '../../Components/LockerMenu'
import { MenuLink } from '../../Components/LockerMenu/styles'
import { tgLink, xLink } from '../../../links'
import { ButtonLink } from '../../Styles/style'
import tg from '../../../assets/tg.png'
import x from '../../../assets/x.png'


const Wrapper = emotionStyled.div`
    padding: 140px 0 50px;
    background: #F6E6D6;
    border-top: 6px solid #252211;
    position: relative;
    z-index: 0;
    margin-top: 160px;
`

const ImageContainer = emotionStyled.div`
    img{ position: absolute;
    z-index: -1;
    max-width: 300px;
    width: 100%
    height: auto;
    top: -188px;
    left: 0;
    right: 0;
    margin: auto;}
    // position: relative;
    // width: 200px; /* Adjust the size */
    // height: 200px; /* Adjust the size */
    // border-radius: 50%; /* Makes the container round */
    // border: 10px solid white; /* White border around the image */
    // overflow: hidden; /* Ensures the image and overlay stay within the circle */

    // img{
    //     width: 100%;
    //     height: 100%;
    //     border-radius: 50%; /* Ensures the image is round */
    //     object-fit: cover; /* Ensures the image fits well inside */

    //     &::before {
    //         content: 'bcvbcd';
    //         position: absolute;
    //         bottom: 0;
    //         width: 100%;
    //         height: 50%; /* Only half of the circle */
    //         background-color: black; /* Black half overlay */
    //         border-bottom-left-radius: 50%; /* Round bottom-left corner */
    //         border-bottom-right-radius: 50%; /* Round bottom-right corner */
    //         left: 0;
    //     }
    // }


`

const Footer = () => {
  return (
    <Wrapper>
        <ImageContainer>
            <img src={siteIcon} />
        </ImageContainer>
        <Container maxWidth={'xl'}>
            <Grid container>
                <Grid items xs={12} textAlign={'center'}>
                    <Typography variant='h2' textAlign={'center'} margingTop={3}>Neiro 2.0</Typography>
                </Grid>
                <Grid xs={12} textAlign={'center'} marginTop={3} display={{xs: 'none', md:'block'}}>
                    {menuList.map((value, i) => <MenuLink key={i} href={value.link} target={value.target} className={value.customClass}>{value.title}</MenuLink> )}
                </Grid>
                <Grid xs={12} textAlign={'center'} marginTop={3}>
                    <ButtonLink href={tgLink} target="_blank" className='socialButton'><img src={tg} /></ButtonLink>
                    <ButtonLink href={xLink} target="_blank" className='socialButton'><img src={x} /></ButtonLink>
                </Grid>
                <Grid xs={12}>
                    <Typography variant='body2' marginTop={'30px'} textAlign={'center'}>Cryptocurrency investments carry a high risk of volatility. Be aware of the tax implications, as profits may be subject to capital gains or other taxes in your jurisdiction. Cryptocurrency regulations can vary, so ensure you understand the rules in your area. Conduct thorough research and invest only what you can afford to lose.</Typography>
                    <Typography variant='body2' marginTop={'30px'} textAlign={'center'}>info@neiro20.org</Typography>
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Footer