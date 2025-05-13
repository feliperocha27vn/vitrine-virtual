import { LoginForm } from './components/auth/LoginForm.js'
import logoPerola from './assets/logo-perola.png'

export function App() {
  return (
    <div className="min-h-screen bg-gray-950 space-y-22">
      <div className="w-full flex justify-center">
        <img src={logoPerola} alt="Logo Pérola" className="pt-10 h-32" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <LoginForm />
      </div>
    </div>
  )
}
