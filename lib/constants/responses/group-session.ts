import { BaseResponse } from "./base";

export interface GroupSession {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  date: string;
  meetingUrl: string;
  mentorId: string;
  description: string;
  maxParticipant: number;
}

export type GetGroupSessionData = GroupSession[];
export type GetGroupSessionResponse = BaseResponse<GetGroupSessionData>;

export type CreateGroupSessionData = GroupSession;
export type CreateGroupSessionResponse = BaseResponse<CreateGroupSessionData>;

export type GetDetailGroupSessionData = GroupSession;
export type GetDetailGroupSessionResponse =
  BaseResponse<GetDetailGroupSessionData>;

export interface GroupSessionMeta {
  isJoined: boolean;
  canJoin: boolean;
  isOwner: boolean;
}

export interface GroupSessionSelf {
  groupSession: GroupSession;
  meta: GroupSessionMeta;
}

export type GetGroupSessionSelfData = GroupSessionSelf;
export type GetGroupSessionSelfResponse = BaseResponse<GetGroupSessionSelfData>;
