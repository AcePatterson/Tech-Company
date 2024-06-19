import Post from "@/components/post";

export default async function Archive() {
  return (
    <>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
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
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
