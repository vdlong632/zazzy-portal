import { Box, Stack, Typography, styled } from '@mui/material';
import { VectorHeading } from './components/VectorHeading';
import { VectorGridSection } from './components/VectorGridSection';
import { useVendorPage } from './hook';

export const VendorPage = () => {
  const { vendors, loading, error } = useVendorPage();

  return (
    <Stack>
      <VectorHeading />
      <VectorGridSection vendors={vendors} />
    </Stack>
  );
};

// const PageWrapper = styled(Box)(() => ({
//   padding: '56px 40px 36px',
//   minHeight: 'calc(100vh - 62px)',
//   backgroundColor: '#0A2E1F',
//   flex: 1,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));
