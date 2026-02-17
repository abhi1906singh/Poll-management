"use client"
import { useState } from "react"

export default  function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className="min-h-screen w-full bg-[url('/login.jpg')]
       bg-cover bg-center bg-no-repeat">
        <div className="wrapper flex justify-center p-3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white/15 backdrop-blur-md">
              Signin Form
              <div className="email">
              <label>Enter your email</label>
                  <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="password">
                  <label>Enter your password</label>
                   <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="button">Submit</button>
          </form>  
            </div>
     </div>
  )
}

// export default Login