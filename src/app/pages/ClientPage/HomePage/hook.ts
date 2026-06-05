import { useState } from 'react';
import { useGetData } from './useGetData';
import { useNavigate } from 'react-router-dom';

export const useHomePage = () => {
  const { rebates, loading } = useGetData();
  const navigate = useNavigate();
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');

  const formatPostalCode = (value: string) => {
    const cleaned = value.replace(/\s/g, '').toUpperCase();
    if (cleaned.length > 3) {
      return cleaned.slice(0, 3) + ' ' + cleaned.slice(3, 6);
    }
    return cleaned;
  };

  const validatePostalCode = (value: string) => {
    const pattern = /^(T2|T3)[A-Z0-9]{4}$/;
    const cleaned = value.replace(/\s/g, '');
    return pattern.test(cleaned);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 7) {
      const formatted = formatPostalCode(value);
      setPostalCode(formatted);
      setError('');
    }
  };

  const handleSubmit = () => {};
  return {
    rebates,
    loading,
    error,
    postalCode,
    handleInputChange,
    handleSubmit,
    navigate
  };
};
