import React from 'react';
import ReactLogo from '../images/logo.png'
import RAWGLogo from '../images/RAWG.png'
import { Wrapper, Content, Logo, RAWGLogoImg } from '../Styles/Header-style'

const Header = () => (
    <Wrapper>
        <Content>
            <Logo src={ReactLogo} alt='logo'/>
            <RAWGLogoImg src={RAWGLogo} alt='RAWG-logo'/>
        </Content>
    </Wrapper>
)

export default Header;