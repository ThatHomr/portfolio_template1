import React from "react";
import styled from "styled-components";
import {
  SkillCardIcon,
  Version1,
  Version2,
  Version3,
  Version4,
} from "../skillCardIcon/SkillCardIcon";
import { hexToRgba } from "@/utils/utils";
import { ColorCode } from "@/style/color/Color";

export interface SkillCardHorizontalProps {
  type: 1 | 2 | 3 | 4;
  title: string;
  content: string;
}

interface ContainerProps {
  $blackColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  width: -webkit-fill-availability;
  min-width: 320px;
  padding: 64px 42px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 42px;
  flex: 1 0 0;
  flex-wrap: wrap;
  .horizontalBox {
    display: flex;
    flex-direction: column;
    min-width: 200px;
    align-items: flex-start;
    gap: 12px;
    flex: 1 0 0;
  }
  .titleBox {
    align-self: stretch;
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
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
 * SkillCardHorizontal component
 * @param param0 type : 1,2,3,4 선택, title : string, content : string
 * @returns
 */
export const SkillCardHorizontal: React.FC<SkillCardHorizontalProps> = ({
  type = 1,
  title,
  content,
}) => {
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );

  return (
    <Container $blackColorRGBA={blackColorRGBA}>
      <SkillCardIcon width={64} height={64}>
        {type === 1 ? (
          <Version1 width={64} height={64} />
        ) : type === 2 ? (
          <Version2 width={64} height={64} />
        ) : type === 3 ? (
          <Version3 width={64} height={64} />
        ) : (
          <Version4 width={64} height={64} />
        )}
      </SkillCardIcon>
      <div className="horizontalBox">
        <div className="titleBox">{title}</div>
        <div className="contentBox">{content}</div>
      </div>
    </Container>
  );
};
