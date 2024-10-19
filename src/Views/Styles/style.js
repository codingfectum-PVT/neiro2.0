import emotionStyled from '@emotion/styled'
import { Button } from '@mui/material'
import bg from '.././../assets/page-bg.png'
const PageWrapper = emotionStyled.div`
    background-color: #FFF7EF;
    background-image: url(${bg});
    background-size: 100% auto;
    background-position: center;
    min-height: 100vh;
`
const ButtonLink = emotionStyled(Button)`
    background: #EBAD36;
    width: 100%;
    color: #28180F;
    max-width: 250px;
    font-family: 'heading' !important;
    margin-top: 25px;
    border-radius: 8px;
    border: 5px solid #252211;
    padding: 5px 5px;
    box-shadow: 0 5px 0 #252211;
    font-size: 25px;
    
    &.marginRight{
        margin-right: 20px;
        
        @media(max-width: 600px){
            margin-right: 0px;
        }
    }

    &:hover{
        background: #FFF7EF;
        box-shadow: 0 5px 0 #252211;
        border: 5px solid #252211;
    }
    
    
    &.white{
        background: #FFF7EF;
        box-shadow: 0 5px 0 #252211;
        border: 5px solid #252211;
        -webkit-text-stroke: 2px #252211;
        color: #FFF7EF;
        
        &:hover{
            background: #EBAD36;
        }
    }
       
    &.socialButton{
        max-width: unset;
        width: 10px;
        height: 50px;
        margin-right: 10px;
        margin-top: -9px;
        text-align: center;
        padding: unset;

        img{ margin: auto; }
        &:last-child{
            margin-right: 0px;
        }
    }

    img{
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }

    @media(max-width: 600px){
        font-size: 20px;
    }
`
export { PageWrapper, ButtonLink }