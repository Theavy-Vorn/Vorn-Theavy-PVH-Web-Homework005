import { getAllBook } from "@/services/bookService"
import CardAllBook from "./CardAllBook";


export default async function BookPage() {
    const books = await getAllBook();
    // console.log(books.payload)
    return (
        <div className="grid gap-6  grid-cols-2 ">
            {books.payload.map(
                (item, index) => (
                    <div key={item.id}>
                        <CardAllBook data={item} />
                    </div>
                )
            )}
        </div>
    )
}