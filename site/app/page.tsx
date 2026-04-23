import Hero from "@/components/Hero";
import ArticleSection from "@/components/ArticleSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-hidden bg-bg-base">
      <Hero />
      <ArticleSection />
      <Footer />
    </main>
  );
}
