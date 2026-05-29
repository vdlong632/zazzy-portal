import { Box, Typography, styled } from '@mui/material';
import { LookupBox } from './LookupBox';

export const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroPill>2026 Calgary Rebates — Verified May 2026</HeroPill>

        <HeroTitle sx={{width: '89%', lineHeight: .92}} fontFamily={'Syne, sans-serif'}>
          Enter your postcode.
          <br />
          <span>See your rebates.</span>
          <br />
          60 seconds flat.
        </HeroTitle>

        <HeroSubtitle>
          340,000 Calgary buildings have unclaimed energy rebates averaging $8,400.
          No one tells you. We do — then we connect you with a vendor who delivers it.
        </HeroSubtitle>

        <LookupBox />
      </HeroContent>
    </HeroWrapper>
  );
};

const HeroWrapper = styled(Box)(() => ({
  minHeight: 'calc(100vh - 62px)',
  backgroundColor: '#0A2E1F',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '60px 40px 40px'
}));

const HeroContent = styled(Box)(() => ({
  width: '100%',
  maxWidth: 890,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const HeroPill = styled(Box)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(198, 241, 53, 0.1)',
  border: '1px solid rgba(198, 241, 53, 0.18)',
  borderRadius: 100,
  padding: '6px 16px',
  fontSize: 11,
  fontWeight: 700,
  color: '#C6F135',
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  marginBottom: 24
}));

const HeroTitle = styled(Typography)(({theme}) => ({
  fontSize: 'clamp(42px, 8vw, 92px)',
  fontWeight: 800,
  color: '#FDFCF8',
  lineHeight: 0.95,
  letterSpacing: '-.04em',
  marginBottom: 18,
   [theme.breakpoints.up('xs')]: {
    fontSize: 'clamp(46px, 8vw, 104px)',
  },

  '& span': {
    color: '#C6F135'
  }
}));

const HeroSubtitle = styled(Typography)(() => ({
  fontSize: 'clamp(15px,1.6vw,18px)',
  fontFamily: 'DM Sans, sans-serif',
  color: 'rgba(247, 243, 234, .58)',
  maxWidth: '57%',
  lineHeight: 1.65,
  marginBottom: '44px',
  fontWeight: 300
}));