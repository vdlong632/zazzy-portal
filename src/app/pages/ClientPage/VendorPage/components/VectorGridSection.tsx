import { Grid, Stack, styled, Typography } from '@mui/material';
import { ButtonCustom } from 'app/components/elements/ButtonCustom';
import { useNavigate } from 'react-router-dom';
import { Vendor } from 'services/vendor';

type Props = {
  vendors: Vendor[];
};
export const VectorGridSection = ({ vendors }: Props) => {
  const navigate = useNavigate();

  return (
    <Swapper>
      <Grid container spacing="18px">
        {vendors.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id} display="flex">
            <CardStyled>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                marginBottom="12px"
                gap="7px">
                <LogoStyled>{item.logo}</LogoStyled>

                <Stack alignItems="flex-end" gap="3px">
                  {item.badges.map(
                    (badge) =>
                      (badge === 'NRCan ✓' && (
                        <BadgeStyled sx={{ color: '#1B5E3B', backgroundColor: '#EAF3DE' }}>
                          {badge}
                        </BadgeStyled>
                      )) ||
                      (badge === 'ENMAX Partner' && (
                        <BadgeStyled sx={{ color: '#0C447C', backgroundColor: '#E4F0FA' }}>
                          {badge}
                        </BadgeStyled>
                      )) ||
                      (badge === 'CMHC Approved' && (
                        <BadgeStyled sx={{ color: '#633806', backgroundColor: '#FDF0D5' }}>
                          {badge}
                        </BadgeStyled>
                      ))
                  )}
                </Stack>
              </Stack>

              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#0C0F0D',
                  marginBottom: '2px'
                }}>
                {item.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: '12px',
                  color: '#4A5248',
                  marginBottom: '9px'
                }}>
                {item.category} · {item.area}
              </Typography>

              <Stack flexDirection="row" gap="5px" alignItems="center" marginBottom="9px">
                <Typography fontSize="12px" color="#E8B84B" letterSpacing="1px">
                  {'★'.repeat(item.rating.stars)}
                </Typography>

                <Typography fontSize="13px" fontWeight={700} color="#0C0F0D">
                  {item.rating.average}
                </Typography>

                <Typography fontSize="11px" color="#4A5248">
                  ({item.rating.totalReviews} reviews)
                </Typography>
              </Stack>

              <Stack
                width="100%"
                display="grid"
                gridTemplateColumns="1fr 1fr"
                gap="7px"
                marginBottom="12px">
                <FeedbackStyled>
                  <TextStyled>{item.rating.totalReviews}</TextStyled>

                  <Typography fontSize="10px" color="#4A5248">
                    Reviews
                  </Typography>
                </FeedbackStyled>

                <FeedbackStyled>
                  <TextStyled>{item.responseTime}</TextStyled>

                  <Typography fontSize="10px" color="#4A5248">
                    Response
                  </Typography>
                </FeedbackStyled>
              </Stack>

              <Stack
                flexDirection="row"
                alignItems="flex-start"
                gap="4px"
                flexWrap="wrap"
                marginBottom="12px">
                {item.certifications.map((cert) => (
                  <CertStyled key={cert}>{cert}</CertStyled>
                ))}
              </Stack>

              <ButtonCustom
                label="Get a Free Quote →"
                sx={{
                  marginTop: 'auto',
                  height: 34,
                  borderRadius: '100px'
                }}
                textSx={{
                  color: '#C6F135',
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '12px'
                }}
                onClick={() => {
                  navigate('/quiz');
                }}
              />
            </CardStyled>
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={4} display="flex">
          <CardStyled
            id="calgary"
            sx={{
              backgroundColor: '#EEEEE9',
              border: '1.5px dashed #E5DFC8',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: '100%'
            }}>
            <Typography fontSize="36px" marginBottom="10px">
              🔧
            </Typography>

            <Typography fontSize="15px" fontWeight={700} marginBottom="6px">
              Calgary Contractor?
            </Typography>

            <Typography
              fontSize="12px"
              marginBottom="14px"
              maxWidth="220px"
              lineHeight={1.6}
              color="#4A5248">
              Pre-qualified leads in your dashboard. 30-day free trial.
            </Typography>

            <Typography fontSize="12px" fontWeight={700} marginBottom="3px">
              $399/month after trial
            </Typography>

            <Typography fontSize="11px" marginBottom="14px" color="#4A5248">
              + 10% commission on all closed deals
            </Typography>

            <ButtonCustom
              label="Join the Network →"
              sx={{
                height: 34,
                borderRadius: '100px'
              }}
              textSx={{
                color: '#C6F135',
                fontFamily: 'Syne, sans-serif',
                fontSize: '12px'
              }}
              onClick={() => {
                navigate('/vendor-login');
              }}
            />
          </CardStyled>
        </Grid>
      </Grid>
    </Swapper>
  );
};

const Swapper = styled(Stack)(({ theme }) => ({
  padding: '44px 40px',
  maxWidth: '1180px',
  margin: '0 auto',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '44px 20px'
  }
}));

const CardStyled = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#FDFCF8',
  border: '1.5px solid #E5DFC8',
  borderRadius: '26px',
  padding: '24px',
  transition: 'transform .3s, box-shadow .3s',

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 48px rgba(10,46,31,.13)'
  },
  '.calgary:hover': {
    transform: 'translateY(-3px)',
    border: '1.5px dashed #4A8C65'
  }
}));

const LogoStyled = styled(Stack)(() => ({
  width: '44px',
  height: '44px',
  borderRadius: '11px',
  fontSize: '15px',
  fontWeight: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FDFCF8',
  backgroundColor: '#0A2E1F',
  fontFamily: 'Syne, sans-serif',
  flexShrink: 0
}));

const BadgeStyled = styled(Stack)(() => ({
  fontSize: '10px',
  fontWeight: 700,
  padding: '2px 7px',
  borderRadius: '100px',
  letterSpacing: '.04em',
  width: 'fit-content'
}));

const TextStyled = styled('span')(() => ({
  display: 'block',
  fontSize: '17px',
  fontWeight: 800,
  fontFamily: 'Syne, sans-serif',
  color: '#0A2E1F',
  letterSpacing: '-.02em',
  lineHeight: 1.2
}));

const FeedbackStyled = styled(Stack)(() => ({
  backgroundColor: '#EEEEE9',
  borderRadius: '10px',
  padding: '9px',
  textAlign: 'center',
  fontSize: '10px'
}));

const CertStyled = styled(Stack)(() => ({
  fontSize: '10px',
  fontWeight: 600,
  color: '#1B5E3B',
  backgroundColor: '#EAF3DE',
  padding: '2px 7px',
  width: 'fit-content',
  borderRadius: '100px',
  fontFamily: 'DM Sans, sans-serif'
}));
