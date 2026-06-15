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
      upgrades: z.array(z.string())
      // upgrades: z.array(z.string()).default([]),
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
    if (data.step >= 2) {
      if (!data.step2.timeContructed) addRequired('Time Contructed', ['step2', 'timeContructed']);
    }
    if (data.step >= 3) {
      if (!data.step3.heatingSystem) addRequired('Heating System', ['step3', 'heatingSystem']);
    }
    if (data.step >= 5) {
      if (data.step5.upgrades.length === 0) {
        addRequired('Upgrades', ['step5', 'upgrades']);
      }
    }
    if (data.step >= 6) {
      if (!data.step6.buildingSize) addRequired('Building Size', ['step6', 'buildingSize']);
    }
  });

export type TypeMultiForm = z.infer<typeof MultiForm>;
