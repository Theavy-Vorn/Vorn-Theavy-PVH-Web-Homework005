export const CartoonService = async() =>{
    const res =await fetch("https://nextjs-homework005.vercel.app/api/cartoon");
    const data =await res.json();
    return data;
}