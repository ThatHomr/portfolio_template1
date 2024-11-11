import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

export interface GalleryCard2Props {
  imgData: StaticImageData;
  title: string;
  content: string;
}

interface ContainerProps {
  $grayColorRGBA: string;
  $blackColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: ${({ $grayColorRGBA }) => $grayColorRGBA};
  .img {
    align-self: stretch;
  }
  .titleBox {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .titleP {
    width: -webkit-fill-available;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
  }
  .contentP {
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
  }
`;

const GalleryCard2: React.FC<GalleryCard2Props> = ({
  imgData,
  title,
  content,
}) => {
  const grayColorRGBA: string = hexToRgba(
    ColorCode.Grey.hex,
    ColorCode.Grey.opacity
  );
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );

  return (
    <Container $grayColorRGBA={grayColorRGBA} $blackColorRGBA={blackColorRGBA}>
      <Image
        src={imgData.src}
        alt={`gallery2_img`}
        height={330}
        className="img"
      />
      <div className="titleBox">
        <p className="titleP">{title}</p>
        <p className="contentP">{content}</p>
      </div>
    </Container>
  );
};

export default GalleryCard2;
