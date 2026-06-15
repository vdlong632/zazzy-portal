import { useForm } from 'react-hook-form';
import { InformationForm, TypeInformationForm } from './type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAsyncCallback } from 'hooks/useAsyncCallback';

export const useInformationForm = () => {
  const methods = useForm<TypeInformationForm>({
    resolver: zodResolver(InformationForm),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: undefined
    },
    mode: 'onSubmit'
  });

  const onSubmit = async (data: TypeInformationForm) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber
    };
  };
  const { asyncCallback: handleSubmitAsync } = useAsyncCallback(onSubmit, []);

  return {
    methods,
    handleSubmit: methods.handleSubmit(handleSubmitAsync)
  };
};
