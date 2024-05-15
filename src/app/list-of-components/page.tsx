import SiteBanner from "@/components/banner/site-banner";
import { DocsButton } from "@/components/buttons";
import { H3 } from "@/components/typography";

export default function ListOfComponents() {
  return (
    <main className="grid grid-cols grid-rows-12 gap-4">
        <H3 className="text-white">MongoDB Site Banner</H3>
        <SiteBanner />
        <div className="w-50">
          <H3 className="text-white">MongoDB Button</H3>
          <DocsButton baseFontSize={16} text="Hello" />
        </div>
      </main>
  );
}
