import Loginpage from "./(authentication)/login/page";
import EventSection from "./_components/homepage/eventsection";
import ListProduits from "./_components/homepage/listproduis";
import NavBar from "./_components/homepage/navbar";
import SideBar from "./_components/homepage/sidebar";


export default function Home() {
  return (
    <main className="m-4">
     <NavBar/>
     <div className="flex">
     <SideBar/>
     <div className="flex flex-col overflow-hidden  ">
      <EventSection/>
      <ListProduits/>

     </div>


     </div>

     
     
    </main>
  );
}
