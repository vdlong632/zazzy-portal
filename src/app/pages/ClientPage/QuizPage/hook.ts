import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Watch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MultiForm, TypeMultiForm } from './type';
import { useState } from 'react';

export const useMultiForm = () => {
  const navigate = useNavigate();
  const methods = useForm<TypeMultiForm>({
    resolver: zodResolver(MultiForm),
    defaultValues: {
      step: 1,
      step1: { buildingType: '' },
      step2: { timeContructed: '' },
      step3: { heatingSystem: '' },
      step4: { averageBill: 50 },
      step5: { upgrades: [] },
      step6: { buildingSize: '' }
    }
  });
  const step = methods.watch('step');
  console.log('step', step);

  const handleBack = () => {
    const currentStep = methods.getValues('step');
    // console.log('1234', currentStep)

    if (currentStep === 1) {
      navigate(-1);
      return;
    } else if (currentStep > 1) {
      methods.setValue('step', currentStep - 1);
      console.log('1234', currentStep);
    }
  };

  const handleNext = () => {
    const currentStep = methods.getValues('step');
    // console.log('abc', currentStep)
    if (currentStep === 6) {
      navigate(-1);
      return;
    } else if (currentStep < 6) {
      methods.setValue('step', currentStep + 1);
    }
  };

  return {
    step,
    methods,
    handleBack,
    handleNext
  };
};
