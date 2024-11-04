/**
 * 컬러코드 opacity => RGBA 코드 변환
 * @param hex 컬러코드 ex: #000000 string
 * @param opacity 투명도 ex: 1 number
 * @returns rgba string 값
 */
export const hexToRgba = (hex: string, opacity: number): string => {
  // HEX 코드에서 "#"을 제거
  const cleanHex: string = hex.replace("#", "");

  // 각 색상 값을 추출하고 16진수를 10진수로 변환
  const r: number = parseInt(cleanHex.substring(0, 2), 16);
  const g: number = parseInt(cleanHex.substring(2, 4), 16);
  const b: number = parseInt(cleanHex.substring(4, 6), 16);

  // RGBA 형식의 문자열 반환 (0 ~ 1 사이의 opacity 값 사용)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
