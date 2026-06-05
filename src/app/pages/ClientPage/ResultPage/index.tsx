import { Grid, Stack, styled } from '@mui/material';
import { HeroSection } from './components/HeroSection';
import { ResultSection } from './components/ResultSection';
import { MatchedVendor } from './components/MatchedVendor';
import { InformationForm } from './components/InfomationForm';

export const ResultPage = () => {
  return (
    <Stack bgcolor={'#EEEEE9'}>
      <HeroSection />
      <Swapper>
        <ResultSection />
        <Stack>
          <MatchedVendor />
          <InformationForm />
        </Stack>
      </Swapper>
    </Stack>
  );
};

const Swapper = styled(Stack)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 370px',
  gap: '28px',
  padding: '44px 40px',
  maxWidth: '1100px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gridTemplateColumns: '1fr'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    padding: '44px 20px'
  }
}));
