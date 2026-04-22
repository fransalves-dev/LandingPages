type SectionHeaderProps = {
  title: string;
  description: string;
  titleBg?: "green" | "white";
};

export default function SectionHeader({
  title,
  description,
  titleBg = "green",
}: SectionHeaderProps) {
  const titleBgMap = {
    green: "bg-green text-black",
    white: "bg-white text-black",
  };

  return (
    <div className="w-full flex items-center gap-[40px]">
      <h2
        className={`text-[40px] leading-[100%] font-medium px-[7px] py-[4px] rounded-[7px] ${titleBgMap[titleBg]}`}
      >
        {title}
      </h2>
      <p className="text-[18px] leading-[100%] text-black font-normal max-w-[600px]">
        {description}
      </p>
    </div>
  );
}