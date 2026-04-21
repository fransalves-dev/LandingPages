import SectionHeader from "@/components/Section-header";
import Card from "@/components/Service-card";

export default function Services() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white py-[100px] gap-[85px]">
        <SectionHeader
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
          titleBg="green"
        />
        <div className="grid grid-cols-2 gap-[40px] place-items-center">
          <Card title="Search engine optimization" image="/Card1.svg" bgColor="dif-white" titleBg="green" iconVariant="/IconDark.svg" />
           <Card title="Pay-per-click advertising" image="/Card2.svg" bgColor="green" titleBg="white" iconVariant="/IconDark.svg" />
           <Card title="Social Media Marketing" image="/Card3.svg" bgColor="dif-black" titleBg="white" iconVariant="/IconLight.svg" />
           <Card title="Email Marketing" image="/Card4.svg" bgColor="dif-white" titleBg="green" iconVariant="/IconDark.svg" />
           <Card title="Content Creation" image="/Card5.svg" bgColor="green" titleBg="white" iconVariant="/IconDark.svg" />
           <Card title="Analytics and Tracking" image="/Card6.svg" bgColor="dif-black" titleBg="green" iconVariant="/IconLight.svg" />
        </div>
    </div>
  );
}
