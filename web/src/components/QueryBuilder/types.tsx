export interface GroupProps {
  /**
   * Options
   */
  availableMembers: any[];
  defaults?: any;
  name?: string;
  members?: any[];
  updateMethods: UpdateMethods;
  title?: string;
}

export interface UpdateMethods {
  add: (member: any) => void;
  update: (member: { index: number }, updateWith: any) => void;
  remove: (member: { index: number }) => void;
}

export interface Member {
  dimension?: any;
  index?: number;
  name: string;
  title?: string;
}
