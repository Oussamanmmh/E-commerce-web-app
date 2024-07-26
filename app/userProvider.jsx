  "use client"
  import { createContext , useContext, useEffect, useState} from "react";
  import { auth } from "./firebase";
  import { getFirestore , collection , getDoc, doc, Firestore } from "firebase/firestore";
  const UserContext = createContext()
 
  export default function UserProvider({children}){
    const db = getFirestore()
       const [user , setUser] = useState(null)
       useEffect  (()=>{
            const unsubscribe = auth.onAuthStateChanged(async(user)=>{
                if(user){
                  const userRef = doc(db, "users", user.uid)
                  const userDoc = await getDoc(userRef); 
                  if (userDoc.exists()) {
                    setUser({ id: userDoc.id, ...userDoc.data() }); // Set the user state
                    
                  } else {
                    console.log("No such document!");
                  }
                  
                 
                  
                }
                else{
                  console.log("there ")
                }
                console.log(user)
          }

          )
        
          return unsubscribe
       }


       ,[])
        return(
            <UserContext.Provider value={user}>
                {children}
            </UserContext.Provider>
        )}

       
export const useUser = () =>{ 
    return useContext(UserContext)
  }
    
