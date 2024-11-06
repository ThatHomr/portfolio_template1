import styled from "styled-components";
import { SkillItemList } from "../skillSection1/skillItemList";
import { hexToRgba } from "@/utils/utils";
import { ColorCode } from "@/style/color/Color";
import { SkillCardHorizontal } from "../skillCard/SkillCardHorizontal";

export interface skillSection2Props {
  skillList: SkillItemList;
}

interface ContainerProps {
  $whiteColorRGBA: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  width: -webkit-fill-available;
  padding: 42px 24px;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  background: ${({ $whiteColorRGBA }) => $whiteColorRGBA};
  .cardSection {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
  }
`;

const SkillSection2: React.FC<skillSection2Props> = ({ skillList }) => {
  const whiteColorRGBA: string = hexToRgba(
    ColorCode.White.hex,
    ColorCode.White.opacity
  );
  const lengthNum: number =
    skillList.length / 2 + (skillList.length % 2 === 1 ? 1 : 0);

  const ListList: SkillItemList[] = [];

  const setting = () => {
    let index: number = 0;
    for (let i = 0; i < lengthNum; i++) {
      const list: SkillItemList = [];
      for (let j = 0; j < 2; j++) {
        list.push(skillList[index]);
        index++;
      }
      ListList.push(list);
    }
  };
  setting();

  return (
    <Container $whiteColorRGBA={whiteColorRGBA}>
      {ListList.map((item, index) => {
        return (
          <div className="cardSection" key={`list ${index}`}>
            {item?.map((card, idx) => {
              return (
                <SkillCardHorizontal
                  type={card?.type}
                  title={card?.title}
                  content={card?.content}
                  key={`card ${idx}`}
                />
              );
            })}
          </div>
        );
      })}
    </Container>
  );
};
export default SkillSection2;
