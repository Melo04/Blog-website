import Image from "next/image";

export default function error() {
  return (
    <div className="text-center py-10">
        <Image src={"/images/error.jpg"} width={400} height={400} alt=""></Image>
    </div>
  )
}
