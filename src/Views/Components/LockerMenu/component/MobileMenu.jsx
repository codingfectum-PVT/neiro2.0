import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import { toggleTheme } from '../../../../Redux/switchTheme'
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../../assets/logo.png";
import { MaterialUISwitch, MenuLink, MobileMainMenu, SiteLogo, DrawerBox, DrawerDivider, Humburgger, HumburggerClose, MenuButton } from "../styles";
import { ButtonLink } from "../../../Styles/style";
import { tgLink, xLink } from "../../../../links";
import tg from '../../../../assets/tg.png'
import x from '../../../../assets/x.png'


const MobileMenu = (props) => {
  const currentTheme = useSelector( (state) => state.LDTheme.value )
  const dispatch = useDispatch();
  const [state, setState] = useState({ left: false });
  
  const toggleDrawer = (anchor, open) => (event) => {
    console.log('thest: ', anchor + " : " +open)
    if ( event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") ){return;}
    setState({ ...state, [anchor]: open });
  };
  return (
    <MobileMainMenu>
      <MenuLink href="/" p="15px 0 15px">
        <SiteLogo src={logo} width="150" height='50' />
      </MenuLink>
      <MenuButton onClick={toggleDrawer("left", true)}>
        {state["left"] ? (
          <HumburggerClose>Close</HumburggerClose>
        ) : (
          <Humburgger></Humburgger>
        )}
      </MenuButton>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <DrawerBox
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <DrawerDivider>
            <MenuLink href="/">
              <SiteLogo src={logo} width="150" height='50' />
            </MenuLink>
            <Divider />
            <List>
              {props.menuList.map((value, i) => <MenuLink key={i} href={value.link}  target={value.target} className={value.customClass + " d-block"}>{value.title}</MenuLink>)}
            </List>
          </DrawerDivider>
          <DrawerDivider>
            <List>
              <ButtonLink href={tgLink} target="_blank" className='socialButton'><img src={tg} /></ButtonLink>
              <ButtonLink href={xLink} target="_blank" className='socialButton'><img src={x} /></ButtonLink>
            </List>
          </DrawerDivider>
        </DrawerBox>
      </Drawer>
    </MobileMainMenu>
  );
}

export default MobileMenu;

