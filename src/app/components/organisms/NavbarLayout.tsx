import { Box, Stack, styled, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { Logo } from './components/Logo';
import { NavbarMenu } from './components/NavbarMenu';
import { NavbarActions } from './components/NavbarActions';
import { MenuButton } from 'assets';
import { TOGGLE_MENU } from 'const/menu';
import { NavLink, useLocation } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

export const NavbarLayout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <WrapperNavbar>
        <Logo />

        <NavbarMenu />

        <NavbarActions />
        <Stack display={{ sm: 'flex', md: 'none' }}>
          <MenuButton
            height={'29px'}
            width={'24px'}
            color={'inherit'}
            onClick={() => setOpen(!open)}
          />
        </Stack>
      </WrapperNavbar>
      <MenuToggle sx={{ display: open ? 'flex' : 'none' }}>
        {TOGGLE_MENU.map((item, index) => {
          return (
            <NavLink key={index} to={item.link} style={{ textDecoration: 'none' }}>
              <MenuItem
                onClick={() => {
                  setOpen(!open);
                }}>
                <Typography
                  className="label"
                  sx={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#0A2E1F'
                  }}>
                  {item.label}
                </Typography>
              </MenuItem>
            </NavLink>
          );
        })}
      </MenuToggle>
      <MainContent sx={{ paddingTop: { xs: '62px', md: '62px' } }}>{children}</MainContent>
    </>
  );
};

const WrapperNavbar = styled(Stack)(({ theme }) => ({
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
  borderBottom: '1px solid rgba(10, 46, 31, 0.07)',
  [theme.breakpoints.down('sm')]: {
    padding: '0 20px'
  }
}));

const MainContent = styled(Box)(() => ({
  minHeight: '100vh',
  backgroundColor: '#FDFCF8'
}));

const MenuToggle = styled(Stack)(() => ({
  display: 'none',
  position: 'fixed',
  top: '62px',
  left: 0,
  right: 0,
  backgroundColor: '#F7F3EA',
  borderBottom: '1px solid #E5DFC8',
  padding: '18px 24px',
  zIndex: 299,
  flexDirection: 'column',
  gap: '2px'
}));

const MenuItem = styled(Stack)(() => ({
  display: 'block',
  padding: '11px 0',
  cursor: 'pointer',
  textAlign: 'left',
  border: 'none',
  borderBottom: '1px solid #E5DFC8',
  widows: '100%',
  textDecoration: 'none',
  background: 'none'
}));
