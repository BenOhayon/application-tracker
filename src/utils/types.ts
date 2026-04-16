import type { ReactElement } from "react";

export interface WithId {
  id: string;
}

export interface AnalyticsData {
  title: string;
  value: number;
  icon?: React.ReactElement;
}

export type Hybridness = 'Hybrid' | 'On-site' | 'Remote' | `Hybrid(${number} days)`
export type InterviewPhase =
  'Applied' |
  'Phone interview' |
  'Video Interview' |
  'Tech Interview' |
  'On-site Interview' |
  'Offer' |
  'On-site Tech Interview' |
  'N/A'
  ;

export type NextPhase = Exclude<InterviewPhase, 'Applied'> | null;
export type LastPhase = InterviewPhase;

export interface TableData {
  disabled?: boolean;
}

export interface ApplicationData extends WithId, TableData {
  company: string;
  role: string;
  hybridness: Hybridness;
  createdAt: number;
  lastInteraction: number;
  lastPhase: LastPhase;
  nextPhase: NextPhase;
  totalPhases: InterviewPhase[];
}

// In the future, more table data types could be added to this union type if needed
export type TableRecord = ApplicationData;

export type DialogId =
  'createApplicationDialog' |
  'markApplicationAsRejectedDialog'
;

export type Dialogs = Record<DialogId, ReactElement>;

export type AtLeastOne<A, B> = 
| (A & Partial<B>)
| (B & Partial<A>);