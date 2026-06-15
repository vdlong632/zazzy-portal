import { Box, Stack, styled, Typography } from '@mui/material';
import { ButtonCustom } from 'app/components/elements/ButtonCustom';
import { InputText } from 'app/components/elements/InputText';
import { SliderCustom } from 'app/components/elements/SliderCustom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from 'utils/validate';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
export type FormLoginType = z.infer<typeof loginSchema>;

type FormLoginProps = {
  onSubmit: (data: FormLoginType) => void;
};
export const LoginForm = ({ onSubmit }: FormLoginProps) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm<FormLoginType>({ resolver: zodResolver(loginSchema) });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormSwapper>
        <Box
          width="52px"
          height="52px"
          bgcolor="#0A2E1F"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="7px"
          margin={'0 auto 20px'}>
          <Typography
            fontSize="20px"
            color="#C6F135"
            fontWeight={800}
            fontFamily={'Syne, sans-serif'}>
            ZG
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#0A2E1F',
            letterSpacing: '-.04em',
            marginBottom: '5px',
            fontFamily: 'Syne, sans-serif'
          }}>
          Vendor Portal
        </Typography>
        <Typography
          fontSize={'13px'}
          color={'#4A5248'}
          marginBottom={'26px'}
          fontFamily={'DM Sans, sans-serif'}>
          Sign in to manage your leads, track deals, and view your performance dashboard.
        </Typography>
        <InputText
          isVendor
          placeholder="Email address"
          inputError={errors.email?.message}
          inputProps={{
            ...register('email')
          }}
          sx={{ marginBottom: '9px' }}
        />
        <InputText
          isVendor
          placeholder="Password"
          inputError={errors.password?.message}
          inputProps={{
            ...register('password')
          }}
          sx={{ marginBottom: '9px' }}
        />
        <ButtonCustom
          type="submit"
          label="Sign In to Dashboard →"
          textSx={{
            color: '#C6F135',
            fontFamily: 'Syne, sans-serif',
            fontSize: '14px'
          }}
          sx={{ height: 43, marginTop: '3px', borderRadius: '100px' }}
          onClick={() => {
            navigate('/dashboard');
          }}
        />
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '5px',
            marginTop: '16px'
          }}>
          <Typography fontSize={'12px'}>Not yet a vendor?</Typography>
          <RegisterTag href="">Apply to join</RegisterTag>
        </Stack>
        <Stack
          sx={{
            fontSize: '11px',
            fontWeight: 'DM Sans, sans-serif',
            color: '#8A9188',
            marginTop: '8px'
          }}>
          $399/month after 30-day free trial <br /> 10% commission on all confirmed upgrades from
          day 1
        </Stack>
      </FormSwapper>
    </form>
  );
};

const FormSwapper = styled(Stack)(() => ({
  backgroundColor: '#F7F3EA',
  borderRadius: '26px',
  padding: '40px',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'center'
}));

const RegisterTag = styled('a')(() => ({
  color: '#0A2E1F',
  fontWeight: 600,
  fontSize: '12px',
  textDecoration: 'underline',
  cursor: 'pointer'
}));
