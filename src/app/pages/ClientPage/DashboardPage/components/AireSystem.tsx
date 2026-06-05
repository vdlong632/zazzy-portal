import { Stack, styled, Typography } from '@mui/material';
import { ButtonOutLine } from 'app/components/elements/ButtonCustom';
import { useNavigate } from 'react-router-dom';

export const AireSystem = () => {
  const navigate = useNavigate();
  return (
    <WrapStyled>
      <Stack>
        <Typography
          sx={{
            fontSize: '21px',
            fontWeight: 800,
            fontFamily: 'Syne, sans-serif',
            color: '#FDFCF8',
            letterSpacing: '-.03em'
          }}>
          Peak Aire Systems Dashboard
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'rgba(247,243,234,.45)',
            marginTop: '2px',
            fontFamily: 'DM Sans, sans-serif'
          }}>
          NRCan Certified ✓ · ENMAX Partner ✓ · Subscription Active · Trial ends in 18 days
        </Typography>
      </Stack>
      <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'7px'}>
        <ButtonOutLine
          label="Back To Site"
          textSx={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'rgba(247,243,234,.65)',
            lineHeight: 1.3
          }}
          onClick={() => navigate('/')}
          sx={{ padding: '8px 18px', border: '1.5px solid rgba(247,243,234,.18)' }}
        />
        <ButtonOutLine
          label="Sign Out"
          textSx={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'rgba(247,243,234,.65)',
            lineHeight: 1.3
          }}
          sx={{ padding: '8px 18px', border: '1.5px solid rgba(247,243,234,.18)' }}
        />
      </Stack>
    </WrapStyled>
  );
};

const WrapStyled = styled(Stack)(({ theme }) => ({
  padding: '26px 40px',
  backgroundColor: '#0A2E1F',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '14px',
  [theme.breakpoints.down('sm')]: {
    padding: '26px 20px'
  },
  '@media (max-width:800px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}));
