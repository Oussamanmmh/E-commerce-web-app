import {storage} from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore , collection , addDoc ,doc } from "firebase/firestore";

const Upload = async ({imgFile, brand, productName, price, description, selectedSizes}) => {
    const db= getFirestore();
    const storageRef = ref(storage, "products");
    const productRef = collection(db, "products");
    const urls = [];

const uploadPromises =   imgFile.map(async (file)=>{
        const imageRef = ref(storageRef, file.name);
         return uploadBytesResumable(imageRef, file).then((snapshot)=>{
            console.log("Uploaded", snapshot.totalBytes, "bytes");
            console.log("File metadata", snapshot.metadata);
          return  getDownloadURL(imageRef).then((url)=>{
                console.log("File available at", url);
                urls.push(url);
                 
            });

        });
    });

    
    await Promise.all(uploadPromises);
    console.log(uploadPromises)

    try {
        const productDocRef = await addDoc(productRef, {
            brand: brand,
            productName: productName,
            price: price,
            description: description,
            images: urls,
            sizes: selectedSizes,
      
            createdAt: new Date(),
        });
       return productDocRef.id
    } catch (error) {
        console.error("Error adding document: ", error);
        throw new Error(error)
    };


};

export default Upload;