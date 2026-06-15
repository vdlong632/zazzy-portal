import { Stack } from '@mui/material';
import { useMultiForm } from './hook';
import { FormProvider } from 'react-hook-form';
import { Step } from './components/Step';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';
import { Step5 } from './components/Step5';
import { Step6 } from './components/Step6';
import { ButtonCustom, ButtonOutLine } from 'app/components/elements/ButtonCustom';

export const QuizPage = () => {
  const { step, methods, handleBack, handleNext } = useMultiForm();
  return (
    <FormProvider {...methods}>
      <Stack bgcolor={'#EEEEE9'}>
        <Stack sx={{ padding: '40px', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          {step <= 6 && <Step step={step} totalStep={6} />}
          {step <= 6 && (
            <Stack>
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              {step === 4 && <Step4 />}
              {step === 5 && <Step5 />}
              {step === 6 && <Step6 />}
            </Stack>
          )}
          {step > 1 ? (
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '22px'
              }}>
              <ButtonOutLine
                label="← Back"
                onClick={handleBack}
                sx={{ height: 43, width: 'fit-content', border: '1.5px solid #E5DFC8' }}
                textSx={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: '#4A5248' }}
              />
              {step < 6 && (
                <ButtonCustom
                  label="Continue →"
                  onClick={handleNext}
                  sx={{ height: 43, width: 'fit-content', borderRadius: '100px' }}
                  textSx={{ color: '#C6F135', fontFamily: 'Syne, sans-serif' }}
                />
              )}
            </Stack>
          ) : (
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: '22px'
              }}>
              <ButtonCustom
                label="Continue →"
                onClick={handleNext}
                sx={{ height: 43, width: 'fit-content', borderRadius: '100px' }}
                textSx={{ color: '#C6F135', fontFamily: 'Syne, sans-serif' }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>
    </FormProvider>
  );
};
