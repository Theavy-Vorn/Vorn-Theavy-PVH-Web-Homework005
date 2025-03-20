import React from "react";
import { sidebarList } from "../../data/sidebarList";
import { Link } from "@heroui/react";

export default function SidebarComponent() {
  return (
    <div className="fixed top-0 left-0 p-5 h-screen w-[450px] bg-white shadow-xl ">
      {/* logo */}
      <div className="gap-3 items-center p-5 m-auto">
        <div>
          <img
            src="https://i.pinimg.com/736x/f2/41/8e/f2418eaa685c5443b95bb0312dbffd7a.jpg"
            width={150}
            height={150}
            className="rounded-full m-auto"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#0B3954]">VyvySt218</h2>
          <h3 className="text-1xl font-semibold text-[#087E8B]">
            theavyvorn8t8@gmail.com
          </h3>
        </div>
      </div>

      {/* sidebar list */}
      <div className="p-4 w-full flex flex-col justify-between min-h-10/12 m-auto">
        <div className="space-y-1 flex flex-col">
          {sidebarList.map((option) => (
            <Link href={option.path} key={option.id}>
              <div className="block">
                <div
                  className={`${
                    option.id === 1 ? "bg-light-gray" : ""
                  } flex items-start gap-3 py-2 px-5 rounded-xl cursor-pointer hover:bg-gray-200`}
                >
                  <option.icon className="w-6 h-6 text-[#C81D25]" />
                  <p className="text-lg text-[#0B3954]">{option.label}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
