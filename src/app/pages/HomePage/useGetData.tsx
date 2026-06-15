import { useEffect, useState } from 'react';
import { Rebate } from 'services/rebate';
import { MOCK_REBATES } from 'types/rebate';

export const useGetData = () => {
  const [rebates, setRebates] = useState<Rebate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchRebates = async () => {
    try {
      setLoading(true);
      setError('');
      //   await new Promise((resolve) => setTimeout(resolve, 500));

      setRebates(MOCK_REBATES);
    } catch {
      setError('Failed to load rebates');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRebates();
  }, []);

  return {
    rebates,
    loading,
    error,
    refetch: fetchRebates
  };
};
