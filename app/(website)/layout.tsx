import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default: "Stablo - Blog Template for Next.js & Sanity CMS",
      template: "%s | Stablo"
    },
    description:
      "Stablo - popular open-source next.js and sanity blog template",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Surjith" }],
    openGraph: {
      images: [
        {
          url: "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: "Stablo Template",
      card: "summary_large_image"
    },
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
