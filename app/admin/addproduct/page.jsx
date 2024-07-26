"use client"
import { useState } from "react";
import {useRouter } from "next/navigation";
import Upload from "./upload";
import { ThreeDots } from "react-loader-spinner";
export default function AddProductions() {
    const [images, setImages] = useState([]);
    const [brand, setBrand] = useState("");
    const [selectedSizes ,setSelectedSizes] = useState([])
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imgFile, setImgFile] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [imageToDelete, setImageToDelete] = useState(null);
    const Router = useRouter()

    const addProduct= async()=>{
        setLoading(true)
        try{
            await Upload({imgFile , brand ,productName ,price ,description , selectedSizes})
            Router.push("/")
        }
        catch(error){
            console.log(error)
        }
        setLoading(false)

    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImgFile([...imgFile, file]);
        setImages([...images, URL.createObjectURL(file)]);
    };

    const handleImageClick = (index) => {
        setImageToDelete(index);
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        setImages(images.filter((_, index) => index !== imageToDelete));
        setImgFile(imgFile.filter((_, index) => index !== imageToDelete));
        setShowModal(false);
        setImageToDelete(null);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
        setImageToDelete(null);
    };
    const handleSizeChange = (size) => {
        setSelectedSizes((prevSelectedSizes) =>
            prevSelectedSizes.includes(size)
                ? prevSelectedSizes.filter((s) => s !== size)
                : [...prevSelectedSizes, size]
        );
    };
    

    return (
        <>
            <main className="m-4 flex flex-col gap-5 justify-center text-white ">
                {/* add photos of the product */}
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex justify-between gap-8">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index}`} className="w-[200px] h-[300px] rounded-2xl object-cover cursor-pointer"
                              onClick={() => handleImageClick(index)}
                             />
                        ))}
                        {
                            imgFile.length < 4 && (
                                <div className="bg-darkGray w-[200px] h-[300px] rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>

                                </div>
                            )
                        }
                    </div>
                    <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                        disabled={imgFile.length >= 4 }
                    />
                    <label htmlFor="file" className="w-32 bg-darkGray rounded-lg py-2 px-2 cursor-pointer">
                        Upload image
                    </label>
                </div>
                <div className="flex gap-8 mt-4  justify-center">
                        <select className="rounded-full outline-none py-2 px-1 bg-darkGray" onChange={(e)=>setBrand(e.target.value)}>
                                    <option  value="" disabled>Select a brand </option>
                                    <option   value="nike">Nike</option>
                                    <option value="adidas">Adidas</option>
                                    <option value="lacoste">Lacoste</option>
                                    <option value="Rebook">Rebook</option>
                                    <option value="puma">Puma</option>
                                    <option value="zara">Zara</option>
                        </select>
                    <input type="text" placeholder="Enter product name" className="rounded-full outline-none py-2 px-2 bg-darkGray" onChange={(e)=>setProductName(e.target.value)} />
                    <div className="relative">
                            <input type="number" min={0} placeholder="Enter price" className="rounded-full outline-none py-2 px-2 bg-darkGray" onChange={(e)=>{setPrice(e.target.value)}}/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 absolute right-6 top-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                    </div>
                </div>
                {/* ajouter les couleurs disponibles */}
                <div className="flex gap-10 text-white">
                    <span className="font-bold text-lg">Size available : </span>
                    {["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL", "6XL"].map((size, index) => (
                        <label key={index} className="inline-flex items-center" onChange={()=>handleSizeChange(size)}>
                            <input type="checkbox" className="form-checkbox"  />
                            <span className="ml-2">{size}</span>
                        </label>
                    ))}
                </div>
                <div className="flex justify-center">
                    <textarea placeholder="Enter product description" className="rounded-lg outline-none py-2 px-2 bg-darkGray w-[650px] h-32 resize-none" onChange={e=>setDescription(e.target.value)}></textarea>
                </div>
                <div className="flex justify-center  font-bold">
                    <button className="rounded-2xl bg-green-500 px-3 py-2 w-32  "  disabled={loading} 
                    onClick={addProduct}>
                       {loading ? "adding ...":"add"}
                    </button>
                </div>
            </main>

            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="mb-4">Confirm Delete</h2>
                        <p>Are you sure you want to delete this image?</p>
                        <div className="flex justify-end gap-4 mt-4">
                            <button onClick={handleConfirmDelete} className=" bg-red text-white px-4 py-2 rounded">
                                Delete
                            </button>
                            <button onClick={handleCancelDelete} className="bg-gray-500 text-white px-4 py-2 rounded">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
                {
                    loading && (
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
                    )
                }
     
        </>
    );
}
