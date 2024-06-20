import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import CategoryLabel from "@/components/blog/category";
export default function Post({
  aspect,
  minimal,
  imagePath,
  author,
  fontSize,
  fontWeight,
  PostedDate,
  categories
}) {
  return (
    <>
      <div className="group flex cursor-pointer flex-col gap-10 md:grid-cols-3 ">
        <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
          <Image
            src={imagePath}
            alt={"Thumbnail"}
            className="size-full object-cover"
            width={500}
            height={100}
            sizes="(max-width: 768px) 30vw, 33vw"
          />
        </div>

        <div className={cx(minimal && "flex items-center")}>
          <CategoryLabel categories={categories} nomargin={minimal} />
          <div>
            <h2
              className={cx(
                fontSize === "large"
                  ? "text-2xl"
                  : minimal
                    ? "text-3xl"
                    : "text-lg",
                fontWeight === "normal"
                  ? "line-clamp-2 font-medium  tracking-normal text-black"
                  : "font-semibold leading-snug tracking-tight",
                "mt-2    dark:text-white"
              )}>
              <span
                className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-purple-800 dark:to-purple-900">
                {aspect}
              </span>
            </h2>

            {/* <div className="hidden">
              {post.excerpt && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                  <Link
                    href={`/post/${
                      pathPrefix ? `${pathPrefix}/` : ""
                    }${post.slug.current}`}>
                    {post.excerpt}
                  </Link>
                </p>
              )}
            </div> */}

            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <div className="relative h-5 w-5 flex-shrink-0">
                  <Image
                    src={imagePath}
                    alt={author}
                    className="rounded-full object-cover"
                    fill
                    sizes="20px"
                  />
                </div>
                <span className="truncate text-sm">{author}</span>
              </div>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                &bull;
              </span>
              <time className="truncate text-sm">{PostedDate}</time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
