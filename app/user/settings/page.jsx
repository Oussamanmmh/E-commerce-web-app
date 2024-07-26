"use client"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore , collection, doc, setDoc } from "firebase/firestore"
import { auth } from "@/app/firebase";


import { useUser } from "@/app/userProvider"

export default function Settings(){
            const [disabled , setDisabled] = useState(false)
            const{register , handleSubmit , watch ,formState:{errors}}= useForm()
            const[error , setError] = useState(null)
            const firestore = getFirestore()
            const user = useUser()
    return(
        
        <>
        <section>
                <div className="rounded-full size-20 bg-lightGray ">

                </div>
                <div>
                     <input placeholder="reset password " name="password" className="outline-none rounded-lg bg-lightGray py-2 px-3 placeholder:text-xs placeholder:text-darkGray"></input>
                     
                      
                </div>
                <div>
                     <input placeholder="username " defaultValue={user ? user.username:"loading"}  name="password" className="outline-none rounded-lg bg-lightGray py-2 px-3 placeholder:text-xs placeholder:text-darkGray"></input>
                     
                </div>
        </section>
           
        </>
    )



}