import { useGetLeads } from './useGetLeads';

export const useDashboardPage = () => {
  const { leads, loading, error } = useGetLeads();

  return {
    leads,
    loading,
    error
  };
};
