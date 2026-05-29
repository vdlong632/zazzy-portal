import { Box, styled } from '@mui/material';
import { HeroSection } from './components/HeroSection';
import { Co2Bar } from './components/Co2Bar';
import { HowItWorksSection } from './components/HowItWorksSection';
import { RebateSection } from './components/RebateSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { useHomePage } from './hook';

export const HomePage = () => {
  const { rebates, loading, error } = useHomePage();

  return (
    <PageWrapper>
      <HeroSection />
      <Co2Bar />
      <HowItWorksSection />
      <RebateSection rebates={rebates} />
      <CtaSection />
      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled(Box)(() => ({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#FDFCF8'
}));
