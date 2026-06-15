import { Stack, styled, Typography } from '@mui/material';

export const ImpactHero = () => {
  return (
    <Stack sx={{ backgroundColor: '#0A2E1F' }}>
      <HeroSwapper>
        <Typography
          sx={{
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '.1em',
            color: 'rgba(198,241,53,.55)',
            marginBottom: '10px'
          }}>
          zazzygroup.ca/impact · Live Data
        </Typography>
        <Typography
          sx={{
            fontSize: 'clamp(34px,6vw,64px)',
            fontFamily: 'Syne, sans-serif',
            color: '#FDFCF8',
            fontWeight: 800,
            letterSpacing: '-.04em',
            marginBottom: '9px'
          }}>
          Zazzy Group <TextStyled>Impact</TextStyled>
        </Typography>
        <Typography
          maxWidth={'420px'}
          fontFamily={'DM Sans, sans-serif'}
          color={'rgba(247,243,234,.5)'}
          fontSize={'14px'}
          margin={'0 auto'}
          lineHeight={1.6}>
          Every retrofit facilitated through Zazzy is measured and verified. This data supports NRC
          IRAP and ERA Alberta grant applications.
        </Typography>
      </HeroSwapper>
    </Stack>
  );
};

const HeroSwapper = styled(Stack)(() => ({
  padding: '56px 40px',
  backgroundColor: '#0A2E1F',
  textAlign: 'center'
}));

const TextStyled = styled('em')(() => ({
  color: '#C6F135',
  fontStyle: 'normal'
}));
