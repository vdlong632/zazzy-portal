import { Stack, styled, Typography } from '@mui/material';
import { ButtonCustom } from 'app/components/elements/ButtonCustom';
import { useNavigate } from 'react-router-dom';

export const CtaSection = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/quiz');
  };
  return (
    <SectionSwapper>
      <HeadingStyled>Your building's rebates are 60 seconds away.</HeadingStyled>
      <Typography
        fontSize={'16px'}
        color={'#1B5E3B'}
        marginBottom={'26px'}
        fontFamily={'DM Sans, sans-serif'}>
        Free report. No login. No commitment.
      </Typography>
      <ButtonCustom
        onClick={handleNavigate}
        label={'Start the Lookup →'}
        textSx={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '15px',
          color: '#C6F135',
        }}
        sx={{
          padding: '16px 42px',
          height: '50px',
          width: 'fit-content',
          borderRadius: '100px'
        }}
      />
    </SectionSwapper>
  );
};

const SectionSwapper = styled(Stack)(() => ({
  backgroundColor: '#C6F135',
  padding: '76px 40px',
  textAlign: 'center',
  alignItems: 'center'
}));

const HeadingStyled = styled(Typography)(() => ({
  fontSize: 'clamp(34px, 5.5vw, 68px)',
  color: '#0A2E1F',
  fontWeight: 800,
  letterSpacing: '-.04em',
  lineHeight: 1,
  marginBottom: '12px',
  fontFamily: 'Syne, san-serif'
}));
