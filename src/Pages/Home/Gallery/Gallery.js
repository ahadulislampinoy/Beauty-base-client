import React from "react";
import img1 from "../../../assets/gallery/img1.webp";
import img10 from "../../../assets/gallery/img10.jpg";
import img2 from "../../../assets/gallery/img2.jpeg";
import img3 from "../../../assets/gallery/img3.jpeg";
import img4 from "../../../assets/gallery/img4.jpg";
import img5 from "../../../assets/gallery/img5.webp";
import img6 from "../../../assets/gallery/img6.jpg";
import img7 from "../../../assets/gallery/img7.jpeg";
import img8 from "../../../assets/gallery/img8.jpeg";
import img9 from "../../../assets/gallery/img9.jpg";

const Gallery = () => {
  return (
    <div>
      <section className="py-6 text-pink-400">
        <h1 className="text-4xl mt-8 mb-1 px-4 text-center font-semibold drop-shadow-lg">
          Beauty's By Beauty Base
        </h1>
        <div className="grid grid-cols-2 gap-4 p-6 sm:p-10 mx-auto md:grid-cols-4">
          <img
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-pink-500 group-hover:bg-rose-400/20 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-pink-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-pink-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-pink-500 aspect-square"
            src={img4}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-pink-500 aspect-square"
            src={img6}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-pink-500 aspect-square"
            src={img5}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-pink-500 aspect-square"
            src={img7}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-pink-500 aspect-square"
            src={img8}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-pink-500 aspect-square"
            src={img9}
          />
          <img
            src={img10}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-pink-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
