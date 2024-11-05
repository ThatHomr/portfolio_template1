import { Button } from "@/component/button/Button";
import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import Image from "next/image";
import styled from "styled-components";
import headerSectionImage1 from "public/image/HeaderImage1.webp";

export interface HeaderSection1Props {
  onClick: () => void;
}

interface ContainerProps {
  $whiteColorRGBA: string;
  $blackColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  width: -webkit-fill-available;
  padding: 42px 24px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 42px 68px;
  flex-wrap: wrap;
  background: ${({ $whiteColorRGBA }) => $whiteColorRGBA};

  .headerContent {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 620px;
    align-items: flex-start;
    gap: 48px;
    flex: 1 0 0;
  }
  .titleBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
  }
  .title1 {
    align-self: stretch;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
  }
  .title2 {
    align-self: stretch;
    font-size: 68px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
  }
  .title3 {
    align-self: stretch;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
  .headerSection1Img {
    width: -webkit-fill-available;
    height: 360px;
    min-width: 320px;
    max-width: 480px;
    flex: 1 0 0;
  }
`;

export const HeaderSection1: React.FC<HeaderSection1Props> = ({ onClick }) => {
  const whiteColorRGBA: string = hexToRgba(
    ColorCode.White.hex,
    ColorCode.White.opacity
  );
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );

  return (
    <Container
      $whiteColorRGBA={whiteColorRGBA}
      $blackColorRGBA={blackColorRGBA}
    >
      <div className="headerContent">
        <div className="titleBox">
          <p className="title1">Branding | Image making</p>
          <p className="title2">Visual Designer</p>
          <p className="title3">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>
        <Button label="Contact" onClick={onClick} />
      </div>
      <Image
        src={headerSectionImage1.src}
        alt="headerSectionImage1"
        className="headerSection1Img"
      />
    </Container>
  );
};
