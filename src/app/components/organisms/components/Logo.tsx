import { Box, Stack, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <LogoWrapper direction="row" alignItems="center" onClick={() => navigate('/')}>
      <Box
        width="32px"
        height="32px"
        bgcolor="#0A2E1F"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="7px"
      >
        <Typography fontSize="12px" color="#C6F135" fontWeight={800} fontFamily={'Syne, sans-serif'}>
          ZG
        </Typography>
      </Box>

      <Typography fontSize="16px" fontWeight={700} color="#0A2E1F" fontFamily={'Syne, sans-serif'}>
        Zazzy Group
      </Typography>
    </LogoWrapper>
  );
};

const LogoWrapper = styled(Stack)(() => ({
  gap: '9px',
  cursor: 'pointer',
  flexShrink: 0
}));