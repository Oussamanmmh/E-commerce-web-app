
import FormSingup from "./formsingup";
 export const metadata = {
    title: "Sing Up",
};

export default function Singup(){
   
    return(
        <div className="flex justify-center items-center h-screen w-full text-white ">
            <div className="bg-darkGray p-10 rounded-3xl shadow-2xl w-[500px] ">
                <h1 className="text-2xl font-bold text-center" >Create account</h1>   
                <FormSingup/>         
                <hr className="my-5"/>
                <p className="text-sm text-gray-400 text-center">Or continue with ?</p>
                <div className="flex justify-center gap-5">
                    <button className="bg-blue-700 text-white py-2 rounded-lg">Facebook</button>
                    <button className="bg-red-700 text-white py-2 rounded-lg">
                       
                       google
                        
                        </button>
                </div>
                <p className="text-sm text-gray-400 text-center mt-5">Already have an account ? <a className="text-green-500" href="/login">Sign In</a></p>  
            </div>
        </div>
    )
}