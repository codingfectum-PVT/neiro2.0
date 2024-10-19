import emotionStyled from '@emotion/styled'
import React from 'react'
import bgtextlogo from "../../../assets/text-logo.png"

const MarkeeContainer = emotionStyled.div`
    width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
    background-color: #F6E6D6;
    border-top: 4px solid #252211;
    border-bottom: 4px solid #252211;
    
    .marquee {
        display: inline-block;
        white-space: nowrap;
        text-transform: uppercase;
        -webkit-text-stroke: 2px black; /* Text outline */
        animation: scrolling 35s linear infinite;
    }

    .marquee span {
        padding-right: 100px; /* Space between repeated text */
        img{
            height: 60px;
            width: auto;
            margin: 20px 0 15px;
            
            @media(max-width: 1600px){
                height: 50px;
                margin: 20px 0 15px;
            }
        }
    }

    @keyframes scrolling {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
    }
`
export const Markee = () => {
  return (
    <MarkeeContainer>
        <div className="marquee">
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
            <span><img src={bgtextlogo} /></span>
        </div>
    </MarkeeContainer>
  )
}