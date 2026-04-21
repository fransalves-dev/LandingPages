import SectionHeader from "@/components/Section-header";

export default function Services() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white py-[100px] gap-[85px]">
        <SectionHeader
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
          titleBg="green"
        />
    </div>
  );
}
