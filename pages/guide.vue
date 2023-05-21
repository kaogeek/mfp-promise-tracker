<template>
  <div
    class="bg-gradient-to-b from-black to-ultramarine text-white px-2 sm:px-6"
  >
    <div class="max-w-4xl m-auto">
      <div
        class="grid gap-3 justify-items-center wv-font-kondolar text-center pt-12 pb-20"
      >
        <StatusAnimation />
        <h3 class="wv-h8 wv-font-bold">PROMISE TRACKER</h3>
        <h1 class="wv-h2 wv-font-bold">วิธีตรวจสอบคำสัญญา</h1>
        <h4 class="wv-h9">
          หากนัก/พรรคการเมืองได้เข้าไปเป็นรัฐบาลแล้วไม่ทำตามสัญญา
          <br class="hidden sm:block" />
          มีกระบวนการตรวจสอบอย่างไรบ้าง ?
        </h4>
        <img
          :src="`${$config.path.images}/guide/section-01.png`"
          alt="section-01"
        />
        <ScrollIcon>
          <p class="wv-font-anuphan wv-u4">อ่านต่อ</p>
        </ScrollIcon>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-12">
        <div class="flex flex-col items-center sm:items-start sm:flex-row">
          <h5
            class="wv-h5 wv-font-bold wv-font-kondolar text-center sm:text-left"
          >
            Q: ได้เข้าไปเป็นรัฐบาล<br class="block sm:hidden" />แล้วไม่ทำตาม<br
              class="block sm:hidden"
            />สัญญาผิดไหม?
          </h5>

          <GuideArrow class="mx-2 mt-2 transform sm:-rotate-90" />
        </div>
        <BoxContainer class="grid gap-3 bg-status-proposed">
          <h6 class="wv-h8 wv-font-kondolar wv-font-bold">ANSWER</h6>
          <p class="wv-h9 wv-font-kondolar">
            แม้ไม่มีกฎหมายระบุไว้เป็นความผิดที่ชัดเจน
            <span class="wv-font-bold">แต่ผิด!</span>
            ที่ทำลายความไว้ใจของประชาชน
          </p>
        </BoxContainer>
        <div class="flex flex-col items-center sm:items-start sm:flex-row">
          <h5
            class="wv-h5 wv-font-bold wv-font-kondolar text-center sm:text-left"
          >
            Q: แล้วมีวิธีการอะไร<br
              class="block sm:hidden"
            />ที่สามารถตรวจสอบ<br class="block sm:hidden" />หรือเอาผิดได้ไหม?
          </h5>

          <GuideArrow class="mx-2 mt-2 transform sm:-rotate-90" />
        </div>
        <BoxContainer
          class="grid md:grid-cols-2 gap-3 bg-status-proposed text-white"
        >
          <div class="grid gap-3">
            <h6 class="wv-h8 wv-font-kondolar wv-font-bold">ANSWER</h6>
            <p class="wv-h9 wv-font-kondolar">
              <span class="wv-font-bold"> “การเปิดอภิปรายไม่ไว้วางใจ”</span>
              เป็นกลไกสำคัญของการถ่วงดุล ที่รัฐสภา (ฝ่ายนิติบัญญัติ)
              ควรใช้ในการตรวจสอบ การทำงานของรัฐบาล (ฝ่ายบริหาร)
            </p>
            <div class="wv-u5 wv-font-anuphan">
              *หมายเหตุ
              <ul class="list-disc list-inside ml-3">
                <li>การเสนอญัตติอภิปรายไม่ไว้วางใจทำได้ปีละ 1 ครั้ง</li>
                <li>
                  ระหว่างอภิปรายไม่ไว้วางใจนายกรัฐมนตรีจะยุบสภาไม่ได้
                  เว้นแต่จะมีการถอนญัตติ หรือลงมติไม่ไว้วางใจไม่สำเร็จ
                </li>
                <li>
                  หากต้องการดูข้อมูลญัตติ :
                  <ExternalLink
                    class="wv-font-bold"
                    url="https://theyworkforus.wevis.info/"
                  >
                    They Work For Us</ExternalLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <img
            class="mx-auto"
            :src="`${$config.path.images}/guide/prayut.gif`"
            alt="prayut"
          />
        </BoxContainer>
      </div>
      <div class="flex flex-col items-center pt-8 overflow-x-hidden">
        <GuideArrowBreakline class="hidden sm:block sm:py-4" />
        <BoxContainer class="bg-status-proposed text-center wv-font-kondolar">
          <h4 class="wv-h4 wv-font-bold wv-font-kondolar p-4">
            ขั้นตอนการอภิปรายไม่ไว้วางใจ
          </h4>
          <div class="grid sm:grid-cols-3 gap-3">
            <div class="flex flex-col sm:flex-row justify-center items-center">
              <div>
                <img
                  class="mx-auto w-56"
                  :src="`${$config.path.images}/guide/censure-motion-01.png`"
                  alt="censure-motion-step-1"
                />
                <p class="wv-b6 p-4">
                  ขั้นแรก ส.ส. จำนวนไม่น้อยกว่า 1 ใน 5 ของสภา (100 คน)
                  ขอใช้สิทธิ
                  เข้าชื่อเสนอญัตติขอเปิดอภิปรายไม่ไว้วางใจรัฐมนตรีเป็นรายบุคคลหรือรายคณะ
                </p>
              </div>
              <div>
                <GuideArrow class="mx-2 mt-2 transform sm:-rotate-90" />
              </div>
            </div>
            <div class="flex flex-col sm:flex-row justify-center items-center">
              <div>
                <img
                  class="mx-auto w-20"
                  :src="`${$config.path.images}/guide/censure-motion-02.png`"
                  alt="censure-motion-step-2"
                />
                <p class="wv-b6 p-4">
                  ต่อไป อภิปรายตามชั่วโมงที่กำหนด
                  และจะลงมติในวันถัดจากอภิปรายครบ
                </p>
              </div>
              <div>
                <GuideArrow class="mx-2 mt-2 transform sm:-rotate-90" />
              </div>
            </div>
            <div class="flex flex-col sm:flex-row justify-center items-center">
              <div>
                <img
                  class="mx-auto w-56"
                  :src="`${$config.path.images}/guide/censure-motion-03.png`"
                  alt="censure-motion-step-3"
                />
                <p class="wv-b6 p-4">
                  สุดท้าย ต้องใช้เสียง ส.ส. จำนวนมากกว่ากึ่งหนึ่งของสภา ( 251
                  คน) ความเป็นรัฐมนตรีถึงจะสิ้นสุดลง
                </p>
              </div>
            </div>
          </div>
        </BoxContainer>
      </div>
      <div class="text-center pt-8">
        <h2 class="wv-h2 wv-font-bold wv-font-kondolar">
          ยังจำคำสัญญาเหล่านี้ได้ไหม
        </h2>
        <img
          class="mx-auto"
          :src="`${$config.path.images}/guide/long-collage.png`"
          alt="long-promises"
        />
      </div>
      <div class="text-center wv-font-kondolar pt-8">
        <img
          class="mx-auto"
          :src="`${$config.path.images}/guide/section-03.png`"
          alt="section-03"
        />
        <h2 class="wv-h2 wv-font-bold">แล้วประชาชนทำอะไรได้บ้าง?</h2>
        <p class="wv-h9 px-4">
          สิ่งที่ประชาชนทุกคนทำได้ คือการ “ติดตามและตรวจสอบ”
          การทำงานของนัก/พรรคการเมือง ทั้งที่เราเลือกและไม่ได้เลือกพวกเขาเข้าสภา
          อย่าปล่อยให้การผิดสัญญาเป็นเรื่องที่ยอมรับได้
          อีกพลังประชาชนที่สำคัญคือวันที่เราเข้าไป “เลือกตั้ง” ในคูหา
          เมื่อเรารู้แล้วว่าใครไม่รักษาคำพูด
          <span class="wv-font-bold">
            อย่าปล่อยให้คนผิดสัญญาเข้าสภาในครั้งต่อไป!</span
          >
        </p>
      </div>
      <WvSharer class="py-9" :center="true" :light="true" />
      <div class="pb-8">
        <LinkBanner
          theme="transparent-gray"
          iconImage="article/explore.png"
          titleText="PROMISE TRACKER"
          bodyText="สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน ?"
          buttonText="ดูคำสัญญา"
          buttonUrl="explore"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WvSharer from '@wevisdemo/ui/components/sharer.vue';
import StatusAnimation from '@/components/status-animation.vue';
import ScrollIcon from '@/components/scroll-icon.vue';
import BoxContainer from '@/components/promise-card/box-container.vue';
import ExternalLink from '@/components/external-link.vue';
import GuideArrow from '@/components/guide/guide-arrow.vue';
import GuideArrowBreakline from '@/components/guide/guide-arrow-breakline.vue';
import LinkBanner from '@/components/link-banner.vue';
import { createMetadata } from '~/utils/metadata';

export default Vue.extend({
  name: 'GuidePage',
  components: {
    StatusAnimation,
    ScrollIcon,
    BoxContainer,
    ExternalLink,
    GuideArrow,
    GuideArrowBreakline,
    WvSharer,
    LinkBanner,
  },
  head: createMetadata({ pageName: 'วิธีตรวจสอบคำสัญญา' }),
});
</script>
