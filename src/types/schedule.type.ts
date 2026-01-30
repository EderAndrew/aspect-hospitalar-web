import { Exam } from "./exam.type";

export type Schedule = {
  userId: string;
  examId: string;
  patient: string;
  date: string;
  time: string;
  info?: string;
  status: boolean;
};

export type Schedules = {
  id: string;
  user: UserName;
  exam: Exam;
  patient: string;
  date: string;
  time: string;
  info: string;
  status: boolean;
};

type UserName = {
  name: string;
};

export type EditSchedule = {
  date?: string;
  time?: string;
}