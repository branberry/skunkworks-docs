import { BannerFetched } from "@/components/banner/banner-fetched";
import { DocsButton } from "@/components/buttons";
import { H3 } from "@/components/typography";

export default function ListOfComponents() {
  return (
    <>
      <H3 className="text-white">MongoDB Site Banner</H3>
      <BannerFetched />
      <div className="w-50">
        <H3 className="text-white">MongoDB Button</H3>
        <DocsButton baseFontSize={16} text="Hello" />
      </div>
    </>
  );
}
