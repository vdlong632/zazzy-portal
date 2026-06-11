import { Stack, styled, Typography, Box } from '@mui/material';
import { ButtonCustom, ButtonOutLine } from 'app/components/elements/ButtonCustom';
import { Leads } from 'services/leads';

type Props = {
  leads: Leads[];
};

export const ActiveLeads = ({ leads }: Props) => {
  return (
    <SwapperSection>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          flexWrap: 'wrap'
        }}>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 800,
            color: '#0A2E1F',
            fontFamily: 'Syne, sans-serif',
            letterSpacing: '-.03em'
          }}>
          Active Leads
        </Typography>
        <Typography>Select</Typography>
      </Stack>
      <LeadsSwap>
        {leads.map((item) => (
          <LeadsItem>
            <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#0C0F0D' }}>
                {item.name}
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                  fontSize: '11px',
                  color: '#4A5248'
                }}>
                <span>{item.postalCode}</span>
                <span>{item.yearBuilt}</span>
                <span>{item.homeType}</span>
                <span>{item.neighborhood}</span>
                <span>{item.heatingSystem}</span>
                <span>{item.estimatedCost}</span>
              </Typography>
            </Stack>
            <Stack display={'flex'} gap="3px" flexWrap={'wrap'}>
              {item.tags.map((tag) => (
                <BadgeStyled>{tag}</BadgeStyled>
              ))}
            </Stack>
            <Stack>
              {/* <Typography>{item.status}</Typography> */}
              {item.status === 'New Lead' && (
                <StatusStyled sx={{ color: '#0A2E1F', backgroundColor: '#C6F135' }}>
                  {item.status}
                </StatusStyled>
              )}
              {item.status === 'Claimed' && (
                <StatusStyled sx={{ color: '#633806', backgroundColor: '#FDF0D5' }}>
                  {item.status}
                </StatusStyled>
              )}
              {item.status === 'Closed ✓' && (
                <StatusStyled sx={{ color: '#27500A', backgroundColor: '#EAF3DE' }}>
                  {item.status}
                </StatusStyled>
              )}
              <Typography sx={{ fontSize: '10px', color: '#4A5248', marginTop: '3px' }}>
                {item.statusDetail}
              </Typography>
            </Stack>
            <Stack justifyContent={'center'}>
              {item.status === 'New Lead' && (
                <ButtonCustom
                  label="Claim Lead"
                  textSx={{ color: '#C6F135', fontSize: '11px', fontWeight: 600 }}
                  sx={{ borderRadius: '100px', padding: '7px 14px' }}
                />
              )}
              {item.status === 'Claimed' && (
                <Stack sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <ButtonCustom
                    label="Mark Closed"
                    textSx={{ color: '#C6F135', fontSize: '11px', fontWeight: 600 }}
                    sx={{ borderRadius: '100px', padding: '7px 14px' }}
                  />
                  <ButtonOutLine
                    label="Details"
                    textSx={{ fontSize: '11px', fontWeight: 600, color: '#4A5248', lineHeight: 1 }}
                    sx={{ padding: '7px 14px' }}
                  />
                </Stack>
              )}
              {item.status === 'Closed ✓' && (
                <ButtonOutLine
                  label="View Invoice"
                  textSx={{ fontSize: '11px', fontWeight: 600, color: '#4A5248', lineHeight: 1 }}
                  sx={{ borderRadius: '100px', padding: '7px 14px' }}
                />
              )}
            </Stack>
          </LeadsItem>
        ))}
      </LeadsSwap>
    </SwapperSection>
  );
};

const SwapperSection = styled(Stack)(({ theme }) => ({
  padding: '26px 40px',
  backgroundColor: '#EEEEE9',
  [theme.breakpoints.down('sm')]: {
    padding: '26px 20px'
  }
}));

const LeadsSwap = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '7px'
}));

const LeadsItem = styled(Stack)(({ theme }) => ({
  backgroundColor: '#FDFCF8',
  borderRadius: '18px',
  padding: '16px 20px',
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr 1fr auto',
  alignItems: 'center',
  gap: '12px',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr'
  }
}));

const BadgeStyled = styled(Stack)(() => ({
  color: '#1B5E3B',
  backgroundColor: '#EAF3DE',
  fontSize: '10px',
  fontWeight: 600,
  padding: '2px 7px',
  borderRadius: '100px',
  letterSpacing: '.04em',
  width: 'fit-content'
}));

const StatusStyled = styled(Typography)(() => ({
  fontSize: '11px',
  fontWeight: 700,
  padding: '3px 11px',
  width: 'fit-content',
  borderRadius: '100px'
}));
