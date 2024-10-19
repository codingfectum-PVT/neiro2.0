import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import niromomicsImage from '../../../assets/niromomicsImage.png'
import emotionStyled from '@emotion/styled'
import { buySellTax, dexScreenerLink, dexToolsLink, etherscanLink, supply, uniSwapLink } from '../../../links'
import { ButtonLink } from '../../Styles/style'
import uniswap from '../../../assets/uniswap.png'
import dextools from '../../../assets/dextools.png'
import dexscreener from '../../../assets/dexscreener.png'
import etherscan from '../../../assets/etherscan.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wrapper = emotionStyled.div`
    padding: 50px 0;
`

const Neironomics = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <Wrapper id='tokenomics'>
        <Container maxWidth="xl">
            <Grid container>
                <Grid items xs={12} textAlign={'center'} data-aos="fade-up">
                    <Typography variant='h2' textAlign={'center'} margingTop={3}>nEIRONOMICS</Typography>
                </Grid>
                <Grid items xs={12} container marginTop={3} padding={5} data-aos="fade-up" sx={{background: '#F6E6D6', border: '2px solid #252211', borderRadius: '3px'}}>
                    <Grid xs={12} sm={7} md={6} container>
                        <Grid xs={12}>
                            <Typography variant='h4' textTransform={'uppercase'} paddingLeft={0} textAlign={'left'}>{supply}</Typography>
                            <Typography variant='body2' maxWidth={380} marginTop={'10px'} className="cardsText" textAlign={'left'}>Supply</Typography>
                        </Grid>
                        <Grid xs={7} sm={8} md={5} lg={4}>
                            <Typography variant='h4' textTransform={'uppercase'} paddingLeft={0} textAlign={'left'}>$NEIRO2.0</Typography>
                            <Typography variant='body2' maxWidth={380} marginTop={'10px'} className="cardsText" textAlign={'left'}>Ticker</Typography>
                        </Grid>
                        <Grid xs={4}>
                            <Typography variant='h4' textTransform={'uppercase'} paddingLeft={0} textAlign={'left'}>{buySellTax}</Typography>
                            <Typography variant='body2' maxWidth={380} marginTop={'10px'} className="cardsText" textAlign={'left'}>Taxes</Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Typography variant='h4' textTransform={'uppercase'} paddingLeft={0} textAlign={'left'}>bURNED</Typography>
                            <Typography variant='body2' maxWidth={380} marginTop={'10px'} className="cardsText" textAlign={'left'}>Liquidity</Typography>
                        </Grid>
                        <Grid xs={12} marginTop={3}>
                            <ButtonLink href={uniSwapLink} target="_blank" className='socialButton'><img src={uniswap} /></ButtonLink>
                            <ButtonLink href={dexToolsLink} target="_blank" className='socialButton'><img src={dextools} /></ButtonLink>
                            <ButtonLink href={dexScreenerLink} target="_blank" className='socialButton'><img src={dexscreener} /></ButtonLink>
                            <ButtonLink href={etherscanLink} target="_blank" className='socialButton'><img src={etherscan} /></ButtonLink>
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={6} textAlign={'center'} marginTop={{xs: 3, md: 0}}>
                        <img src={niromomicsImage} style={{maxWidth: 500, width: '100%', height: 'auto', margin:'auto'}} />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Neironomics