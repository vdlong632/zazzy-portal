import { Grid, Stack } from '@mui/material';
import { HeroSection } from './components/HeroSection';
import { ResultSection } from './components/ResultSection';
import { MatchedVendor } from './components/MatchedVendor';
import { InformationForm } from './components/InfomationForm';

export const ResultPage = () => {
  return (
    <Stack bgcolor={'#EEEEE9'}>
      <HeroSection />
      <Grid container spacing={'28px'} sx={{ padding: '44px 40px' }}>
        <Grid item xs={6} md={7.5}>
          <ResultSection />
        </Grid>
        <Grid item xs={6} md={4.5}>
          <MatchedVendor />
          <InformationForm />
        </Grid>
      </Grid>
    </Stack>
  );
};

// sx={{
//   margin: '0 90.5px',
//   padding: '44px 40px',
//   display: 'grid',
//   gridTemplateColumns: '2fr 1fr',
//   gap: '28px'
// }}>
