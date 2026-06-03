import z from 'zod';

export const MultiForm = z
  .object({
    step: z.number(),
    step1: z.object({
      buildingType: z.string()
    }),
    step2: z.object({
      timeContructed: z.string()
    }),
    step3: z.object({
      heatingSystem: z.string()
    }),
    step4: z.object({
      averageBill: z.number()
    }),
    step5: z.object({
      upgrades: z.array(z.string()).min(1).default([]).optional()
    }),
    step6: z.object({
      buildingSize: z.string()
    })
  })
  .superRefine((data, ctx) => {
    const addRequired = (fieldName: string, path: string[]) => {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `${fieldName} is required`,
        path: path
      });
    };
    if (data.step >= 1) {
      if (!data.step1.buildingType) addRequired('Building type', ['step1', 'buildingType']);
    }
    // if (data.step >= 2) {
    //   const timeContruct = data.step2.timeContructed;
    // }
  });

export type TypeMultiForm = z.infer<typeof MultiForm>;
