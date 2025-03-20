
import { categoryService } from "@/services/categoryService";
import Filture from "./FiltureBook";
//take it to in layout
export default async function CategoryPage() {
  const category = await categoryService();
  return (
    <div className="grid gap-6  grid-cols-3  p-4 w-full ">
      <select
                id="currency"
                name="currency"
                aria-label="Currency"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
      {category.payload.map((item) => (
       <Filture key={item.id} data={item}/>

      ))}
       </select>
    </div>
  );
}

categoryService