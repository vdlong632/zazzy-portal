import { useEffect, useState } from 'react';
import { Vendor } from 'services/vendor';
import { MOCK_VENDORS } from 'types/vendor';

export const useGetVendors = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchVendors = async () => {
    try {
      setLoading(true);
      setError('');
    //   await new Promise((resolve) => setTimeout(resolve, 500));

      setVendors(MOCK_VENDORS);
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
    vendors,
    loading,
    error,
    refetch: fetchVendors
  };
};