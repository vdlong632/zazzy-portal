import { Box, Typography, styled } from '@mui/material';
import { LoginForm } from './components/LoginForm';

export const VendorLoginPage = () => {
  const handleSubmitForm = () => {
    console.log('Login Success')
  }
  return (
    <PageWrapper>
      <LoginForm onSubmit={handleSubmitForm}/>
    </PageWrapper>
  );
};

const PageWrapper = styled(Box)(() => ({
  minHeight: '100svh',
  backgroundColor: '#0A2E1F',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px'
}));