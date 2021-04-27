import { TCubeMember } from '@cubejs-client/core';

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

export type Member = {
  index?: number;
} & Partial<TCubeMember>;

export interface SelectInputProps {
  availableMembers: Member[];
  members: Member[];
  updateMethods: UpdateMethods;
  key?: string;
  keyPath?: string;
  m?: Member;
}