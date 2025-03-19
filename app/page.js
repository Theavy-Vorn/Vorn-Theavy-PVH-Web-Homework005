import SidebarComponent from "@/components/sidebar/navbar";
import CardComponent from "../components/card";
import SearchComponent from "@/components/search";
import HomeButtonComponent from "@/components/home-button";
import HrComponent from "@/components/hr";

export default function Home() {
  return (
    <div className="grid grid-cols-12  bg-black h-[100vh]">
      <div className="col-span-3 bg-red-600 h-full">
        <SidebarComponent />
      </div>
        <div className="col-span-9 bg-blue-500 min-h-screen flex flex-col">
        <SearchComponent />
        <div className="m-[30px] bg-[#FFFFFFCC] rounded-3xl p-5 drop-shadow-lg">
          <div>
            <HomeButtonComponent />
            <HrComponent />
          </div>
          <div className="bg-red-800 flex justify-around items-center  w-[80%] h-[600px] mx-auto">
            <CardComponent />
            <CardComponent />
          </div>

        </div>
      </div>
     </div>
  
  );
}
