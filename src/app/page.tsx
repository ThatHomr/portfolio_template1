"use client";
import { HeaderSection1 } from "@/component/common/HeaderSection1/HeaderSection1";
import { HeaderSection2 } from "@/component/common/HeaderSection2/HeaderSection2";
import { Navigation } from "@/component/navigation/Navigation";
import { navigationMenuList } from "@/component/navigation/navigationMenuInterface";
import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import styled from "styled-components";

interface ContainerProps {
  $WhiteColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  background: ${({ $WhiteColorRGBA }) => $WhiteColorRGBA};
`;

export default function Home() {
  const menuList: navigationMenuList = [
    {
      title: "About",
      onClick: () => {
        alert("About Clicked");
      },
    },
    {
      title: "Work",
      onClick: () => {
        alert("Work Clicked");
      },
    },
    {
      title: "Contact",
      onClick: () => {
        alert("Contact Clicked");
      },
    },
  ];

  const WhiteColorRGBA: string = hexToRgba(
    ColorCode.White.hex,
    ColorCode.White.opacity
  );

  return (
    <Container $WhiteColorRGBA={WhiteColorRGBA}>
      <Navigation menuList={menuList} />
      <HeaderSection1
        onClick={() => {
          alert("Contact Click HeaderSection1");
        }}
      />
      <HeaderSection2
        onClick={() => {
          alert("Contact Click HeaderSection2");
        }}
      />
    </Container>
  );
}
