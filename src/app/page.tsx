import Layout from "@/Components/Layout";
import HeroSection from "@/Sections/HeroSection";
import SearchBar from "@/Components/SearchBar";
import MainScreenSection from "@/Sections/MainSection";
import Carousel from "@/Components/Carousel";
import { sampleData } from "@/Constants/MockData";
import ProductActions from "@/Sections/ProductActions";
import ProductIntro from "@/Sections/ProductIntro";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SearchBar />
      <MainScreenSection>
        <ProductIntro />
        <Carousel data={sampleData} />
        <ProductActions />
      </MainScreenSection>
    </Layout>
  );
}
