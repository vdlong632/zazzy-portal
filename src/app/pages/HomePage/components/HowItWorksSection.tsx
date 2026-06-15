import { Box, Grid, Stack, styled, Typography } from '@mui/material';

const STEP = [
  {
    id: 1,
    icon: '📮',
    step: '01',
    title: 'Enter your postal code',
    text: 'One field. Your Calgary T2 or T3 postcode. We instantly know what programmes are active in your area right now.'
  },
  {
    id: 2,
    icon: '🔍',
    step: '02',
    title: 'See every rebate you qualify for',
    text: 'Answer 6 questions about your building. We cross-reference your profile against every active federal, Alberta, and utility programme. Exact dollar amounts — stacked and personalised.',
    textColor: '#C6F135',
    textDesc: 'rgba(247,243,234,.62)',
    bgColor: '#0A2E1F',
    stepColor: 'rgba(198,241,53,.04)'
  },
  {
    id: 3,
    icon: '🤝',
    step: '03',
    title: 'Get matched to a vendor who delivers it',
    text: '3 NRCan-certified Calgary contractors who already understand the rebate process. Free quotes. They handle the applications. You collect the money.'
  }
];
export const HowItWorksSection = () => {
  return (
    <SectionSwapper id="how-it-works">
      <Stack sx={{ maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
        <Typography
          sx={{
            fontSize: '11px',
            fontFamily: 'DM Sans, sans-serif',
            color: '#4a8c65',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '.1em',
            marginBottom: '12px'
          }}>
          How it works
        </Typography>

        <Typography
          sx={{
            fontSize: 'clamp(30px,4.5vw,54px)',
            width: '60%',
            color: '#0a2e1f',
            fontWeight: 800,
            fontFamily: 'Syne, sans-serif',
            lineHeight: 1,
            marginBottom: '14px'
          }}>
          Three steps. No jargon.
        </Typography>

        <Typography
          sx={{
            fontSize: '16px',
            color: '#4a5248',
            fontWeight: 300,
            lineHeight: 1.65,
            marginBottom: '48px',
            maxWidth: '520px',
            fontFamily: 'DM Sans, sans-serif'
          }}>
          Most Calgary buildings have unclaimed rebates. Most owners never find them. We changed
          that.
        </Typography>

        <Grid container spacing="22px" alignItems="stretch">
          {STEP.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={step.id}>
              <CardSwapper bgcolor={step.bgColor || '#eeeee9'}>
                <StepStyled color={step.stepColor || 'rgba(10,46,31,.05)'}>{step.step}</StepStyled>

                <IconStyled>{step.icon}</IconStyled>

                <Typography
                  sx={{
                    fontSize: '19px',
                    fontWeight: 700,
                    color: step.textColor || '#0A2E1F',
                    marginBottom: '9px',
                    fontFamily: 'Syne, sans-serif',
                    lineHeight: 1.25
                  }}>
                  {step.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '14px',
                    lineHeight: 1.65,
                    color: step.textDesc || '#4a5248',
                    fontFamily: 'DM Sans, sans-serif'
                  }}>
                  {step.text}
                </Typography>
              </CardSwapper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </SectionSwapper>
  );
};

const SectionSwapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  padding: '88px 40px',
  backgroundColor: '#fdfcf8',
  [theme.breakpoints.down('sm')]: {
    padding: '88px 20px'
  }
}));

const CardSwapper = styled(Stack)(({ theme }) => ({
  // minHeight: '280px',
  minHeight: '100%',
  padding: '30px',
  borderRadius: '26px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform .3s, box-shadow .3s',
  cursor: 'default',

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 48px rgba(10,46,31,.13)'
  },
  [theme.breakpoints.down('sm')]: {
    height: 'fit-content'
  }
}));

const IconStyled = styled(Box)(() => ({
  width: '46px',
  height: '46px',
  borderRadius: '12px',
  fontSize: '22px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '18px',
  backgroundColor: '#eaf3de',
  position: 'relative',
  zIndex: 1
}));

const StepStyled = styled(Typography)(() => ({
  position: 'absolute',
  top: '18px',
  right: '18px',
  fontFamily: 'Syne, sans-serif',
  fontSize: '68px',
  fontWeight: 800,
  lineHeight: 1
}));
