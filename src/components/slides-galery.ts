import { GaleryImage } from "@templates/galery";
import { SERVER_HOST } from "../../consts";

type slideType = {
  src: string;
  height: number;
  width: number;
  srcSet: srcImage[];
};

type srcImage = {
  src: string;
  height: number;
  width: number;
};

export const slidesGalery = (images: GaleryImage[]) => {
  const slides: slideType[] = [];

  images.map(image => {
    const srcSetImages: srcImage[] = [
      {
        src: image.formats.thumbnail.url,
        width: image.formats.thumbnail.width,
        height: image.formats.thumbnail.height,
      },
      {
        src: image.formats.small.url,
        width: image.formats.small.width,
        height: image.formats.small.height,
      },
      {
        src: image.formats.medium.url,
        width: image.formats.medium.width,
        height: image.formats.medium.height,
      },
      {
        src: image.formats.large.url,
        width: image.formats.large.width,
        height: image.formats.large.height,
      },
    ];

    const i = {
      src: `${SERVER_HOST}${image.formats.thumbnail.url}`,
      width: image.formats.width,
      height: image.formats.height,
      srcSet: srcSetImages,
    };
    slides.push(i);
  });

  return slides;
};
