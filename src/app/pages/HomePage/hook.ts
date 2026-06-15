import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetData } from './useGetData';

export function useHomePage() {
  const navigate = useNavigate();
  const [postalCode, setPostalCode] = useState('');
  const { rebates, loading } = useGetData();
  const [error, setError] = useState('');
  const formatPostalCode = (value: string): string => {
    const cleaned = value.replace(/\s/g, '').toUpperCase();
    if (cleaned.length > 3) {
      return cleaned.slice(0, 3) + ' ' + cleaned.slice(3, 7);
    }
    return cleaned;
  };
  const validatePostalCode = (value: string): boolean => {
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = postalCode.replace(/\s/g, '');
    if (!cleaned) {
      setError('Please enter your postal code');
      return;
    }
    if (!validatePostalCode(cleaned)) {
      setError('Please enter a valid Calgary postal code starting with T2 or T3');
      return;
    }
    navigate('/quiz');
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };
  return {
    rebates,
    loading,
    postalCode,
    error,
    handleInputChange,
    handleSubmit,
    handleKeyPress,
    navigate
  };
}
