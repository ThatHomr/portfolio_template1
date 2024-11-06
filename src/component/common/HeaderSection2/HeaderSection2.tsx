import { Button } from "@/component/button/Button";
import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import React from "react";
import styled from "styled-components";

export interface HeaderSection2Props {
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
  padding: 64px 24px;
  justify-content: center;
  align-items: center;
  gap: 86px;
  background: ${({ $whiteColorRGBA }) => $whiteColorRGBA};

  .frame1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 189px;
    align-self: stretch;
  }
  .arrow4 {
    width: 60px;
    height: 62px;
    stroke-width: 1.694px;
    stroke: ${({ $blackColorRGBA }) => $blackColorRGBA};
  }
  .Rectangle12 {
    width: 154px;
    height: 155px;
  }
  .textBox {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 460px;
    align-items: center;
    gap: 48px;
    flex: 1 0 0;
  }
  .text1 {
    align-self: stretch;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
  .text2 {
    align-self: stretch;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    text-align: center;
    font-size: 68px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .text3 {
    align-self: stretch;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
  .frame2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 197px;
    align-self: stretch;
  }
  .Rectangle14 {
    width: 154px;
    height: 154px;
  }
  .arrow3 {
    width: 57px;
    height: 59px;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

/**
 * HeaderSection2 component
 * @param param0 onClick 버튼 클릭 함수
 * @returns
 */
export const HeaderSection2: React.FC<HeaderSection2Props> = ({ onClick }) => {
  const whiteColorRGBA: string = hexToRgba(
    ColorCode.White.hex,
    ColorCode.White.opacity
  );
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );
  const redColorRGBA: string = hexToRgba(
    ColorCode.Red.hex,
    ColorCode.Red.opacity
  );
  const greenColorRGBA: string = hexToRgba(
    ColorCode.Green.hex,
    ColorCode.Green.opacity
  );

  return (
    <Container
      $whiteColorRGBA={whiteColorRGBA}
      $blackColorRGBA={blackColorRGBA}
    >
      <div className="frame1">
        <div className="arrow4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="62"
            viewBox="0 0 60 62"
            fill="none"
          >
            <path
              d="M0.81481 61.4853L7.61024 61.4853L7.61024 54.4532L0.814809 54.4532L0.81481 61.4853ZM59.9553 0.284669L53.1598 0.284669L53.1598 7.31682L59.9553 7.31682L59.9553 0.284669ZM4.80103 58.5782L57.1461 4.40975L55.969 3.19174L3.62402 57.3602L4.80103 58.5782Z"
              fill={blackColorRGBA}
            />
          </svg>
        </div>
        <div className="Rectangle12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="154"
            height="155"
            viewBox="0 0 154 155"
            fill="none"
          >
            <path
              d="M0.770142 77.5842C0.770142 35.2709 35.0718 0.969238 77.3851 0.969238C119.698 0.969238 154 35.2709 154 77.5842V154.199H0.770142V77.5842Z"
              fill={redColorRGBA}
            />
          </svg>
        </div>
      </div>
      <div className="textBox">
        <p className="text1">Branding | Image making </p>
        <p className="text2">Visual Designer</p>
        <p className="text3">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
        <Button label="Contact" onClick={onClick} />
      </div>
      <div className="frame2">
        <div className="Rectangle14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="154"
            height="154"
            viewBox="0 0 154 154"
            fill="none"
          >
            <path
              d="M0 0.374512C84.6265 0.374512 153.23 68.9778 153.23 153.604H0V0.374512Z"
              fill={greenColorRGBA}
            />
          </svg>
        </div>
        <div className="arrow3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="59"
            viewBox="0 0 57 59"
            fill="none"
          >
            <path
              d="M0.671224 58.0671L7.32267 58.0671L7.32267 51.1839L0.671223 51.1839L0.671224 58.0671ZM56.0475 1.6047C56.0475 1.13912 55.6828 0.761689 55.2329 0.761689L47.9012 0.761688C47.4513 0.761688 47.0866 1.13912 47.0866 1.6047C47.0866 2.07028 47.4513 2.44771 47.9012 2.44771L54.4183 2.44771L54.4183 9.1918C54.4183 9.65738 54.783 10.0348 55.2329 10.0348C55.6828 10.0348 56.0475 9.65738 56.0475 9.1918L56.0475 1.6047ZM4.57298 55.2216L55.8089 2.2008L54.6569 1.0086L3.42092 54.0294L4.57298 55.2216Z"
              fill={blackColorRGBA}
            />
          </svg>
        </div>
      </div>
    </Container>
  );
};
