export interface skillItemListDataInterface {
  title: string;
  content: string;
  type: 1 | 2 | 3 | 4;
}

export type SkillItemList = skillItemListDataInterface[];
