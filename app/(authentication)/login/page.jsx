"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRef, useState } from "react";

export default function Loginpage(){
    const {register , handleSubmit , watch ,formState:{errors}}= useForm() 
    const [disabled , setDisabled] = useState(false) 
    const [error ,setError] = useState(null)
    const form = useRef()
    const onSubmit = async data =>{
        setDisabled(true)
        signInWithEmailAndPassword(auth , data.email , data.password)
         .then(
            (userCredential)=>{
                const user = userCredential.user
                console.log(user)
                form.current.elements["email"].value = ''
                form.current.elements["password"].value = ''
                setDisabled(false)
                
            })
            .catch((error)=>{
                console.log(error.message)
                setDisabled(false)
                form.current.elements["password"].value = ''
                setError(error.message)

            })
           
           
    
            
    }
    return(
        <>
        
        <div className="flex justify-center items-center h-screen  text-white bg">
            <div className="bg-darkGray p-10 rounded-3xl shadow-2xl w-[500px] flex flex-col gap-5 ">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form className="flex flex-col gap-6 mt-5 auth" onSubmit={handleSubmit(onSubmit)} ref={form}>
                      
                <div className="relative">
                <input type="email"  placeholder="Email" {...register("email" ,{ required: true , pattern: /^\S+@\S+$/i  })} className={ errors.email ? 'border border-red' : 'border-none'}    />
                       {errors.email && <span className=" ml-2 absolute inset-11  text-red font-bold text-xs  left-0">Email is required here</span>}
                    </div>
                    
                    <div className="relative">
                       <input type="password" {...register("password", { required: true })} placeholder="Password" className={errors.password ? 'border border-red' : 'border-none'}   />
                       {errors.password && <span className=" ml-2 absolute inset-11  text-red font-bold text-xs  left-0">this field is required</span>}
                    </div>
                   <div className="relative">
                   <button className="bg-lightGray text-white py-2 rounded-lg w-full" type="submit" disabled={disabled}>{disabled ? "Loading..." :"Login"}</button>
                   {error && <span className=" ml-2 absolute inset-11  text-red font-bold text-xs  left-0">Wrong password or email</span>}

                   </div>
                </form>
               
                <hr className="my-5"/>
                <p className="text-sm text-gray-400 text-center">Or continue with ?</p>
                <div className="flex justify-center gap-5">
                    <button className="bg-blue-700 text-white py-2 rounded-lg">Facebook</button>
                    <button className="bg-red-700 text-white py-2 rounded-lg">
                        GOOGLE
                    </button>
                </div>
                <p className="text-sm text-gray-400 text-center mt-5">Don't have an account ? <Link className="text-green-500" href="/signup">Sign Up</Link></p>  
            </div>
        </div>
        </>
    )
}