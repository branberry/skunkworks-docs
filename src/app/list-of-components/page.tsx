import SiteBanner from "@/components/banner/site-banner";
import { DocsButton } from "@/components/buttons";
import RootLayout from "../layout";


export default function ListOfComponents() {
  return (
    
      <RootLayout>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <SiteBanner />
          <DocsButton text="Hello" />
        </main>
      </RootLayout>

  );
}
