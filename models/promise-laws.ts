import { PromiseStatus } from './promise';

export enum PromiseLawsTopic {
  Army = 'army',
  Economy = 'economy',
  Decentralize = 'decentralize',
  Corruption	= 'corruption',
  Government = 'government',
  Tax = 'tax',
  Public =	'public',
  Land = 'land',
  Labor =	'labor',
  Environment =	'environment',
  Rights = 'rights',
  Peace	= 'peace',
  Diversity = 'diversity',
  Politics =	'politics',
}

export interface PromiseLawsLink {
  name: string;
  url: string;
}

export interface PromiseLawsTimeline {
  label: string;
  from: string;
  to?: string;
}

export interface TrackingPromiseLaws {
  id: number;
  party: string;
  title: string;
  category: PromiseLawsTopic;
  status: PromiseStatus;
  description: string;
  isNCPO: boolean;
  imageUrl?: string;
  links: PromiseLawsLink[];
  timelines: PromiseLawsTimeline[];
}

export const promiseLawsTopicOrder: PromiseLawsTopic[] = [
  PromiseLawsTopic.Army,
  PromiseLawsTopic.Economy,
  PromiseLawsTopic.Decentralize,
  PromiseLawsTopic.Corruption,
  PromiseLawsTopic.Government,
  PromiseLawsTopic.Tax,
  PromiseLawsTopic.Public,
  PromiseLawsTopic.Land,
  PromiseLawsTopic.Labor,
  PromiseLawsTopic.Environment,
  PromiseLawsTopic.Rights,
  PromiseLawsTopic.Peace,
  PromiseLawsTopic.Diversity,
  PromiseLawsTopic.Politics,
];

export const promiseLawsTopicTextMap = new Map<
  PromiseLawsTopic,
  { long: string; short: string }
>([
  [PromiseLawsTopic.Army, { long: 'กองทัพ', short: 'กองทัพ' }],
  [PromiseLawsTopic.Economy, { long: 'การแข่งขันทางการค้า', short: 'การแข่งขันทางการค้า' }],
  [PromiseLawsTopic.Decentralize, { long: 'กระจายอำนาจ', short: 'กระจายอำนาจ' }],
  [PromiseLawsTopic.Corruption, { long: 'การทุจริต', short: 'การทุจริต' }],
  [PromiseLawsTopic.Government, { long: 'ระบบราชการ', short: 'ระบบราชการ' }],
  [PromiseLawsTopic.Tax, { long: 'ระบบภาษี', short: 'ระบบภาษี' }],
  [PromiseLawsTopic.Public, { long: 'บริการสาธารณะ', short: 'บริการสาธารณะ' }],
  [PromiseLawsTopic.Land, { long: 'ที่ดิน', short: 'ที่ดิน' }],
  [PromiseLawsTopic.Labor, { long: 'แรงงาน', short: 'แรงงาน' }],
  [PromiseLawsTopic.Environment, { long: 'สิ่งแวดล้อม', short: 'สิ่งแวดล้อม' }],
  [PromiseLawsTopic.Rights, { long: 'สิทธิเสรีภาพ', short: 'สิทธิเสรีภาพ' }],
  [PromiseLawsTopic.Peace, { long: 'สันติภาพ/ความขัดแย้ง', short: 'สันติภาพ/ความขัดแย้ง' }],
  [PromiseLawsTopic.Diversity, { long: 'ความหลากหลาย', short: 'ความหลากหลาย' }],
  [PromiseLawsTopic.Politics, { long: 'พัฒนาการเมือง', short: 'พัฒนาการเมือง' }],
]);
