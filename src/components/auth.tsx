import {auth} from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {useState} from "react";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email)
  const signIn = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error){
      console.error(error)
    }
    
  }

  return (
    <div>
        <input 
          placeholder='Email...' 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          placeholder='Password...'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}> Sign in </button>
    </div>
  )
}

export default Auth