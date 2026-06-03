import { Stack, styled, Typography } from '@mui/material';
import { MOCK_RESULT } from 'types/rebate';

export const ResultSection = () => {
  return (
    <Stack display={'flex'} flexDirection={'column'} gap={'11px'} flex={1}>
      {MOCK_RESULT.map((item) => (
        <CardStyled>
          {item.badge === 'Federal — Active' ? (
            <BadgeStyled sx={{ color: '#0C447C', backgroundColor: '#E4F0FA' }}>
              {item.badge}
            </BadgeStyled>
          ) : (
            <BadgeStyled sx={{ backgroundColor: '#FDF0D5', color: '#633806' }}>
              {item.badge}
            </BadgeStyled>
          )}
          <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <HeadingStyled>{item.heading}</HeadingStyled>
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 800,
                fontFamily: 'Syne, sans-serif',
                color: '#0A2E1F',
                letterSpacing: '-.03em'
              }}>
              {item.budget}
            </Typography>
          </Stack>
          <Typography
            sx={{ fontSize: '13px', color: '#4A5248', lineHeight: 1.6, marginBottom: '7px' }}>
            {item.label}
          </Typography>
          <Stack
            sx={{
              display: 'inline-flex',
              width: 'fit-content',
              fontSize: '11px',
              fontWeight: 600,
              backgroundColor: '#EAF3DE',
              color: '#1B5E3B',
              padding: '3px 9px',
              borderRadius: '100px'
            }}>
            {item.rebate}
          </Stack>
        </CardStyled>
      ))}
    </Stack>
  );
};

const CardStyled = styled(Stack)(() => ({
  padding: '20px 22px',
  borderRadius: '26px',
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
  backgroundColor: '#FDFCF8'
}));

const BadgeStyled = styled(Typography)(() => ({
  fontSize: '10px',
  fontWeight: 700,
  padding: '2px 9px',
  // color: '#0C447C',
  // backgroundColor: '#E4F0FA',
  width: 'fit-content',
  borderRadius: '100px'
}));

const HeadingStyled = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 600,
  color: '#0C0F0D',
  lineHeight: 1.3,
  textWrap: 'wrap'
}));
