import { FC, ReactNode, ChangeEvent } from 'react';
import { styled, SxProps, Theme } from '@mui/material/styles';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { TextError } from './TextError';

export type InputProps = {
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string | number) => void;
  onBlur?: () => void;
  autoComplete?: string;
};

export type RequiredInputProps = InputProps & { required: true };

type InputTextProps = {
  title?: string;
  inputProps?: InputProps | RequiredInputProps | OutlinedInputProps;
  inputError?: string;
  placeholder?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  errorWithoutText?: boolean;
  inputRef?: React.RefObject<HTMLInputElement | null> | null;
  maxLength?: number;
  colorTitle?: string;
  isLookUp?: boolean;
  isVendor?: boolean;
  sx?: SxProps<Theme>;
};

/**
 * @returns Element InputText
 */
export const InputText: FC<InputTextProps> = ({
  title,
  inputProps,
  inputError,
  placeholder,
  startAdornment,
  endAdornment,
  colorTitle,
  inputRef,
  isLookUp,
  isVendor,
  sx
}) => {
  return (
    <FormControl fullWidth error={!!inputError} sx={sx}>
      {title && (
        <FormLabel focused={false}>
          <Typography
            sx={{ fontFamily: '"DM Sans", sans-serif' }}
            // lineHeight={isLookUp ? '16px' : '20px'}
            fontSize={isLookUp ? 14 : isVendor ? 14 : 13}
            mb={1.25}
            fontWeight={isLookUp ? 500 : 400}
            // color={colorTitle || isLookUp ? 'text.secondary' : '#161616'}
          >
            {title}
          </Typography>
        </FormLabel>
      )}
      <InputStyled
        {...inputProps}
        isLookUp={isLookUp}
        isVendor={isVendor}
        style={{
          height: isLookUp ? 53 : isVendor ? 46 : 41
        }}
        autoComplete={inputProps?.autoComplete || 'off'}
        endAdornment={endAdornment}
        inputProps={{
          ref: inputRef
        }}
        placeholder={placeholder}
        startAdornment={startAdornment}
      />
      {inputError && (
        <FormHelperText error={!!inputError} sx={{ ml: 0, pt: 0.5, maxWidth: '100%' }}>
          <TextError errorText={inputError} />
        </FormHelperText>
      )}
    </FormControl>
  );
};

const InputStyled = styled(OutlinedInput, {
  shouldForwardProp: (prop) => prop !== 'isLookUp'
})<{ isLookUp?: boolean; isVendor?: boolean }>(({ theme, isLookUp, isVendor }) => ({
  minHeight: isLookUp ? 53 : isVendor ? 46 : 41,
  fontSize: isLookUp ? 16 : isVendor ? 14 : 13,
  borderRadius: isLookUp ? 18 : isVendor ? 18 : 10,
  '& .MuiInputBase-input': {
    padding: '12px',
    color: isLookUp ? '#161616' : isVendor ? '#161616' : '#fff',
    // color: theme.palette.text.primary,
    '&::placeholder': {
      color: isLookUp ? '#8a9188' : isVendor ? '#8f8497' : '#566e5c',
      // color: '#16161666',
      fontFamily: '"DM Sans"',
      fontSize: isLookUp ? 16 : isVendor ? 14 : 13,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      opacity: 1
    }
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: isLookUp ? `1px solid #16161666` : '1px solid #7B96AD',
    borderRadius: 10
  }
}));
