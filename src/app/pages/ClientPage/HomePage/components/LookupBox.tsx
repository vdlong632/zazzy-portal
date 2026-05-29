import { Box, Button, Stack, styled, Typography } from '@mui/material';
import { ButtonCustom } from 'app/components/elements/ButtonCustom';
import { InputText } from 'app/components/elements/InputText';
import { useNavigate } from 'react-router-dom';

export const LookupBox = () => {
  const navigate = useNavigate();
  const onSubmitLookup = () => {
    navigate('/quiz');
  };
  return (
    <LookupBoxSwapper>
      <TitleStyled>Building Rebate Lookup Engine</TitleStyled>
      <Typography
        fontSize={'20px'}
        marginBottom={'5px'}
        fontWeight={700}
        fontFamily={'Syne, sans-serif'}>
        What does your building qualify for?
      </Typography>
      <Typography fontSize={'13px'} color={'#4a5248'} marginBottom={'20px'}>
        Calgary T2 and T3 postal codes. 60 seconds. Always free.
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column' },
          gap: '10px',
          height: '53px',
          marginBottom: '12px'
        }}>
        <InputText placeholder="e.g. T2P 1J9 or T3G 4R2" maxLength={7} sx={{ flex: 1 }} />
        <ButtonCustom
          label="Look Up Rebates →"
          sx={{
            borderRadius: '18px',
            padding: '14px 26px',
            width: { sm: 'fit-content', xs: '100%' }
          }}
          textSx={{ fontSize: '14px', color: '#C6F135', fontFamily: 'Syne, sans-serif' }}
        />
      </Stack>
      <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '18px' }}>
        <LookupTrust>✓ Always free</LookupTrust>
        <LookupTrust>✓ No login needed</LookupTrust>
        <LookupTrust>✓ Verified weekly</LookupTrust>
      </Stack>
    </LookupBoxSwapper>
  );
};

const LookupBoxSwapper = styled(Box)(({ theme }) => ({
  minHeight: 'auto',
  backgroundColor: '#F7F3EA',
  padding: '32px 36px',
  borderRadius: '25px',
  textAlign: 'left',
  animation: 'fu .6s .22s ease both',
  [theme.breakpoints.up('sm')]: {
    padding: '60px 40px 40px',
    width: '100%',
    maxWidth: '660px'
  }
}));

const TitleStyled = styled(Typography)(() => ({
  fontSize: '11px',
  fontWeight: 700,
  fontFamily: 'DM Sans, san-serif',
  color: '#4a8c65',
  textTransform: 'uppercase',
  letterSpacing: '.1em',
  marginBottom: '10px'
}));

const LookupButton = styled(Button)(() => ({
  padding: '14px 26px',
  borderRadius: '18px',
  color: '#C6F135',
  backgroundColor: '#0A2E1F',
  cursor: 'pointer',
  transition: 'all .2s',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  minWidth: 'auto',
  height: '35px',

  '&:hover': {
    backgroundColor: '#1B5E3B',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 20px rgba(10,46,31,.25)'
  }
}));

const LookupTrust = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#4A5248'
}));

const ErrorText = styled(Typography)(() => ({
  backgroundColor: '#FEF2F2',
  border: '1px solid #FECACA',
  borderRadius: '10px',
  padding: '9px 13px',
  fontSize: '13px',
  color: '#B91C1C',
  marginBottom: '10px'
}));
