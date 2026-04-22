import Image from "next/image";

export default function ThingsHappen() {
  return (
    <div className="w-full bg-white px-[100px] pb-[100px]">
      <div className="relative mx-auto flex w-full overflow-visible rounded-[45px] bg-dif-white px-[60px] py-[60px]">
        <div className="flex max-w-[500px] flex-col justify-center gap-[26px]">
          <h2 className="text-[30px] leading-[38px] font-medium text-black">
            Let&apos;s make things happen
          </h2>

          <p className="text-[18px] leading-[1.3] font-normal text-black">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <button className="w-fit rounded-[14px] bg-dif-black px-[35px] py-[20px] text-[20px] leading-[28px] font-normal text-white transition-colors duration-300 hover:bg-green hover:text-black">
            Get your free proposal
          </button>
        </div>

        <Image
          src="/ThingsHappen.svg"
          alt="Decorative illustration"
          width={360}
          height={395}
          className="pointer-events-none absolute right-[90px] top-1/2 -translate-y-1/2 translate-x-[16px]"
        />
      </div>
    </div>
  );
}
