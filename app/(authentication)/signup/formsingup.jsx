"use client"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore , collection, doc, setDoc } from "firebase/firestore"
import { auth } from "@/app/firebase";
export default function FormSingup(){
    const [disabled , setDisabled] = useState(false)
    const{register , handleSubmit , watch ,formState:{errors}}= useForm()
    const[error , setError] = useState(null)
   const firestore = getFirestore()
    const  onSubmit = async data => 
    {    
        setDisabled(true)
        createUserWithEmailAndPassword(auth , data.email , data.password)
        .then((userCredential) => {
          
            const user = userCredential.user;
             setDoc(doc(collection(firestore, "users"), user.uid), {
                username: data.username,
                email: data.email,
              });
             console.log(user)
             setDisabled(false)
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(errorMessage)
            setDisabled(false)
            // ..
          });
          
    }
    const password = watch("password")
    return (
        <>
            <form className="flex flex-col gap-6 mt-5 auth" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="User name"
                        className={errors.username ? "border border-red " : "border-none"}
                        {...register("username", { required: true })}
                    />
                    {errors.username && (
                        <span className="text-xs text-red absolute inset-11 left-2  font-bold">
                            User name is required
                        </span>
                    )}
                </div>

                <div className="relative">
                    <input
                        type="email"
                        placeholder="Email"
                        className={errors.email ? "border border-red " : "border-none"}
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="text-xs text-red absolute inset-11 left-2  font-bold">
                           
                       Email is required 
                        </span>
                    )}
                    {error && (
                        <span className="text-xs text-red absolute inset-11 left-2  font-bold">
                           
                       Email already used
                        </span>
                    )}
                </div>

                <div className="relative">
                    <input
                        type="password"
                        placeholder="Password"
                        className={errors.password ? "border border-red " : "border-none"}
                        {...register("password", {
                            required: { value: true, message: "Password is required" },
                            validate: (value) =>
                                value.length > 6 || "Password must contain at least 6 characters",
                        })}
                    />
                    {errors.password && (
                        <span className="text-xs text-red absolute inset-11 left-2  font-bold">
                            {errors.password.message}
                        </span>
                    )}
                </div>

                <div className="relative">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className={errors.confirmPassword ? "border border-red " : "border-none"}
                        {...register("confirmPassword", {
                            required: { value: true, message: "You must specify a password" },
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        })}
                    />
                    {errors.confirmPassword && (
                        <span className="text-xs text-red absolute inset-11 left-2  font-bold">
                            {errors.confirmPassword.message}
                        </span>
                    )}
                </div>

                <button
                    className="bg-lightGray text-white py-2 rounded-lg"
                    type="submit"
                    disabled={disabled}
                >
                    {disabled ? "Loading...":"Sign Up "}
                </button>
            </form>
        </>
    );
} 