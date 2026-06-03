import { Stack, styled, Typography } from '@mui/material';
import { STEP_FORM, STEP_FORM_DESC } from '../const';

type Props = {
  step: number;
  totalStep: number;
};
export const Step = ({ step, totalStep }: Props) => {
  const progress = Math.ceil((step / totalStep) * 100);
  console.log(step)
  return (
    <Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
        <ProgressRow fontSize={'12px'}>
          Step {step} of {totalStep}
        </ProgressRow>
        <ProgressRow>{progress}%</ProgressRow>
      </Stack>
      <BarStep>
        <BarFill width={progress}></BarFill>
      </BarStep>
      <StepTitle>{STEP_FORM?.find((item) => item.value === step)?.label}</StepTitle>
      <StepDesc>{STEP_FORM_DESC?.find((item) => item.value === step)?.label}</StepDesc>
    </Stack>
  );
};

const ProgressRow = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#4A5248',
  fontWeight: 600
}));
const StepTitle = styled(Stack)(() => ({
  fontSize: 'clamp(22px,4vw,34px)',
  fontWeight: 800,
  color: '#0A2E1F',
  fontFamily: 'Syne, sans-serif',
  lineHeight: 1.1,
  marginBottom: '8px'
}));

const StepDesc = styled(Stack)(() => ({
  fontSize: '14px',
  color: '#4A5248',
  marginBottom: '26px',
  lineHeight: 1.6,
}));

const BarStep = styled(Stack)(() => ({
  width: '100%',
  height: '5px',
  borderRadius: '100px',
  backgroundColor: '#E5DFC8',
  marginBottom: '32px'
}));

const BarFill = styled(Stack)<{ width: number }>(({ width }) => ({
  width: `${width}%`,
  backgroundColor: '#C6F135',
  height: '100%',
  transition: 'width .4s cubic-bezier(.4,0,.2,1)',
  borderRadius: '100px'
}));
