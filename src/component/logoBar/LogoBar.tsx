import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import styled from "styled-components";
import Google from "../common/svg/Google";
import Nike from "../common/svg/Nike";
import Samsung from "../common/svg/Samsung";

interface ContainerProps {
  $whiteColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  width: 1280px;
  padding: 42px 24px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 68px 86px;
  flex-wrap: wrap;
  background: ${({ $whiteColorRGBA }) => $whiteColorRGBA};
  .imgGoogle {
    width: 116.074px;
    height: 38.209px;
    flex-shrink: 0;
  }
  .imgNike {
    width: 86.425px;
    height: 30.741px;
    flex-shrink: 0;
  }
  .imgSamsung {
    width: 86.425px;
    height: 30.741px;
    flex-shrink: 0;
  }
`;

const LogoBar: React.FC = ({}) => {
  const whiteColorRGBA: string = hexToRgba(
    ColorCode.White.hex,
    ColorCode.White.opacity
  );
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );

  return (
    <Container $whiteColorRGBA={whiteColorRGBA}>
      <div className="imgGoogle">
        <Google color={blackColorRGBA} width={116.074} height={38.209} />
      </div>
      <div className="imgNike">
        <Nike color={blackColorRGBA} width={86.425} height={30.741} />
      </div>
      <div className="imgSamsung">
        <Samsung color={blackColorRGBA} width={86.425} height={30.741} />
      </div>
    </Container>
  );
};
export default LogoBar;
