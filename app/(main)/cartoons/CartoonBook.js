import React from 'react';
import { Card, CardFooter, Image, Button } from "@heroui/react";

const CartoonBook = ({ data }) => {
  return (
   
     <Card isFooterBlurred className="border-none" radius="lg" shadow="lg">
      <Image
        alt={data.book_title}
        className="object-cover"
        src={data.image} 
       
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-[#0B3954] text-2xl font-bold">The Hidden Treasure</p>
       
      </CardFooter>
    </Card>
  );
};

export default CartoonBook;
