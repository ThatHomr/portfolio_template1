import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import Star from "../svg/Star";

export interface TestimonialCardBigProps {
  star: 1 | 2 | 3 | 4 | 5;
  content: string;
  image: StaticImageData;
  name: string;
}

interface ContainerProps {
  $grayColorRGBA: string;
  $blackColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  width: 989px;
  min-width: 320px;
  padding: 42px;
  flex-direction: column;
  align-items: flex-start;
  gap: 68px;
  background: ${({ $grayColorRGBA }) => $grayColorRGBA};
  .content {
    align-self: stretch;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
  }
  .clientBox {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }
  .imageBox {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  .infoBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    flex: 1 0 0;
  }
  .starBox {
    display: flex;
    align-items: flex-start;
    gap: 6px;
  }
  .nameP {
    align-self: stretch;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
  .googleP {
    align-self: stretch;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
`;

const TestimonialCardBig: React.FC<TestimonialCardBigProps> = ({
  star,
  content,
  image,
  name,
}) => {
  const grayColorRGBA: string = hexToRgba(
    ColorCode.Grey.hex,
    ColorCode.Grey.opacity
  );
  const blackColorRGBA: string = hexToRgba(
    ColorCode.Black.hex,
    ColorCode.Black.opacity
  );
  return (
    <Container $grayColorRGBA={grayColorRGBA} $blackColorRGBA={blackColorRGBA}>
      <p className="content">{content}</p>
      <div className="clientBox">
        <Image
          src={image}
          alt="client image"
          width={50}
          height={50}
          className="imageBox"
        />
        <div className="infoBox">
          <div className="starBox">
            {Array.from({ length: star }, (_, i) => i + 1).map((i) => (
              <Star
                color={blackColorRGBA}
                width={20}
                height={20}
                key={`star ${i}`}
              />
            ))}
          </div>
          <p className="nameP">{name}</p>
          <p className="googleP">Google</p>
        </div>
      </div>
    </Container>
  );
};
export default TestimonialCardBig;
