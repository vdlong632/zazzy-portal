import { Stack, styled, Typography } from '@mui/material';

export const Co2Bar = () => {
  return (
    <Co2BarSwapper>
      <ItemsStyled>
        <DataStyled>47t</DataStyled>
        <TypoStyled fontFamily={'DM Sans, sans-serif'}>CO₂ avoided to date</TypoStyled>
      </ItemsStyled>
      <DividerStyled></DividerStyled>
      <ItemsStyled>
        <DataStyled>340K</DataStyled>
        <TypoStyled fontFamily={'DM Sans, sans-serif'}>Eligible Calgary buildings</TypoStyled>
      </ItemsStyled>
      <DividerStyled></DividerStyled>
      <ItemsStyled>
        <DataStyled>$8,400</DataStyled>
        <TypoStyled fontFamily={'DM Sans, sans-serif'}>Average unclaimed per building</TypoStyled>
      </ItemsStyled>
      <DividerStyled></DividerStyled>
      <ItemsStyled>
        <DataStyled>11</DataStyled>
        <TypoStyled fontFamily={'DM Sans, sans-serif'}>Active 2026 programmes</TypoStyled>
      </ItemsStyled>
    </Co2BarSwapper>
  );
};

const Co2BarSwapper = styled(Stack)(() => ({
  width: '100%',
  minHeight: '71px',
  backgroundColor: '#173c21',
  padding: '14px 40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '36px',
  flexWrap: 'wrap',
  borderTop: '1px solid rgba(198,241,53,.12)'
}));

const ItemsStyled = styled(Stack)(() => ({
  textAlign: 'center'
}));

const DataStyled = styled(Typography)(() => ({
  fontFamily: 'Syne, sans-serif',
  fontSize: '24px',
  fontWeight: 800,
  color: '#c6f135',
  lineHeight: 1,
  letterSpacing: '-.03em'
}));

const TypoStyled = styled(Typography)(() => ({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '11px',
  fontWeight: 500,
  marginTop: '2px',
  color: 'rgba(247, 243, 234, .45)'
}));

const DividerStyled = styled(Stack)(({ theme }) => ({
  width: '1px',
  height: '28px',
  backgroundColor: 'rgba(198,241,53,.15)',
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'transparent'
  }
}));
