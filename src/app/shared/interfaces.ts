export interface ITarget {
  title: string;
  description: string;
  tillDate: number;
  target: number;
  progress: number;
}

export interface IDay {
  day: string,
  date: Date,
  selected: boolean
}

export interface IWeek {
  from: Date;
  to: Date;
  selected: boolean;
}

export interface IMonth {
  title: string;
  selected: boolean;
}

export interface IYear {
  title: number;
  selected: boolean;
}
