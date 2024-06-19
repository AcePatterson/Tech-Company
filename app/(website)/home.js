import Link from "next/link";
import Container from "@/components/container";
import Post from "@/components/post";

export default function Home() {
  return (
    <>
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          <Post
            aspect={"Armory is web3 community to get items!"}
            imagePath={"/post/armory.png"}
            PostedDate={"October 21, 2022"}
            author={"Mario Sanchez"}
          />
          <Post
            aspect={
              "Amino Rewards is a feature within the Amino app, a social networking healthy app for communities."
            }
            imagePath={"/post/aminorewards.png"}
            PostedDate={"October 21, 2022"}
            author={"Mario Sanchez"}
          />
          <Post
            aspect={
              "Ceras Health is a healthcare company that provides innovative solutions for managing chronic conditions."
            }
            imagePath={"/post/cerashealth.png"}
            PostedDate={"October 21, 2022"}
            author={"abc"}
          />
          <Post
            aspect={
              "Bloxmoon is an online gambling platform that offers a wide range of casino games, including slots, table games, live dealer games, and more."
            }
            imagePath={"/post/bloxmoon.png"}
            PostedDate={"October 21, 2022"}
            author={"abc"}
          />
          <Post
            aspect={
              "CBET Casino is an online gambling platform that offers a wide range of casino games, including slots, table games, live dealer games, and more."
            }
            imagePath={"/post/cbet.png"}
            PostedDate={"October 21, 2022"}
            author={"abc"}
          />
          <Post
            aspect={
              "AI-powered location technology for automakers, mobile app developers, and logistics services."
            }
            imagePath={"/post/mapbox.png"}
            PostedDate={"October 21, 2022"}
            author={"abc"}
          />
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
