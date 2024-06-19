import Post from "@/components/post";

export default async function Archive() {
  return (
    <>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
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
        <Post
          aspect={
            "Pickade is your destination for a modern Minecraft minigames experience."
          }
          imagePath={"/post/pickade.png"}
          PostedDate={"October 21, 2022"}
          author={"abc"}
        />
        <Post
          aspect={
            "A Raffle Famous  is an online platform where individuals can purchase tickets for a chance to win prizes."
          }
          imagePath={"/post/raffle.png"}
          PostedDate={"October 21, 2022"}
          author={"abc"}
        />
        <Post
          aspect={
            "Sportsblog is a platform where sports fans can write and share their thoughts, opinions, and analysis about various sports topics."
          }
          imagePath={"/post/sportsblog.png"}
          PostedDate={"October 21, 2022"}
          author={"abc"}
        />
      </div>
    </>
  );
}
