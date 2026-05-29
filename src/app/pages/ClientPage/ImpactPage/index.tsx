import { Box, Stack, Typography, styled } from '@mui/material';
import { ImpactHero } from './components/ImpactHero';
import { ImpactBody } from './components/ImpactBody';

export const ImpactPage = () => {
  return (
    <Stack>
      <ImpactHero />
      <ImpactBody />
    </Stack>
  );
};
