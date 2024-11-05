import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import React from "react";
import styled from "styled-components";
import {
  Version1,
  Version2,
  Version3,
  Version4,
} from "../skillCardIcon/SkillCardIcon";

export interface SkillCardProps {
  type: 1 | 2 | 3 | 4;
  title: string;
  content: string;
}

interface ContainerProps {
  $whiteColorRGBA: string;
  $blackColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  width: 320px;
  min-width: 320px;
  padding: 64px 42px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  background: ${({ $whiteColorRGBA }) => $whiteColorRGBA};

  .titleBox {
    height: 42px;
    align-self: stretch;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
  }
  .contentBox {
    align-self: stretch;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
`;

/**
 * SkillCard component
 * @param param0 type : 1,2,3,4 중 선택 svg component, title : string, content : string
 * @returns
 */
export const SkillCard: React.FC<SkillCardProps> = ({
  type = 1,
  title,
  content,
}) => {
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
      {type === 1 ? (
        <Version1 />
      ) : type === 2 ? (
        <Version2 />
      ) : type === 3 ? (
        <Version3 />
      ) : (
        <Version4 />
      )}
      <div className="titleBox">{title}</div>
      <div className="contentBox">{content}</div>
    </Container>
  );
};
