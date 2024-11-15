import { ColorCode } from "@/style/color/Color";
import { hexToRgba } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import Star from "../svg/Star";

export interface TestimonialCardProps {
  star: 1 | 2 | 3 | 4 | 5;
  name: string;
  content: string;
  image: StaticImageData;
}

interface ContainerProps {
  $grayColorRGBA: string;
  $blackColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  width: 320px;
  min-width: 320px;
  display: flex;
  padding: 42px;
  flex-direction: column;
  align-items: flex-start;
  gap: 68px;
  background: ${({ $grayColorRGBA }) => $grayColorRGBA};
  .content {
    align-self: stretch;
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    white-space: pre-line;
  }
  .ClientBox {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }
  .imgBox {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  .ClientInnerBox {
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
  .name {
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    align-self: stretch;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
  .google {
    color: ${({ $blackColorRGBA }) => $blackColorRGBA};
    align-self: stretch;
    font-size: 17px;
    font-style: normal;
    font-weight: 6400;
    line-height: 27px;
  }
`;

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  star,
  name,
  content,
  image,
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
      <div className="ClientBox">
        <Image
          src={image}
          alt="clientImg"
          width={50}
          height={50}
          className="imgBox"
        />
        <div className="ClientInnerBox">
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
          <p className="name">{name}</p>
          <p className="google">Google</p>
        </div>
      </div>
    </Container>
  );
};
export default TestimonialCard;
