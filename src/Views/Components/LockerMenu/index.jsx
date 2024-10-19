import { Container } from '@mui/material';
import React from 'react'
import DesktopMenu from './component/DesktopMenu';
import MobileMenu from './component/MobileMenu';

const menuList = [ // You can pass 4 perameters for menu title, link, target and customClass
    {
    title: "Home",
    link: "/",
    },
    {
    title: "About",
    link: "/#about",
    },
    {
    title: "How To Buy",
    link: "/#how-to-buy",
    },
    {
    title: "Tokenomics",
    link: "/#tokenomics",
    },
];
const LockerMenu = (props) => {
  return (
    <Container maxWidth="xl">
        <DesktopMenu menuList={menuList} />
        <MobileMenu menuList={menuList} />
    </Container>
  )
}

export default LockerMenu
export {menuList}