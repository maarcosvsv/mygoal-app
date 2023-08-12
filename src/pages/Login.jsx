import logo from '../assets/logo_transparent.png'
import '../styles/login.css'

function Login() {


  return (
    <>
        <div className="flex min-h-full flex-col items-center justify-center px-6 pt-16 lg:px-8">
            <img className="mx-auto h-52 w-auto" src={logo} alt="MyGoal" />

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                       </div>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-silver-teal placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tahiti sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-silver-teal placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-silver-teal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hover-silver-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hover-silver-teal">Entrar</button>
                    </div>
                </form>
                <p className="mt-10 text-center text-base text-gray-900">
                    Este canal é exclusivo para membros.
                </p>
            </div>
        </div>
    </>
  )
}

export default Login
