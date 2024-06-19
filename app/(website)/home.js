import Link from "next/link";
import Container from "@/components/container";
import Post from "@/components/post";

export default function Home() {
  return (
    <>
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          <Post
            aspect={
              "Architectural Engineering Wonders of the modern era for your Inspiration"
            }
            imagePath={"/post/Lafleur1.jpg"}
            PostedDate={"October 21, 2022"}
            author={"Mario Sanchez"}
          />
          <Post
            aspect={
              "Architectural Engineering Wonders of the modern era for your Inspiration"
            }
            imagePath={"/post/Lafleur1.jpg"}
            PostedDate={"October 21, 2022"}
            author={"Mario Sanchez"}
          />
          <Post
            aspect={
              "Architectural Engineering Wonders of the modern era for your Inspiration"
            }
            imagePath={"/post/Lafleur1.jpg"}
            PostedDate={"October 21, 2022"}
            author={"abc"}
          />
          <Post
            aspect={
              "Architectural Engineering Wonders of the modern era for your Inspiration"
            }
            imagePath={"/post/Lafleur1.jpg"}
            PostedDate={"October 21, 2022"}
            author={"abc"}
          />
          <Post
            aspect={
              "Architectural Engineering Wonders of the modern era for your Inspiration"
            }
            imagePath={"/post/Lafleur1.jpg"}
            PostedDate={"October 21, 2022"}
            author={"abc"}
          />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/archive"
            className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
            <span>View all Posts</span>
          </Link>
        </div>
      </Container>
    </>
  );
}
