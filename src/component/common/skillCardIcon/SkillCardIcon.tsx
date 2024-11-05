import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import React from "react";
import styled from "styled-components";

export interface SkillCardIconProps {
  children: React.ReactElement;
  width: number;
  height: number;
}

interface ContainerProps {
  $width: number;
  $height: number;
}

const Container = styled.div<ContainerProps>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  flex-shrink: 0;
`;

export const SkillCardIcon: React.FC<SkillCardIconProps> = ({
  children,
  width,
  height,
}) => {
  return (
    <Container $width={width} $height={height}>
      {children}
    </Container>
  );
};

export interface VersionProps {
  width: number;
  height: number;
}

export const Version1: React.FC<VersionProps> = ({ width, height }) => {
  const pinkColoRGBA: string = hexToRgba(
    ColorCode.Pink.hex,
    ColorCode.Pink.opacity
  );
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M0.27063 62.6353C0.27063 28.3936 28.029 0.635254 62.2707 0.635254C96.5124 0.635254 124.271 28.3936 124.271 62.6353V124.635H0.27063V62.6353Z"
        fill={pinkColoRGBA}
      />
      <path
        d="M32.4392 98.6914L39.0374 98.6914L39.0374 91.8633L32.4392 91.8633L32.4392 98.6914ZM87.3725 42.6807C87.3725 42.2189 87.0107 41.8445 86.5644 41.8445L79.2913 41.8445C78.845 41.8445 78.4832 42.2189 78.4832 42.6807C78.4832 43.1426 78.845 43.517 79.2913 43.517L85.7563 43.517L85.7563 50.2071C85.7563 50.669 86.1181 51.0434 86.5644 51.0434C87.0107 51.0434 87.3725 50.669 87.3725 50.2071L87.3725 42.6807ZM36.3097 95.8687L87.1358 43.272L85.993 42.0894L35.1669 94.686L36.3097 95.8687Z"
        fill={blackColorRGBA}
      />
    </svg>
  );
};

export const Version2: React.FC<VersionProps> = ({ width, height }) => {
  const redColorRGBA: string = hexToRgba(
    ColorCode.Red.hex,
    ColorCode.Red.opacity
  );
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M0.353516 0.703125C68.8368 0.703125 124.354 56.2198 124.354 124.703H0.353516V0.703125Z"
        fill={redColorRGBA}
      />
      <path
        d="M69.217 69.2781L75.9685 69.2781L75.9685 62.5266L69.217 62.5266L69.217 69.2781ZM127.729 10.766L120.978 10.766L120.978 17.5174L127.729 17.5174L127.729 10.766ZM73.1775 66.487L124.938 14.7264L123.769 13.557L72.0081 65.3177L73.1775 66.487Z"
        fill={blackColorRGBA}
      />
    </svg>
  );
};

export const Version3: React.FC<VersionProps> = ({ width, height }) => {
  const greenColorRGBA: string = hexToRgba(
    ColorCode.Green.hex,
    ColorCode.Green.opacity
  );
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M3.78174 0.296875H82.3032C107.42 0.296875 127.782 20.6583 127.782 45.7754V124.297H49.2603C24.1432 124.297 3.78174 103.935 3.78174 78.8182V0.296875Z"
        fill={greenColorRGBA}
      />
      <path
        d="M0.406005 127.673L7.15747 127.673L7.15747 120.921L0.406004 120.921L0.406005 127.673ZM50.2801 78.9679L58.9181 75.912L52.1666 69.1606L49.1107 77.7985L50.2801 78.9679ZM4.36643 124.882L50.8648 78.3832L49.6954 77.2138L3.19704 123.712L4.36643 124.882Z"
        fill={blackColorRGBA}
      />
    </svg>
  );
};

export const Version4: React.FC<VersionProps> = ({ width, height }) => {
  const yellowColorRGBA: string = hexToRgba(
    ColorCode.Yellow.hex,
    ColorCode.Yellow.opacity
  );
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M128.21 124.703C59.7271 124.703 4.21045 69.1864 4.21045 0.703143L128.21 0.703133L128.21 124.703Z"
        fill={yellowColorRGBA}
      />
      <path
        d="M59.3469 56.1287L52.5955 56.1287L52.5955 62.8801L59.3469 62.8801L59.3469 56.1287ZM0.834842 114.641L7.5863 114.641L7.5863 107.889L0.834839 107.889L0.834842 114.641ZM55.3865 58.9197L3.62588 110.68L4.79526 111.85L56.5559 60.0891L55.3865 58.9197Z"
        fill={blackColorRGBA}
      />
    </svg>
  );
};
