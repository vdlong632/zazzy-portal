import { FC, ReactNode } from 'react';
import { styled, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ButtonProps } from '@mui/material/Button';
import { SubmitButton, SubmitButtonProps } from './SubmitButton';
import { SxProps } from '@mui/system';

type CustomButtonProps = {
  label?: string;
  typeOutline?: 'black' | 'secondary';
  loading?: boolean;
  isSecondary?: boolean;
  isDelete?: boolean;
  iconStart?: ReactNode;
  textSx?: SxProps<Theme>;
  isForm?: boolean;
} & ButtonProps &
  SubmitButtonProps;

/**
 * @returns Element PrimaryButton
 */
export const ButtonCustom: FC<CustomButtonProps> = ({
  label,
  isDelete,
  isSecondary,
  iconStart,
  textSx,
  isForm,
  ...props
}) => {
  return (
    <PrimaryButtonStyled $buttonDelete={isDelete} $buttonSecondary={isSecondary} {...props}>
      <>
        {iconStart && iconStart}
        {label && (
          <Typography
            // fontSize={16}
            fontWeight={700}
            fontFamily={isForm ? 'Syne, sans-serif' : 'DM Sans'}
            // color={'red'}
            // color={isSecondary ? 'text.primary' : 'common.white'}
            sx={textSx}>
            {label}
          </Typography>
        )}
        {props.children}
      </>
    </PrimaryButtonStyled>
  );
};

/**
 * @returns Element PrimaryButton
 */
export const ButtonOutLine: FC<CustomButtonProps> = ({
  label,
  iconStart,
  typeOutline = 'secondary',
  textSx,
  ...props
}) => {
  return (
    <PrimaryButtonOutLine $typeOutline={typeOutline} {...props}>
      <>
        {iconStart && iconStart}
        {label && (
          <Typography
            fontSize={16}
            fontWeight={500}
            // color={typeOutline === 'secondary' ? 'text.secondary' : '#020202'}
            sx={textSx}>
            {label}
          </Typography>
        )}
        {props.children}
      </>
    </PrimaryButtonOutLine>
  );
};
const PrimaryButtonStyled = styled(SubmitButton, {
  shouldForwardProp: (prop) => !String(prop).startsWith('$')
})<{ $buttonDelete?: boolean; $buttonSecondary?: boolean }>(
  ({ theme, $buttonDelete, $buttonSecondary }) => ({
    borderRadius: 10,
    padding: '0 20px',
    fontWeight: 700,
    width: '100%',
    whiteSpace: 'nowrap',
    backgroundColor: '#0A2E1F',
    '&:hover': {
      backgroundColor: '#1B5E3B',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 20px rgba(10,46,31,.25)'
    },
    '&.Mui-disabled': {
      opacity: 0.6
    }
  })
);

const PrimaryButtonOutLine = styled(SubmitButton, {
  shouldForwardProp: (prop) => !String(prop).startsWith('$')
})<{ $typeOutline?: string }>(({ theme, $typeOutline }) => ({
  borderRadius: 100,
  width: '100%',
  whiteSpace: 'nowrap',
  background: 'transparent',
  // border: `1px solid ${$typeOutline === 'black' ? '#020202' : theme.palette.text.secondary}`,
  border: '1.5px solid #E5DFC8',
  '&:hover': {
    borderColor: '#0A2E1F',
    backgroundColor: '#0A2E1F',
    '& .MuiTypography-root': {
      color: '#C6F135'
    }
    // backgroundColor: theme.palette.action.hover,
    // border: `1px solid ${$typeOutline === 'black' ? '#020202' : theme.palette.text.secondary}`
  },
  '&.Mui-disabled': {
    opacity: 0.6
  }
}));
