import Image from "next/image";

type CardProps = {
  title: string;
  image: string;
  bgColor?: "green" | "dif-white" | "dif-black";
  titleBg?: "green" | "white";
  iconVariant?: "dark" | "light";
};

export default function Card({
  title,
  image,
  bgColor = "dif-white",
  titleBg = "green",
  iconVariant = "dark",
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

  const iconMap = {
    dark: "bg-black border-[3px] border-green text-white",
    light: "bg-white border-[3px] border-black text-black",
  };

  return (
    <div
      className={`w-[600px] h-[310px] rounded-[45px] border border-black shadow-[0px_5px_0px_0px_#191A23] p-[50px] flex justify-between ${bgMap[bgColor]}`}
    >
      <div className="flex flex-col justify-between">
        <h3
          className={`text-[20px] leading-[28px] font-normal px-[7px] py-[4px] rounded-[7px] inline-block ${titleBgMap[titleBg]}`}
        >
          {title}
        </h3>

        <div className="flex items-center gap-[15px] cursor-pointer">
          <div
            className={`w-[41px] h-[41px] flex items-center justify-center rounded-full ${iconMap[iconVariant]}`}
          >
            →
          </div>

          <span className="text-[20px] leading-[28px] font-normal">
            Learn more
          </span>
        </div>
      </div>

      <Image
        src={image}
        alt={title}
        width={210}
        height={170}
        className="object-contain"
      />
    </div>
  );
}