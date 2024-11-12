import { StaticImageData } from "next/image";

export interface galleryCardDataInterface {
  imgData: StaticImageData;
  title: string;
  content: string;
}

export type galleryCardList = galleryCardDataInterface[];
