import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "about" onClick={toggle}>Qui somme nous</SidebarLink>
                    <SidebarLink to = "discover" onClick={toggle}>CBD</SidebarLink>
                    <SidebarLink to = "services" onClick={toggle}>Produits</SidebarLink>
                    <SidebarLink to = "signup" onClick={toggle}>Historique</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                <SidebarRoute to = "/product">Nos Produits</SidebarRoute>
                </SideBtnWrap>
                <SideBtnWrap>
                <SidebarRoute to = "/signin">Inscription</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>    
        </SidebarContainer>
    )
}

export default Sidebar
