import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default: "Tech Innovate",
      template: "%s | Tech Innovate"
    },
    description:
      "Tech Innovate - Harnessing IT for business success.",
    keywords: ["Next.js", "Tailwind CSS"],
    authors: [{ name: "abc" }],
    // openGraph: {
    //   images: [
    //     {
    //       url: "/img/_.jpg",
    //       width: 800,
    //       height: 600
    //     }
    //   ]
    // },
    // twitter: {
    //   title: "Tech Innovate Template",
    //   card: "summary_large_image"
    // },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  return (
    <>
      <Navbar />

      <div>{children}</div>

      <Footer />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
