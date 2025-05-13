// ShadcnUi
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
// React hook form
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// Zod
import { z } from 'zod'

const loginValidationSchema = z.object({
  nome: z.string().toLowerCase(),
  senha: z.string(),
})

type loginFormData = z.infer<typeof loginValidationSchema>

export function LoginForm() {
  const { register, handleSubmit } = useForm<loginFormData>({
    resolver: zodResolver(loginValidationSchema),
  })

  function handleLogin(data: loginFormData) {
    console.log(data)
  }

  return (
    <div className="w-11/12 max-w-[400px]">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label>Nome</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  required
                  {...register('nome')}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input
                  id="senha"
                  type="password"
                  required
                  placeholder="Digite sua senha"
                  {...register('senha')}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
