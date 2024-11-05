"use client";
import styled from "styled-components";
import { navigationMenuList } from "./navigationMenuInterface";
import EpilogueFont from "@/fonts/EpilogueFont";
import { hexToRgba } from "@/utils/utils";
import { ColorCode } from "@/style/color/Color";

export interface NavigationProps {
  menuList: navigationMenuList;
}

interface ContainerProps {
  $blackColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  width: -webkit-fill-available;
  padding: 24px 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  .logoBox {
    font-family: ${EpilogueFont.variable};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    cursor: pointer;
  }
  .menuBox {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 24px;
  }
  .nullArea {
    width: -webkit-fill-available;
  }
  .menuItem {
    font-size: 17px;
    font-weight: 400;
    font-style: normal;
    line-height: 27px;
    cursor: pointer;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
  }
`;

export const Navigation: React.FC<NavigationProps> = ({ menuList }) => {
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );
  return (
    <Container
      $blackColorRGBA={blackColorRGBA}
      className={EpilogueFont.variable}
    >
      <div className="logoBox">Logo</div>
      <div className="nullArea" />
      <div className="menuBox">
        {menuList.map((item, idx) => {
          return (
            <div
              key={`menu ${idx}`}
              className="menuItem"
              onClick={item?.onClick}
            >
              {item?.title}
            </div>
          );
        })}
      </div>
    </Container>
  );
};
