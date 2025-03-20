export const getAllBook = async() =>{
    const res =await fetch("https://nextjs-homework005.vercel.app/api/book");
    const data =await res.json();
    return data;
}