import { Stack, styled, Typography } from '@mui/material';
import { useInformationForm } from '../hook';
import { FormProvider } from 'react-hook-form';
import { InputText } from 'app/components/elements/InputText';
import { ButtonCustom } from 'app/components/elements/ButtonCustom';

type FormProps = {
  disabled?: boolean;
};
export const InformationForm = ({ disabled = false }: FormProps) => {
  const { methods } = useInformationForm();
  return (
    <FormProvider {...methods}>
      <Stack bgcolor={'#0A2E1F'} padding={'22px'} borderRadius={'26px'}>
        <HeadingForm>Claim Your Report</HeadingForm>
        <SubTitle>
          Enter your details to receive your full report and get connected with your 3 matched
          vendors.
        </SubTitle>
        <Stack sx={{ display: 'flex', gap: '9px', marginBottom: '9px' }}>
          <InputText placeholder="First name" />
          <InputText placeholder="Last name" />
          <InputText placeholder="Email adress" />
          <InputText placeholder="Phone (optional)" />
          <InputText inputProps={{ readOnly: true }} />
        </Stack>
        <ButtonCustom
          isForm
          label="Get My Report and Vendor Matches →"
          sx={{ height: '39px', borderRadius: '100px', backgroundColor: '#C6F135' }}
          textSx={{ color: '#0A2E1F', fontFamily: 'Syne, sans-serif', fontSize: '14px' }}
        />
      </Stack>
    </FormProvider>
  );
};

const HeadingForm = styled(Typography)(() => ({
  fontFamily: 'Syne, sans-serif',
  fontSize: '19px',
  fontWeight: 800,
  color: '#C6F135'
}));

const SubTitle = styled(Typography)(() => ({
  fontSize: '13px',
  color: 'rgba(247, 243, 234, .55)',
  marginBottom: '16px',
  lineHeight: 1.5
  // wordWrap: 'break-word'
}));
