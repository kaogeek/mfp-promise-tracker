import { PromiseStatus, TrackingPromise } from '@/models/promise';

export const matchedPromise = (promises: TrackingPromise[], ID: number) => {
  return promises.filter((promise) => promise.id === ID)[0] as TrackingPromise;
};

export const titleText = (title: string, party: string) => {
  return `โครงการ${title} โดยพรรค${party}`;
};

export const descriptionMap = new Map<PromiseStatus, string>([
  [
    PromiseStatus.NoData,
    'ร่างกฎหมายนี้ยังไม่พบความเคลื่อนไหว ทวงถามก้าวไกลถึงข้อมูลและการดำเนินการเกี่ยวกับร่างกฎหมายนี้',
  ],
  [
    PromiseStatus.Proposed,
    'ร่างกฎหมายนี้ถูกเสนอต่อสภา ร่วมจับตา รอดูผล ของร่างกฎหมายนี้...ว่าได้ไปต่อไหม ?',
  ],
  [
    PromiseStatus.Paused,
    'น่าเศร้า !! ร่างกฎหมายนี้ถูกระงับไว้ ร่วมแชร์ให้ร่างกฎหมายได้ไปต่อกัน',
  ],
  [
    PromiseStatus.Working,
    'ร่างกฎหมายนี้กำลังดำเนินการอยู่ บอกต่อให้ทุกคนมาลุ้นไปพร้อมๆกันว่าใกล้แล้ว!!',
  ],
  [
    PromiseStatus.Done,
    'ร่างกฎหมายนี้ทำได้สำเร็จ บอกต่อให้ทุกคนดู นี่คือร่างกฎหมายที่พูดแล้วทำจริง!!',
  ],
]);

export const imageUrl = (baseImageUrl: string, status: PromiseStatus) => {
  return `${baseImageUrl}/${status}.jpg`;
};
