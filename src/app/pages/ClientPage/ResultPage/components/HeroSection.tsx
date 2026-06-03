import { Stack, styled, Typography } from '@mui/material';

export const HeroSection = () => {
  return (
    <Stack padding={'52px 40px'} textAlign={'center'} bgcolor={'#0A2E1F'} alignItems={'center'}>
      <TitleReport>Your personalised rebate report — May 2026</TitleReport>
      <ReportTotal>$11,200</ReportTotal>
      <TotalLabel>Available for your Calgary building in 2026</TotalLabel>
      <TextStyled>🌱 Your upgrades could avoid an estimated 3.2 tonnes of CO₂ per year</TextStyled>
    </Stack>
  );
};

const TitleReport = styled(Typography)(() => ({
  fontSize: '11px',
  color: 'rgba(198,241,53,.55)',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: '9px'
}));

const ReportTotal = styled(Typography)(() => ({
  fontSize: 'clamp(56px,10vw,116px)',
  fontWeight: 800,
  fontFamily: 'Syne, sans-serif',
  color: '#C6F135',
  lineHeight: '.9'
}));

const TotalLabel = styled(Typography)(() => ({
  fontSize: '16px',
  color: 'rgba(247,243,234,.55)',
  marginTop: '9px',
  fontFamily: 'DM Sans, sans-serif'
  // animation: 'fu .6s .08s ease both'
}));

const TextStyled = styled(Stack)(() => ({
  fontSize: '13px',
  fontWeight: 600,
  border: '1px solid rgba(198,241,53,.18)',
  padding: '7px 16px',
  color: '#C6F135',
  backgroundColor: 'rgba(198,241,53,.1)',
  borderRadius: '100px',
  width: 'fit-content',
  marginTop: '16px'
}));
