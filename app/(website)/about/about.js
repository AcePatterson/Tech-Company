import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
          <Image
            src={"/post/snake1.jpg"}
            alt="Thumbnail"
            width={500}
            height={300}
            sizes="(max-width: 320px) 100vw, 320px"
            className="size-full object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
          <Image
            src={"/post/snake3.jpg"}
            alt="Thumbnail"
            width={500}
            height={300}
            sizes="(max-width: 320px) 100vw, 320px"
            className="size-full object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
          <Image
            src={"/post/snake2.jpg"}
            alt="Thumbnail"
            width={500}
            height={300}
            sizes="(max-width: 320px) 100vw, 320px"
            className="size-full object-cover"
          />
        </div>
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          At Tech Innovate, we pride ourselves on being a trusted
          partner for businesses seeking to harness the power of
          Information Technology to enhance their operations and
          achieve their strategic goals. With a team of experienced IT
          professionals and a proven track record of success, we are
          dedicated to delivering tailored solutions that meet your
          unique needs and drive business growth.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
