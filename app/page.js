"use client"
import { useEffect , useState } from "react";
import EventSection from "./@eventProduits/page";
import SideBar from "./_components/homepage/sidebar";
import { auth } from "./firebase";


export default function Home() {
 
  const [user , setUser] = useState(null)
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user is logged in");
        setUser(user)

      } else {
        console.log("user is not logged in");
        
      }

      setLoading(false)
    });
   

  }
  , []);

  return (
  
      <main className="m-4">
     
      <div className="flex">
      <SideBar/>
      </div>
     </main>
    
    

   
  );
}
