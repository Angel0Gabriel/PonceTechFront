'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const userSignInFormSchema = z.object({
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z.string().min(6, 'Insira pelo menos 6 caracteres'),
})

type UserSignInFormSchemaType = z.infer<typeof userSignInFormSchema>

export function LoginForm() {
  const { /* handleSubmit */ register, formState } =
    useForm<UserSignInFormSchemaType>({
      resolver: zodResolver(userSignInFormSchema),
    })

  const { errors, isSubmitting } = formState

  // async function handleCreateUser({
  //   email,
  //   password,
  // }: UserSignInFormSchemaType) {
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password)
  //     navigate({ to: '/' })
  //   } catch {
  //     toast({
  //       title: 'Oops! Credenciais invalidos',
  //       variant: 'destructive',
  //     })
  //   }
  // }

  return (
    <form onSubmit={() => {} /* handleSubmit(handleCreateUser ) */}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <div className="flex flex-col gap-1">
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              {...register('email')}
            />
            {errors?.email && (
              <span className="text-xs text-red-600">
                {errors.email.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
          </div>
          <div className="flex flex-col gap-1">
            <Input
              id="password"
              type="password"
              required
              {...register('password')}
            />
            {errors?.password && (
              <span className="text-xs text-red-600">
                {errors.password.message as string}
              </span>
            )}
          </div>
        </div>
        <Button disabled={isSubmitting} type="submit" className="w-full">
          Entrar
        </Button>
      </div>
      {/* <div className="mt-4 text-center text-sm">
				Don&apos;t have an account?{" "}
				<Link to="/register" className="underline">
					Sign up
				</Link>
			</div> */}
    </form>
  )
}
