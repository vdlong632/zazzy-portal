import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MultiForm, TypeMultiForm } from './type';

const defaultValues = {
  step: 1,
  step1: { buildingType: '' },
  step2: { timeContructed: '' },
  step3: { heatingSystem: '' },
  step4: { averageBill: 50 },
  step5: { upgrades: [] },
  step6: { buildingSize: '' }
};
export const useMultiForm = () => {
  const navigate = useNavigate();
  const methods = useForm<TypeMultiForm>({
    resolver: zodResolver(MultiForm),
    defaultValues
  });
  const { watch, handleSubmit } = methods;
  const step = watch('step');
  // console.log(methods.formState)
  // console.log(methods.formState.errors);

  const handleBack = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      const newStep = step - 1;
      methods.setValue('step', newStep);
      console.log('back', newStep);
    }
  };

  const handleNext = handleSubmit((data: TypeMultiForm) => {
    console.log('data:', data);
    if (step === 6) {
      navigate(-1);
    } else {
      const newStep = step + 1;
      methods.setValue('step', newStep);
      console.log('next', newStep);
    }
  });

  return {
    step,
    methods,
    handleBack,
    handleNext
  };
};
