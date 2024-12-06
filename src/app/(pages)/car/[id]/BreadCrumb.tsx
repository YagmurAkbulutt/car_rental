import { Car } from "@/app/types";
import Link from "next/link";


const BreadCrumb = ({car}: {car :Car}) => {
  return (
    <div>
      <Link href={"/home"} className="text-blue-500">Anasayfa</Link>{" "}/ <span>Arabalar</span> / <span>{car.make} {car.model}</span>
    </div>
  );
};

export default BreadCrumb;