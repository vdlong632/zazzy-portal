import { Box, Button, Stack, styled, Typography } from '@mui/material';
import { ButtonCustom } from 'app/components/elements/ButtonCustom';
import { InputText } from 'app/components/elements/InputText';
import { useNavigate } from 'react-router-dom';
import { useHomePage } from '../hook';

export const LookupBox = () => {
  const { postalCode, handleSubmit, handleInputChange } = useHomePage();
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
          // height: { xs: 'auto', sm: '53px' },
          marginBottom: '12px'
        }}>
        <InputText
          isLookUp
          placeholder="e.g. T2P 1J9 or T3G 4R2"
          maxLength={15}
          sx={{ minHeight: '53px', flex: 1, fontSize: '16px', fontWeight: 500 }}
          inputProps={{
            value: postalCode,
            onChange: handleInputChange
          }}
        />
        <ButtonCustom
          onClick={handleSubmit}
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
  width: '100%',
  backgroundColor: '#F7F3EA',
  padding: '32px 36px',
  borderRadius: '25px',
  textAlign: 'left',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    maxWidth: '660px',
    display: 'flex',
    flexDirection: 'column'
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

const LookupTrust = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#4A5248'
}));

// const InputTextStyled = styled(InputText)(() => ({
//   minHeight: 53,
//   '& .MuiInputBase-input': {

//   }
// }))
