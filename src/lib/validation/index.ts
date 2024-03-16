import * as z from 'zod';

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be at most 50 characters long' }),
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters long' })
    .max(50, { message: 'Username must be at most 50 characters long' }),
  email: z
    .string()
    .min(8, { message: 'Email must be at least 8 characters long' })
    .max(50, { message: 'Email must be at most 50 characters long' })
    .email({ message: 'Invalid Email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export const SigninValidation = z.object({
  email: z
    .string()
    .min(8, { message: 'Email must be at least 8 characters long' })
    .max(50, { message: 'Email must be at most 50 characters long' })
    .email({ message: 'Invalid Email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(3000),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
