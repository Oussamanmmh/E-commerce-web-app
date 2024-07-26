"use client"
import { useUser } from "../../../app/userProvider";

export default function Accountpage() {
    const user =  useUser()
    return (
        <>
        <main className="text-white flex flex-col gap-6">
            <div className="bg-darkGray rounded-full size-20 ml-20 ">

            </div>
            <div >
                <span className="span-account">User name :</span>
                <span> {user ? user.username : 'Loading...'}</span>
            </div>
            <div >
                <span className="span-account">Email :</span>
                <span >
                    {user ? user.email : 'Loading...'}
                </span>
                
            </div>
            <div >
                <span className="span-account">Total spend :</span>
                <span>{user ? user.monySpent  || 0 +" $" : 'loading'} </span>
            </div>


        </main>    
        </>
    )
}