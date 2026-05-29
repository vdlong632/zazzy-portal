import { Box, Button, Stack, styled } from '@mui/material';
import { ReactNode } from 'react';
import { Logo } from './components/Logo';
import { NavbarMenu } from './components/NavbarMenu';
import { NavbarActions } from './components/NavbarActions';
import { ButtonOutLine } from '../elements/ButtonCustom';

type LayoutProps = {
  children: ReactNode;
};

export const NavbarLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <WrapperNavbar>
        <Logo />

        <NavbarMenu />

        <NavbarActions />
        <ButtonOutLine
          label="X"
          sx={{
            display: { md: 'none', xs: 'flex' },
            width: 'fit-content',
            height: '35px',
            padding: '0px'
          }}
        />
      </WrapperNavbar>
      <MainContent sx={{ paddingTop: { xs: '62px', md: '62px' } }}>{children}</MainContent>
    </>
  );
};

const WrapperNavbar = styled(Stack)(() => ({
  width: '100%',
  height: '62px',
  backgroundColor: 'rgba(247,243,234,.93)',
  backdropFilter: 'blur(18px)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 20,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 40px',
  boxSizing: 'border-box',
  borderBottom: '1px solid rgba(10, 46, 31, 0.07)'
}));

const MainContent = styled(Box)(() => ({
  // position: 'relative',
  // overflow: 'hidden',
  minHeight: '100vh',
  backgroundColor: '#FDFCF8'
}));

const ToggleButton = styled(Button)(() => ({
  fontSize: '15px',
  fontWeight: 700
}));
