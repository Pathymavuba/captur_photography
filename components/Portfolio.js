import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-16">
      <h1  className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-1 md:col-span-3 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
            <Image 
            src="https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="/"
            width="217"
            height="215"
            layout="responsive"
            objectFit="cover"/>
        </div>
        <div className="w-full h-full">
            <Image 
            src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
            width="217"
            height="215"
            layout="responsive"
            objectFit="cover"/>
        </div>
        <div className="w-full h-full">
            <Image 
            src="https://images.unsplash.com/photo-1600660792241-240f01455c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
            width="217"
            height="215"
            layout="responsive"
            objectFit="cover"/>
        </div>
        <div className="w-full h-full">
            <Image 
            src="https://images.unsplash.com/photo-1490971774356-7fac993cc438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
            width="217"
            height="215"
            layout="responsive"
            objectFit="cover"/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
