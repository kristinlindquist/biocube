import { TCubeMember, Query } from '@cubejs-client/core';

export interface GroupProps {
  /**
   * Options
   */
  availableMembers: Member[];
  defaults?: any;
  name?: string;
  members?: Member[];
  query?: Query;
  title?: string;
  updateMethods: UpdateMethods;
}

export interface UpdateMethods {
  add: (member: any) => void;
  update: (member: { index: number }, updateWith: any) => void;
  remove: (member: { index: number }) => void;
}

export type Member = {
  index?: number;
} & Partial<TCubeMember>;

export interface SelectInputProps {
  availableMembers: Member[];
  key?: string;
  keyPath?: string;
  members: Member[];
  m?: Member;
  selection?: string;
  updateMethods: UpdateMethods;
}
