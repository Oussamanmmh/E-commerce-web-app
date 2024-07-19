import ProduitCard from "../produitCard"

const ListProduits = () => {
    return (
        <>
            <div className="flex gap-5 ml-4 w-full overflow-x-scroll pb-5 listproduits">
                <ProduitCard />
                <ProduitCard />
                <ProduitCard />
                <ProduitCard />
                <ProduitCard />
                <ProduitCard />
                <ProduitCard />
                <ProduitCard />
                <ProduitCard />
                <ProduitCard />
                <ProduitCard />
                <ProduitCard />
            </div>
        </>
    );
}

export default ListProduits;