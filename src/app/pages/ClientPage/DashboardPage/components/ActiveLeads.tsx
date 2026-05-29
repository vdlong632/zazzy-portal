import { Stack, styled, Typography } from '@mui/material';
import { Leads } from 'services/leads';

type Props = {
  leads: Leads[];
};

export const ActiveLeads = ({ leads }: Props) => {
  return (
    <Stack sx={{ padding: '26px 40px', backgroundColor: '#EEEEE9' }}>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          flexWrap: 'wrap'
        }}>
        <Typography>Active Leads</Typography>
        <Typography>Select</Typography>
      </Stack>
      <LeadsGrid>
        <Stack>
          <Typography>Sandra K.</Typography>
          <Typography>T2G 3T8 · 1977 Detached · Ramsay · Gas furnace · Est. $18,000</Typography>
        </Stack>
        <Stack sx={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>Heat Pump</Stack>
        <Stack>
          <Typography>Closed</Typography>
          <Typography>Closed May 3 · $2,200 commission</Typography>
        </Stack>
        <Stack>Badge</Stack>
      </LeadsGrid>
    </Stack>
  );
};

const LeadsGrid = styled(Stack)(() => ({
  backgroundColor: '#FDFCF8',
  borderRadius: '18px',
  padding: '16px 20px',
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr 1fr auto',
  gap: '12px'
}));
