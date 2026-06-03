import { Grid, Stack, styled, Typography } from '@mui/material';

const ITEMS = [
  { value: '23', detail: 'Calgary retrofits facilitated' },
  { value: '74t', detail: 'Tonnes CO₂e avoided annually' },
  { value: '$187K', detail: 'Rebate dollars accessed' },
  { value: '5', detail: 'Pilot homes verified by SAIT' }
];

const IMPACT_ITEMS = [
  {
    id: 1,
    name: '🌡️ Cold-Climate Heat Pump',
    index: '3.2 tCO₂e avg/yr',
    width: '80%',
    color: '#0A2E1F'
  },
  {
    id: 2,
    name: '☀️ Solar + Battery Storage',
    index: '2.0 tCO₂e avg/yr',
    width: '50%',
    color: '#C6F135'
  },
  {
    id: 3,
    name: '🧊 Insulation + Air Sealing',
    index: '1.1 tCO₂e avg/yr',
    width: '28%',
    color: '#4A8C65'
  },
  {
    id: 4,
    name: '🚿 Heat Pump Water Heater',
    index: '0.6 tCO₂e avg/yr',
    width: '15%',
    color: '#E8B84B'
  }
];

export const ImpactBody = () => {
  return (
    <BodySwapper>
      <Grid container spacing={'13px'} marginBottom={'36px'}>
        {ITEMS.map((item) => (
          <Grid item xs={6} md={3}>
            <CardStyled>
              <Typography
                sx={{
                  fontSize: '34px',
                  fontWeight: '800',
                  fontFamily: 'Syne, sans-serif',
                  color: '#0A2E1F',
                  letterSpacing: '-.04em',
                  textWrap: 'nowrap'
                }}>
                {item.value}
              </Typography>
              <Typography
                sx={{ fontSize: '11px', color: '#4A5248', marginTop: '3px', textWrap: 'nowrap' }}>
                {item.detail}
              </Typography>
            </CardStyled>
          </Grid>
        ))}
      </Grid>
      <Stack
        sx={{
          padding: ' 28px',
          marginBottom: '22px',
          backgroundColor: '#EEEEE9',
          borderRadius: '26px'
        }}>
        <Typography
          sx={{
            fontSize: '17px',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            color: '#0A2E1F',
            letterSpacing: '-.02em',
            marginBottom: '18px'
          }}>
          GHG Impact by Upgrade Type
        </Typography>
        <Stack width={'100%'}>
          {IMPACT_ITEMS.map((item) => (
            <Stack key={item.id}>
              <Stack
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                marginBottom={'5px'}>
                <TextStyled>{item.name}</TextStyled>
                <TextStyled>{item.index}</TextStyled>
              </Stack>
              <Stack
                sx={{
                  width: '100%',
                  height: '9px',
                  backgroundColor: '#E5DFC8',
                  overflow: 'hidden',
                  borderRadius: '100px',
                  marginBottom: '14px'
                }}>
                <Stack
                  sx={{
                    width: item.width,
                    height: '100%',
                    backgroundColor: item.color,
                    borderRadius: '100px'
                  }}></Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          backgroundColor: '#0A2E1F',
          borderRadius: '26px',
          padding: '28px',
          textAlign: 'center'
        }}>
        <Typography
          sx={{
            fontSize: '11px',
            fontWeight: 700,
            color: 'rgba(198,241,53,.55)',
            textTransform: 'uppercase',
            letterSpacing: '.1em',
            marginBottom: '8px'
          }}>
          Methodology
        </Typography>
        <Typography
          sx={{
            fontSize: '13px',
            color: 'rgba(247,243,234,.55)',
            maxWidth: '530px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
          All GHG estimates based on NRCan EnerGuide methodology and Alberta grid emission factors
          published by Environment and Climate Change Canada. Pilot programme independently verified
          by SAIT.
        </Typography>
      </Stack>
    </BodySwapper>
  );
};

const BodySwapper = styled(Stack)(() => ({
  margin: '0 auto',
  padding: '46px 40px'
}));

const CardStyled = styled(Stack)(() => ({
  padding: '22px',
  backgroundColor: '#EEEEE9',
  borderRadius: '18px',
  textAlign: 'center'
}));

const TextStyled = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#0A2E1F',
  fontFamily: 'DM Sans, sans-serif',
  fontWeight: '600'
}));
