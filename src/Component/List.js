import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.header`
  background-color: transparent;
  align-items: center;
  display: flex;
  padding: 70px;
  color: white;
  position: fixed;
`;

const NavbarLogo = styled.div`
  font-size: 25px;
  font-weight: bold;
  border: 4px solid white;
  padding: 10px;
`;

const NavbarMenu = styled.ul`
  display: flex;
  padding-left: 100px;
  font-size: 16px;
`;

const NavbarItems = styled.li`
  margin: 0px 30px;
`;

const Links = styled(Link)`
  color: white;
`;

const List = () => {
  return (
    <>
      <Navbar>
        <NavbarLogo>
          <Links to='/'>The Glam</Links>
        </NavbarLogo>
        <NavbarMenu>
          <NavbarItems>
            <Links to='Site'>저희 사이트는</Links>
          </NavbarItems>
          <NavbarItems>
            <Links to='Staff'>저희 제품은</Links>
          </NavbarItems>
          <NavbarItems>
            <Links to='Service'>고객님 센터</Links>
          </NavbarItems>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default List;
