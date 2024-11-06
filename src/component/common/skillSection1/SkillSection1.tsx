import styled from "styled-components";
import { SkillItemList } from "./skillItemList";
import { hexToRgba } from "@/utils/utils";
import { ColorCode } from "@/style/color/Color";
import { SkillCard } from "../skillCard/SkillCard";

export interface SkillSection1Props {
  skillList: SkillItemList;
}

interface ContainerProps {
  $whiteColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  width: -webkit-fill-availability;
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 42px 24px;
  align-items: center;

  background: ${({ $whiteColorRGBA }) => $whiteColorRGBA};
  .cardSection {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
  }
`;

const SkillSection1: React.FC<SkillSection1Props> = ({ skillList }) => {
  const whiteColorRGBA: string = hexToRgba(
    ColorCode.White.hex,
    ColorCode.White.opacity
  );

  return (
    <Container $whiteColorRGBA={whiteColorRGBA}>
      <div className="cardSection">
        {skillList.map((item, idx) => {
          return (
            <SkillCard
              type={item?.type}
              title={item?.title}
              content={item?.content}
              key={`skill ${idx}`}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default SkillSection1;
