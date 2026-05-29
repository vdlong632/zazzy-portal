import { Stack, Typography, styled } from '@mui/material';
import { ROUTE_MENU } from 'const/menu';
import { NavLink, useLocation } from 'react-router-dom';

export const NavbarMenu = () => {
  const { pathname } = useLocation();

  return (
    <MenuList sx={{ display: { xs: 'none', md: 'flex' } }} direction="row" alignItems="center">
      {ROUTE_MENU.map((item, index) => {
        const isActive = item.activeUrls?.some((url) => pathname.startsWith(url));

        return (
          <NavLink key={index} to={item.link} style={{ textDecoration: 'none' }}>
            <MenuItem className={isActive ? 'active' : ''}>
              <Typography className="label">{item.label}</Typography>
            </MenuItem>
          </NavLink>
        );
      })}
    </MenuList>
  );
};

const MenuList = styled(Stack)(() => ({
  gap: '24px',
  flex: 1,
  justifyContent: 'center'
}));

const MenuItem = styled(Stack)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontFamily: 'DM Sans, sans-serif',
  fontWeight: 500,
  transition: 'color .2s',

  '& .label': {
    fontSize: '13px',
    fontWeight: 500,
    color: '#4A5248',
    transition: 'color 0.2s ease'
  },

  '&:hover .label': {
    color: '#0A2E1F'
  }

  // '&.active .label': {
  //   color: '#0A2E1F',
  //   fontWeight: 500
  // }
}));
