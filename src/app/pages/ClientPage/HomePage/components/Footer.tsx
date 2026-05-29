import { Box, Grid, Stack, styled, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <FooterSwagger>
      <Grid
        container
        spacing={'36px'}
        sx={{
          paddingBottom: '44px',
          marginBottom: '44px',
          borderBottom: '1px solid rgba(247,243,234,.06)'
        }}>
        <Grid item xs={6} md={4.8}>
          <Stack display={'flex'} flexDirection={'row'} gap={'9px'} alignItems={'center'}>
            <Box
              width="32px"
              height="32px"
              bgcolor="#0A2E1F"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="7px">
              <Typography
                fontSize="12px"
                color="#C6F135"
                fontWeight={800}
                fontFamily={'Syne, sans-serif'}>
                ZG
              </Typography>
            </Box>

            <Typography
              fontSize="16px"
              fontWeight={700}
              color="#F7F3EA"
              fontFamily={'Syne, sans-serif'}>
              Zazzy Group
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: '13px',
              lineHeight: 1.7,
              marginTop: '13px',
              color: 'rgba(247, 243, 234, .38)',
              fontFamily: 'DM Sans, sans-serif'
            }}>
            The dominant two-sided platform in the Canadian energy rebates niche. Homeowners find
            money. Vendors build business. Calgary first, Canada next.
          </Typography>
        </Grid>
        <Grid item xs={6} md={2.4}>
          <HeadingTitle>Homeowners</HeadingTitle>
          <ItemStyled href="">Free Rebate Lookup</ItemStyled>
          <ItemStyled href="">How It Works</ItemStyled>
          <ItemStyled href="">2026 Programmes</ItemStyled>
          <ItemStyled href="">Impact Dashboard</ItemStyled>
        </Grid>
        <Grid item xs={6} md={2.4}>
          <HeadingTitle>Vendors</HeadingTitle>
          <ItemStyled href="">Vendor Directory</ItemStyled>
          <ItemStyled href="">Vendor Login</ItemStyled>
          <ItemStyled href="">Join the Network</ItemStyled>
          <ItemStyled href="">$399/mo Plans</ItemStyled>
        </Grid>
        <Grid item xs={6} md={2.4}>
          <HeadingTitle>Company</HeadingTitle>
          <ItemStyled href="">About</ItemStyled>
          <ItemStyled href="">Press</ItemStyled>
          <ItemStyled href="">Contact</ItemStyled>
          <ItemStyled href="">Privacy</ItemStyled>
        </Grid>
      </Grid>
      <FooterBottom>
        <TextBottom>
          © 2026 Zazzy Group Inc. Calgary, AB. Clean Technology Platform TRL 7.
        </TextBottom>
        <TextBottom>Dominating the rebates niche 🇨🇦</TextBottom>
      </FooterBottom>
    </FooterSwagger>
  );
};

const FooterSwagger = styled(Stack)(() => ({
  width: '100%',
  minHeight: '350px',
  padding: '64px 40px 32px 40px',
  backgroundColor: '#0a2e1f'
}));

// const FooterItem = styled(Stack)(({ theme }) => ({
//   display: 'grid',
//   gridTemplateColumns: '2fr 1fr 1fr 1fr',
//   gap: '36px',
//   maxWidth: '1200px',
//   margin: '0 0.5px 44px',
//   paddingBottom: '44px',
//   borderBottom: '1px solid rgba(247, 243, 234, .06)',
//   [theme.breakpoints.up('md')]: {
//     display: 'grid',
//     gridTemplateColumns: '2 fr',
//   }
// }));

const HeadingTitle = styled(Typography)(() => ({
  fontSize: '12px',
  fontWeight: 700,
  fontFamily: 'Syne, sans-serif',
  color: '#C6F135',
  letterSpacing: '.07em',
  marginBottom: '12px',
  textTransform: 'uppercase'
}));

const ItemStyled = styled('a')(() => ({
  display: 'block',
  fontSize: '13px',
  fontFamily: 'DM Sans, sans-serif',
  color: 'rgba(247,243,234,.42)',
  textDecoration: 'none',
  marginBottom: '8px',
  transition: 'color .2s',
  cursor: 'pointer',

  '&:hover': {
    color: '#fff'
  }
}));

const FooterBottom = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  fontSize: '12px',
  color: 'rgba(247,243,234,.22)'
}));

const TextBottom = styled(Typography)(() => ({
  fontSize: '12px',
  fontFamily: 'DM Sans, sans-serif',
  display: 'inline-block'
}));
