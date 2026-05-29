import { Stack, styled, Typography } from '@mui/material';

export const VectorHeading = () => {
  return (
    <HeaderSwapper>
      <Typography
        sx={{
          color: 'rgba(198,241,53,.55)',
          marginBottom: '10px',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '.1em',
          textTransform: 'uppercase'
        }}>
        Zazzy Group Vendor Network
      </Typography>
      <TitleHeading>
        Vetted Calgary <TextStyled>Contractors</TextStyled>
      </TitleHeading>
      <Typography
        sx={{
          fontSize: '15px',
          color: 'rgba(247,243,234,.55)',
          margin: '0 auto',
          lineHeight: '1.6',
          maxWidth: '440px'
        }}>
        Every vendor in the Zazzy network is NRCan-certified, rebate-trained, and has completed
        projects in Calgary. Credentials verified monthly.
      </Typography>
    </HeaderSwapper>
  );
};

const HeaderSwapper = styled(Stack)(() => ({
  padding: '56px 40px 36px',
  backgroundColor: '#0A2E1F',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center'
}));

const TitleHeading = styled(Typography)(() => ({
  fontSize: 'clamp(34px,6vw,68px)',
  fontWeight: 800,
  color: '#FDFCF8',
  letterSpacing: '-.04em',
  marginBottom: '10px',
  fontFamily: 'Syne, sans-serif'
}));

const TextStyled = styled('em')(() => ({
  color: '#C6F135',
  fontStyle: 'normal'
}));
