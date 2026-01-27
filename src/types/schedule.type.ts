export type Schedule = {
  userId: string;
  examId: string;
  patient: string;
  date: string;
  time: string;
  info?: string;
  status: boolean;
};
