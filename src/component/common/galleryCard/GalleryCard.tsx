import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

export interface GalleryCardProps {
  imgData: StaticImageData;
  title: string;
  content: string;
}

interface ContainerProps {
  $blackColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  min-width: 320px;
  width: 320px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;

  .titleBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }

  .title {
    align-self: stretch;
    font-size: 20px;
    font-weight: 600;
    font-style: normal;
    line-height: 30px;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
  }

  .content {
    align-self: stretch;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
  }

  .imgBox {
    position: relative;
    width: 100%;
    height: 330px;
    align-self: stretch;
  }
`;

const GalleryCard: React.FC<GalleryCardProps> = ({
  imgData,
  title,
  content,
}) => {
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );

  return (
    <Container $blackColorRGBA={blackColorRGBA}>
      <div className="imgBox">
        <Image src={imgData.src} alt="imgData" fill />
      </div>
      <div className="titleBox">
        <p className="title">{title}</p>
        <p className="content">{content}</p>
      </div>
    </Container>
  );
};

export default GalleryCard;
