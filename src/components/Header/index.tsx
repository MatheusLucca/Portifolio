import Link from 'next/link'
import { Container, Content, MenuHamburguer } from './style'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
import { Menu } from '../Menu'
import { Nav } from '../Nav'
interface HeaderProps{
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export function Header({setIsMenuOpen}: HeaderProps) {

    return (
        <Container>
            <Content>
                <span>Portifo<span>lio</span></span>
                <Nav setIsMenuOpen={setIsMenuOpen}/>
                <MenuHamburguer>
                    <GiHamburgerMenu size={45} onClick={() => setIsMenuOpen(true)}/>
                </MenuHamburguer>
                
            </Content>
        </Container>
    )
}