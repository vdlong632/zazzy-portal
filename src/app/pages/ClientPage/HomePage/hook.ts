import { useGetData } from './useGetData';

export const useHomePage = () => {
  const { rebates, loading, error } = useGetData();

  return {
    rebates,
    loading,
    error
  };
};
