import { Stack, styled, Typography } from '@mui/material';

const ITEMS = [
  { value: '23', detail: 'Leads this month' },
  {
    value: '8',
    detail: 'Deals closed',
    color: '#C6F135',
    bg: '#0A2E1F',
    textColor: 'rgba(247,243,234,.45)'
  },
  { value: '$11,200', detail: 'Revenue from Zazzy leads' },
  { value: '4.9★', detail: 'Homeowner rating' }
];

export const VendorStatus = () => {
  return (
    <Stack sx={{ padding: '26px 40px', backgroundColor: '#FDFCF8' }}>
      <Stack display={'grid'} gridTemplateColumns={'repeat(4,1fr)'} gap={'13px'}>
        {ITEMS.map((item) => (
          <CardStyled sx={{ backgroundColor: item.bg || '#EEEEE9' }}>
            <Typography
              sx={{
                fontSize: '32px',
                fontWeight: '800',
                fontFamily: 'Syne, sans-serif',
                color: item.color || '#0A2E1F',
                letterSpacing: '-.04em',
                lineHeight: 1
              }}>
              {item.value}
            </Typography>
            <Typography
              sx={{ fontSize: '11px', color: item.textColor || '#4A5248', marginTop: '3px' }}>
              {item.detail}
            </Typography>
          </CardStyled>
        ))}
      </Stack>
    </Stack>
  );
};

const CardStyled = styled(Stack)(() => ({
  padding: '18px',
  // backgroundColor: '#EEEEE9',
  borderRadius: '18px',
  textAlign: 'center'
}));
