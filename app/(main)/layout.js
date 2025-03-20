import HomeButtonComponent from "@/components/botton-component";
import CardComponent from "@/components/card-component";
import HrComponent from "@/components/line-component";
import SearchComponent from "@/components/searchBar-component";
import SidebarComponent from "@/components/sidebar/navbar";
import { Button } from "@heroui/react";
import { Home } from "lucide-react";
import Filture from "./filture/FiltureBook";
import CategoryPage from "./filture/page";


export default function HomeLayout({ children }) {

  return (
    <>
      <div className="grid grid-cols-12 bg-pink-40  h-[100vh] gap-10">
        <div className="col-span-3  h-full">
          <SidebarComponent />
        </div>
        <div className="col-span-9  min-h-screen flex flex-col">
          <SearchComponent />
          <div className="flex justify- items-center  p-4">
            <div>
              <HomeButtonComponent />
            </div>
            <div>
              <CategoryPage />
            </div>
            <div>
            </div>
          </div>
          <HrComponent />
          <div className="m-[30px]  rounded-3xl drop-shadow-lg grid grid-cols-1 p-5 gap-5">

            {/* <div>
             
            </div>
            <div className="bg-red-800 flex justify-around items-center  w-[80%] h-[600px] mx-auto">
              <CardComponent />
              <CardComponent />
            </div> */}
            {children}

          </div>
        </div>
      </div>
    </>
  )
}