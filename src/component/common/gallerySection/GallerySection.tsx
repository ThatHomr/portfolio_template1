import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import styled from "styled-components";
import { galleryCardList } from "../galleryCard/galleryCardDataInterface";
import GalleryCard from "../galleryCard/GalleryCard";

export interface GallerySectionProps {
  dataList: galleryCardList;
}

interface ContainerProps {
  $blackColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  width: -webkit-fill-available;
  padding: 42px 24px;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  .titleP {
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
  }
  .cardSectionBox {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
  }
`;

const GallerySection: React.FC<GallerySectionProps> = ({ dataList }) => {
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );

  return (
    <Container $blackColorRGBA={blackColorRGBA}>
      <p className="titleP">Latest work</p>
      <div className="cardSectionBox">
        {dataList &&
          dataList.map((item, idx) => {
            return (
              <GalleryCard
                key={`galleryCard-${idx}`}
                imgData={item?.imgData}
                title={item?.title}
                content={item?.content}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default GallerySection;
