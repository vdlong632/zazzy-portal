import { useEffect, useState } from 'react';
import { Leads } from 'services/leads';
import { MOCK_LEADS } from 'types/leads';

export const useGetLeads = () => {
  const [leads, setLeads] = useState<Leads[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchVendors = async () => {
    try {
      setLoading(true);
      setError('');
      //   await new Promise((resolve) => setTimeout(resolve, 500));

      setLeads(MOCK_LEADS);
    } catch {
      setError('Failed to load vendors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return {
    leads,
    loading,
    error,
    refetch: fetchVendors
  };
};
