"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-36 px-4">
      <div className="carousel w-full rounded-xl shadow-lg overflow-hidden">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="https://picsum.photos/1200/500?random=1"
            alt="Slide 1"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to My Blogs</h2>
            <p className="max-w-xl mb-6">
              Explore insightful blogs, learn new skills, and stay inspired with fresh ideas.
            </p>
            <Button size="lg" asChild>
              <Link href="/blogs">Explore Blogs</Link>
            </Button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="https://picsum.photos/1200/500?random=2"
            alt="Slide 2"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey Through Projects</h2>
            <p className="max-w-xl mb-6">
              Contribute your thoughts, experiences, and skills to help others grow.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="https://picsum.photos/1200/500?random=3"
            alt="Slide 3"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Person Behind the Code</h2>
            <p className="max-w-xl mb-6">
              I’m a curious mind with a passion for building and learning.
              Here’s the journey that shaped who I am

            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
