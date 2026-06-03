import { Stack, styled } from '@mui/material';
import { AireSystem } from './components/AireSystem';
import { VendorStatus } from './components/VendorStatus';
import { ActiveLeads } from './components/ActiveLeads';
import { useGetLeads } from './useGetLeads';

export const DashboardPage = () => {
  const {leads} = useGetLeads();
  return (
    <WrapSection>
      <AireSystem />
      <VendorStatus />
      <ActiveLeads leads={leads}/>
    </WrapSection>
  );
};

const WrapSection = styled(Stack)(() => ({
  minHeight: '100vh',
  // paddingTop: '62px',
  backgroundColor: '#EEEEE9'
}));
