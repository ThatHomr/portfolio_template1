import EpilogueFont from "@/fonts/EpilogueFont";
import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import styled from "styled-components";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface ContainerProps {
  $blackColorRGBA: string;
  $whiteColorRGBA: string;
}
const Container = styled.div<ContainerProps>`
  padding: 24px 64px;
  background: ${({ $blackColorRGBA }) => $blackColorRGBA};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .buttonText {
    color: ${({ $whiteColorRGBA }) => $whiteColorRGBA};
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
`;

/**
 * 버튼 컴포넌트
 * @param param0
 * @returns
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );
  const whiteColorRGBA: string = hexToRgba(
    ColorCode.White.hex,
    ColorCode.White.opacity
  );

  return (
    <Container
      $blackColorRGBA={blackColorRGBA}
      $whiteColorRGBA={whiteColorRGBA}
      className={EpilogueFont.variable}
      onClick={onClick}
    >
      <p className="buttonText">{label}</p>
    </Container>
  );
};
