import Image from "next/image";

type CardProps = {
  title: string;
  image: string;
  bgColor: "green" | "dif-white" | "dif-black";
  titleBg: "green" | "white";
  iconVariant: string;
};

export default function Card({
  title,
  image,
  bgColor = "dif-white",
  titleBg = "green",
  iconVariant,
}: CardProps) {
  const bgMap = {
    green: "bg-green",
    "dif-white": "bg-dif-white",
    "dif-black": "bg-dif-black text-white",
  };

  const titleBgMap = {
    green: "bg-green text-black",
    white: "bg-white text-black",
  };

  const textColor = bgColor === "dif-black" ? "text-white" : "text-black";

  return (
    <div
      className={`w-[600px] h-[310px] rounded-[45px] border border-black shadow-[0px_5px_0px_0px_#191A23] p-[50px] flex justify-between ${bgMap[bgColor]}`}
    >
      <div className="flex flex-col justify-between">
        <h3 className="text-[30px] max-w-[231px] font-medium leading-[1.4]">
          <span
            className={`${titleBgMap[titleBg]} text-black px-[7px] py-[2px] rounded-[8px] [box-decoration-break:clone]`}
          >
            {title}
          </span>
        </h3>
        <div className="flex items-center gap-[15px] cursor-pointer">
          <Image src={iconVariant} alt="Icon" width={41} height={41} />

          <span
            className={`text-[20px] leading-[28px] font-normal ${textColor} hover:font-bold`}
          >
            Learn more
          </span>
        </div>
      </div>

      <Image src={image} alt={title} width={210} height={170} />
    </div>
  );
}
