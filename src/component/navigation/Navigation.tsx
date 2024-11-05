import styled from "styled-components";
import { navigationMenuList } from "./navigationMenuInterface";
import EpilogueFont from "@/fonts/EpilogueFont";

export interface NavigationProps {
  menuList: navigationMenuList;
}

interface ContainerProps {}

const Container = styled.div<ContainerProps>`
  width: -webkit-fill-available;
  padding: 24px 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;

  .logoBox {
  }
`;

export const Navigation: React.FC<NavigationProps> = ({ menuList }) => {
  return (
    <Container className={EpilogueFont.variable}>
      <div className="logoBox "></div>
    </Container>
  );
};
