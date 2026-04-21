import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white py-[60px] gap-[70px]">
      <header className="w-full px-[100px] flex items-center justify-between">
        <Image src="/Logo.svg" alt="Logo" width={219} height={36} />
        <div className="flex gap-[40px] float-right items-center justify-center">
          <div className="flex gap-[40px] text-[20px] leading-[28px] font-normal text-black">
            <a
              href="#"
              className="hover:text-green transition-colors duration-300"
            >
              About us
            </a>
            <a
              href="#"
              className="hover:text-green transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-green transition-colors duration-300"
            >
              Use Cases
            </a>
            <a
              href="#"
              className="hover:text-green transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className=" hover:text-green transition-colors duration-300"
            >
              Blog
            </a>
          </div>
          <button className="px-[35px] py-[20px] gap-[10px] border-[1px] border-black text-black rounded-[14px] text-[20px] leading-[28px] font-normal cursor-pointer">
            Request a quote
          </button>
        </div>
      </header>
      <main className="w-full flex-1 flex px-[100px] items-center justify-between">
        <div className="flex flex-col gap-[35px] max-w-[531px]">
          <h1 className="text-[60px] leading-[72px] font-medium text-black">
            Navigating the digital landscape for success
          </h1>
          <p className="text-[20px] leading-[28px] font-normal text-black">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="px-[35px] py-[20px] gap-[10px] max-w-[264px] text-white rounded-[14px] bg-dif-black text-[20px] leading-[28px] font-normal cursor-pointer">
            Book a consultation
          </button>
        </div>
        <Image
          src="/Ilustration.svg"
          alt="Ilustration"
          width={600}
          height={515}
        />
      </main>
      <footer className="w-full px-[100px] flex items-center justify-between">
        <Image src="/Amazon.svg" alt="Amazon" width={125} height={48} className="grayscale" />
        <Image src="/Dribble.svg" alt="Dribbble" width={125} height={48} className="grayscale" />
        <Image src="/Hubspot.svg" alt="Hubspot" width={125} height={48} className="grayscale" />
        <Image src="/Notion.svg" alt="Notion" width={125} height={48} className="grayscale" />
        <Image src="/Netflix.svg" alt="Netflix" width={125} height={48} className="grayscale" />
        <Image src="/Zoom.svg" alt="Zoom" width={125} height={48} className="grayscale" />
      </footer>
    </div>
  );
}
