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
      <div className="wrapper ">
          <form onSubmit={handleSubmit}>
              <div className="email">
              <label>Enter your email</label>
                  <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="password">
                  <label>Enter your password</label>
                   <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit">Submit</button>
          </form>  
    </div>
  )
}

// export default Login