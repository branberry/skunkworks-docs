import { fetchBanner } from "@/utils/realm";
import SiteBanner from "./site-banner";

export async function BannerFetched() {
  const bannerContent = await fetchBanner("development");

  return <SiteBanner bannerContent={bannerContent} />;
}
