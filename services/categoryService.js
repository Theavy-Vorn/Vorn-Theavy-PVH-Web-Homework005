export const categoryService = async() =>{
    const res =await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre");
    const data = await res.json();
    console.log(data);
    
    return data;
}