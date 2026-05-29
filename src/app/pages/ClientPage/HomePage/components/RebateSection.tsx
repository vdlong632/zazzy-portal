import { Grid, Stack, styled, Typography } from '@mui/material';
import { useHomePage } from '../hook';
import { Rebate } from 'services/rebate';

type Props = {
  rebates: Rebate[];
};
export const RebateSection = ({ rebates }: Props) => {
  // const { rebates, loading, error } = useHomePage();
  return (
    <SectionSwapper id="rebate">
      <Stack sx={{ margin: '0 40px' }}>
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
          2026 Programmes — Verified May 2026
        </Typography>
        <Typography
          sx={{
            fontSize: 'clamp(30px,4.5vw,54px)',
            color: '#0a2e1f',
            fontWeight: '800',
            fontFamily: 'Syne, sans-serif',
            width: '70%',
            lineHeight: 1,
            marginBottom: '14px'
            // md: {fontSize: 'clamp(30px,4.5vw,54px)'}
          }}>
          Every rebate available now.
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#4a5248',
            fontWeight: 300,
            lineHeight: 1.65,
            marginBottom: '48px',
            width: '45%',
            fontFamily: 'DM Sans, sans-serif'
          }}>
          We check these every Monday. What you see is what is actually open today.
        </Typography>

        <Grid container spacing={'16px'} alignItems={'stretch'}>
          {rebates.map((item, index) => (
            <Grid item xs={6} md={4} key={item.id}>
              <CardSwapper>
                {item.jurisdiction === 'Federal' && (
                  <BadgeStyled sx={{ color: '#0C447C', backgroundColor: '#E4F0FA' }}>
                    {item.jurisdiction}
                  </BadgeStyled>
                )}
                {item.jurisdiction === 'Municipal — Paused' && (
                  <BadgeStyled sx={{ color: '#B91C1C', backgroundColor: '#FEF3F2' }}>
                    {item.jurisdiction}
                  </BadgeStyled>
                )}
                {item.jurisdiction === 'ENMAX + ATCO' && (
                  <BadgeStyled sx={{ color: '#633806', backgroundColor: '#FDF0D5' }}>
                    {item.jurisdiction}
                  </BadgeStyled>
                )}
                <IconStyled>{item.icon}</IconStyled>
                <RebateStyled>{item.amount}</RebateStyled>
                <RebateName>{item.title}</RebateName>
                <TextStyled>{item.description}</TextStyled>
                {item.impact && <BenefitStyled>{item.impact}</BenefitStyled>}
                <WarningStyled>{item.notify || ''}</WarningStyled>
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
  backgroundColor: '#F7F3EA',
  [theme.breakpoints.up('xs')]: {
    padding: '88px 0'
  }
}));

const CardSwapper = styled(Stack)(() => ({
  minHeight: '290px',
  height: '100%',
  padding: '24px',
  borderRadius: '26px',
  border: '1px solid #E5DFC8',
  backgroundColor: '#FDFCF8',

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 48px rgba(10,46,31,.13)'
  }
}));

const BadgeStyled = styled(Typography)(() => ({
  width: 'fit-content',
  display: 'flex',
  fontSize: '10px',
  fontWeight: 700,
  padding: '2px 9px',
  borderRadius: '100px',
  marginBottom: '12px',
  letterSpacing: '.06em'
}));

const IconStyled = styled(Stack)(() => ({
  fontSize: '26px',
  display: 'block',
  marginBottom: '10px'
}));

const RebateStyled = styled(Stack)(() => ({
  fontSize: '26px',
  fontWeight: 800,
  fontFamily: 'Syne, sans-serif',
  color: '#0A2E1F',
  letterSpacing: '.03em',
  marginBottom: '5px'
}));

const RebateName = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 600,
  color: '#0C0F0D',
  marginBottom: '8px'
}));

const TextStyled = styled(Typography)(() => ({
  fontSize: '13px',
  color: '#4A5248',
  lineHeight: 1.6
}));

const BenefitStyled = styled(Stack)(() => ({
  width: 'fit-content',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '11px',
  fontWeight: 600,
  backgroundColor: '#EAF3DE',
  color: '#1B5E3B',
  borderRadius: '100px',
  padding: '3px 9px',
  marginTop: '10px'
}));

const WarningStyled = styled(Typography)(() => ({
  width: '90%',
  fontSize: '11px',
  color: '#B91C1C',
  fontStyle: 'italic',
  marginTop: '7px'
}));
