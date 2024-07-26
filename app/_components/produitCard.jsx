export default function ProduitCard ({product}){
    return(
        <>
        <div className="rounded-3xl bg-darkGray flex flex-col  h-full w-1/5 overflow-hidden p-2 text-white">
            <img src={product.images[0]} alt="product" className="object-cover h-[300px] rounded-3xl "/>
            <div className="flex justify-between">
              <h1 className="text-lg font-bold">{product.productName}</h1>
              <h1 className="text-lg font-bold font-serif">{product.price} $</h1>

            </div>
            <h1 className="font-semibold">{product.brand}</h1>
              <div className="overflow-clip  ">
              <h1 className="text-xs text-lightGray">{product.description.slice(0,50)}</h1>

              </div>

        </div>

        </>
    )
}