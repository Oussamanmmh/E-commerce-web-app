"use client"
import { ThreeDots } from "react-loader-spinner";

export default function LoadingProducts() {
    return(
    <>
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-10 bg-gray-50 ">
    <ThreeDots
    visible={true}
    height="80"
    width="80"
    color="#4fa94d"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
</div>
    </>
)}