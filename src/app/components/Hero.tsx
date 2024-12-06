import Image from "next/image";
import { models } from "../constants";

const Hero = () => {
  return (
    <div className="h-[80vh] py-5 px-5 grid place-items-center bg-[linear-gradient(#00000084,#00000084),url('./assets/car-bg.jpg')] bg-center bg-cover text-white">
      <div className="text-center flex flex-col gap-8">
        <p>Yakınındaki kiralık araşları keşfet</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Kendin İçin Mükemmel Aracı Bul
        </h1>

        <p className="">Modelleri Keşfet</p>
        <div className="flex gap-4 justify-center flex-wrap">
          {models.map((item) => (
            <button className="px-3 py-2 rounded-full bg-gray-100/25 transition hover:bg-gray-500 flex gap-2 items-center">
              <Image src={item.icon} alt="icon"/>
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
