import { CartoonService } from "@/services/cartoonService";
import CartoonBook from "./CartoonBook";

export default async function CartoonPage() {
  const cartoon = await CartoonService();
  

  return (
    <div className="grid gap-6  grid-cols-3">
      {cartoon.payload.map((item) => (
        <CartoonBook key={item.id} data={item} />
      ))}
    </div>
  );
}
