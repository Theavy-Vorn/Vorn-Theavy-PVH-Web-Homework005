import React from 'react';
import { Card, CardFooter, Image, Button, CardBody } from "@heroui/react";

const CardAllBook = ({ data }) => {
  return (
    <div className='flex flex-evently'> 
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              alt="Book Image"
              className="object-cover"
              src={data.image}
              width={400}
              height={400}  
              
            />  
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p>{data.book_title}</p>
              <Button>READ FULL ARTICLE</Button>
            </CardFooter>
            
          </Card>
      <div>
          
      </div>
    
    </div>
  );
};

export default CardAllBook;
