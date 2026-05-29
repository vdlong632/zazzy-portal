import { FormControl, Slider, Stack, styled, SxProps, Theme, Typography } from '@mui/material';
import { useState } from 'react';

interface SliderCustomProps {
  title?: string;
  label?: string;
  value?: number;
  defaultValue?: number;
  step?: number;
  shiftStep?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  sx?: SxProps<Theme>;
  inputError?: string;
}

export const SliderCustom = ({
  title,
  label = '/mo',
  defaultValue = 50,
  step,
  min,
  max,
  onChange,
  sx,
  inputError
}: SliderCustomProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const nextValue = newValue as number;

    setValue(nextValue);
    onChange?.(nextValue);
  };

  return (
    <FormControl fullWidth error={!!inputError}>
      {title && (
        <Typography
          sx={{
            fontSize: '14px',
            color: '#4A5248',
            marginBottom: '12px',
            fontFamily: 'DM Sans, sans-serif'
          }}>
          {title}
        </Typography>
      )}

      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        marginBottom="14px">
        <Typography
          sx={{
            fontFamily: 'Syne, sans-serif',
            color: '#0A2E1F',
            fontSize: '18px',
            fontWeight: 500
          }}>
          <DollarStyled>$</DollarStyled>
          {value}
          {label}
        </Typography>
      </Stack>

      <StyledSlider value={value} onChange={handleChange} min={min} max={max} step={step} sx={sx} />

      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: '#8A9188'
        }}>
        <Typography>${min}</Typography>
        <Typography>${max}+</Typography>
      </Stack>

      {inputError && (
        <Typography fontSize="12px" color="error" marginTop="8px">
          {inputError}
        </Typography>
      )}
    </FormControl>
  );
};

const StyledSlider = styled(Slider)(() => ({
  width: '100%',
  height: '8px',
  color: '#0A2E1F'
}));

const DollarStyled = styled('em')(() => ({
  fontSize: '44px',
  fontWeight: '800',
  fontFamily: 'Syne, sans-serif',
  fontStyle: 'normal'
}));
