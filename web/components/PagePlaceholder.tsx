import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Body } from "@/components/ui/Body";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";

type PagePlaceholderProps = {
  title: string;
  description: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="bg-[#F6F7FB]">
      <Navbar />
      <SectionWrapper>
        <div className="mx-auto max-w-[900px] px-4 text-center sm:px-6 lg:px-8">
          <Heading as="h1">{title}</Heading>
          <Body className="mx-auto mt-4 max-w-2xl">{description}</Body>
        </div>
      </SectionWrapper>
      <Footer />
    </div>
  );
}
