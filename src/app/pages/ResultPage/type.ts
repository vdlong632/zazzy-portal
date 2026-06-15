import z from 'zod';

export const InformationForm = z.object({
  id: z.string().optional(),
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().min(1, 'Email is required'),
  phoneNumber: z.number().optional()
});

export type TypeInformationForm = z.infer<typeof InformationForm>;
