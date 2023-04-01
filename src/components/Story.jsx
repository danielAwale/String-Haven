import React from "react";
import Image from "../assets/story.jpg";

const Story = () => {
  return (
    <div className="mt-20 w-full relative">
      <div className="w-full h-full bg-black opacity-50 absolute"></div>
      <div className="absolute flex items-center w-full h-full justify-center flex-col">
        <p className="text-white text-[50px] italic mb-4">Learn About us</p>
        <p className="text-white text-[17px] italic font-semibold container mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          illo quas culpa deleniti laborum eligendi suscipit delectus, ullam
          voluptates quo exercitationem at. Eligendi veniam dolores animi
          voluptatum illum molestiae magni! Fugit amet doloribus suscipit quod
          debitis deleniti hic, ex quo, enim, labore iusto fugiat sit nam.
          Molestiae, cumque dolore eligendi ipsam est sit ad iste, eaque
          deserunt harum tempora assumenda. Odio nihil aperiam incidunt nulla
          ab, quos voluptatibus doloribus, tempore suscipit a necessitatibus
          ullam animi eum totam provident adipisci fugiat. Velit vitae nisi ab
          in excepturi distinctio itaque ratione unde. Corrupti neque saepe
          minima aliquid, aspernatur repellendus dignissimos quae, quasi
          consequuntur dolorum vero atque impedit tempore possimus laborum
          aperiam sit id rem eveniet itaque, earum distinctio. Cum modi laborum
          aliquid? Velit ad qui rem libero exercitationem dignissimos, tenetur,
          nihil et dicta odit in commodi expedita fuga doloremque. Consequatur
          fugiat ducimus a ut autem, modi, est nulla doloremque reprehenderit
          ipsa quia. Tenetur pariatur ducimus voluptatum, eveniet ratione alias
          deleniti, officia harum dolorem excepturi atque velit. Recusandae
          vitae itaque, atque, culpa eum facere error exercitationem enim maxime
          molestias est sit, similique mollitia. Atque nulla dolore deserunt
          ratione dolor. Perspiciatis necessitatibus deserunt quae adipisci
          provident quia reprehenderit blanditiis beatae, iure velit expedita,
          eius
        </p>
      </div>
      <img
        src={Image}
        alt=""
        className="lg:h-[700px] lg:w-full md:h-[500px] lg:object-cover"
      />
    </div>
  );
};

export default Story;
