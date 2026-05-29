import { Button, Stack, Typography, styled } from '@mui/material';
import { ButtonCustom, ButtonOutLine } from 'app/components/elements/ButtonCustom';
import { useNavigate } from 'react-router-dom';

export const NavbarActions = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/quiz');
  return (
    <ButtonGroup direction="row" alignItems="center">
      <ButtonOutLine
        label={'Vendor Login'}
        onClick={() => navigate('/vendor-login')}
        textSx={{ fontSize: '13px', fontWeight: 600, color: '#0A2E1F' }}
        sx={{
          height: '35px',
          padding: '8px 18px',
          background: 'none',
          border: '1.5px solid ##E5DFC8',
          display: { xs: 'none', md: 'flex' }
        }}
      />
      <ButtonCustom
        label={'Find My Rebates →'}
        onClick={handleNavigate}
        textSx={{
          color: '#C6F135',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '13px'
        }}
        sx={{ height: '35px', borderRadius: '100px', minWidth: 'auto' }}
      />
    </ButtonGroup>
  );
};

const ButtonGroup = styled(Stack)(() => ({
  gap: '8px',
  flexShrink: 0
}));

// const LoginButton = styled(Button)(() => ({
//   padding: '8px 18px',
//   borderRadius: '100px',
//   height: '35px',
//   cursor: 'pointer',
//   color: '#0A2E1F',
//   backgroundColor: 'transparent',
//   border: '1.5px solid #E5DFC8',
//   textTransform: 'none',
//   whiteSpace: 'nowrap',
//   minWidth: 'auto',

//   '&:hover': {
//     borderColor: '#0A2E1F',
//     backgroundColor: '#0A2E1F',
//     color: '#C6F135'
//   }
// }));

// const RebateButton = styled(Button)(() => ({
//   padding: '9px 20px',
//   borderRadius: '100px',
//   color: '#C6F135',
//   backgroundColor: '#0A2E1F',
//   cursor: 'pointer',
//   transition: 'all .2s',
//   textTransform: 'none',
//   whiteSpace: 'nowrap',
//   minWidth: 'auto',
//   height: '35px',

//   '&:hover': {
//     backgroundColor: '#1B5E3B',
//     transform: 'translateY(-1px)',
//     boxShadow: '0 4px 20px rgba(10,46,31,.25)'
//   }
// }));
