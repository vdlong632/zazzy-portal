import { Stack, styled, Typography } from '@mui/material';
import { MOCK_VENDORS } from 'types/vendor';

export const MatchedVendor = () => {
  return (
    <StackSwapper>
      <Typography
        fontSize={'15px'}
        fontWeight={700}
        color={'#0A2E1F'}
        letterSpacing={'-.02em'}
        marginBottom={'12px'}>
        Your 3 Matched Vendors
      </Typography>
      {MOCK_VENDORS.slice(0, 3).map((item) => (
        <Stack
          key={item.id}
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          // justifyContent={'space-between'}
          gap={'11px'}
          bgcolor={'#EEEEE9'}
          borderRadius={'18px'}
          p={'11px'}
          marginBottom={'8px'}
          sx={{ cursor: 'pointer' }}>
          <LogoStyled>{item.logo}</LogoStyled>
          <Stack>
            <Stack sx={{ fontSize: '13px', fontWeight: 600 }}>{item.name}</Stack>
            <Stack sx={{ fontSize: '11px' }}>{item.badges}</Stack>
          </Stack>
          <RatingStyled>{item.rating.average}★</RatingStyled>
        </Stack>
      ))}
    </StackSwapper>
  );
};

const StackSwapper = styled(Stack)(() => ({
  backgroundColor: '#FDFCF8',
  border: '1.5px solid #E5DFC8',
  borderRadius: '26px',
  padding: '22px',
  marginBottom: '12px'
}));

const LogoStyled = styled(Stack)(() => ({
  width: '36px',
  height: '36px',
  borderRadius: '9px',
  fontSize: '13px',
  fontWeight: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FDFCF8',
  backgroundColor: '#0A2E1F',
  fontFamily: 'Syne, sans-serif',
  flexShrink: 0
}));

const RatingStyled = styled(Typography)(() => ({
  fontFamily: 'Syne, sans-serif',
  fontSize: '15px',
  fontWeight: 800,
  color: '#0A2E1F'
}));
