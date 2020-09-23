import React from 'react';
import styled from 'styled-components';

const OverlayStyled = styled.div`
  width: 20vh;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: transparent;
`;

const NavBarResponsiveCloseOverlay = ({ isResponsiveMenuOpen, onClick }) => {
  if (!isResponsiveMenuOpen) return null;

  return <OverlayStyled onClick={onClick} />;
};

export default NavBarResponsiveCloseOverlay;
