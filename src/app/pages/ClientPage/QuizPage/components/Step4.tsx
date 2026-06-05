import { memo } from 'react';
import { Stack, styled } from '@mui/material';
import { SliderCustom } from 'app/components/elements/SliderCustom';
import { Controller, useFormContext } from 'react-hook-form';
import { TypeMultiForm } from '../type';

export const Step4 = memo(() => {
  const {
    control,
    watch,
    setValue,
    setError,
    formState: { errors }
  } = useFormContext<TypeMultiForm>();
  // console.log(watch('step4.averageBill'));
  return (
    <Stack flex={1} alignItems={'center'}>
      <SliderBox>
        <Controller
          control={control}
          name="step4.averageBill"
          render={({ field, fieldState }) => (
            <SliderCustom
              value={field.value ?? 50}
              defaultValue={50}
              min={50}
              max={800}
              step={10}
              onChange={(value) => {
                field.onChange(value);
              }}
              inputError={fieldState.error?.message}
            />
          )}
        />
      </SliderBox>
    </Stack>
  );
});

const SliderBox = styled(Stack)(() => ({
  width: '100%',
  padding: '26px',
  backgroundColor: '#FDFCF8',
  border: '2px solid #E5DFC8',
  borderRadius: '18px',
  textAlign: 'center',
  marginBottom: '22px'
}));
