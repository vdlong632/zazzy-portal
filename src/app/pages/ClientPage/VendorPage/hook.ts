import { useGetVendors } from './useGetVendors';

export const useVendorPage = () => {
  const { vendors, loading, error } = useGetVendors();

  return {
    vendors,
    loading,
    error
  };
};
