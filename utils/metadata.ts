export const BASE_TITLE = 'ติดตาม 45+ ร่างกฎหมาย พรรคก้าวไกล';
const DESCRIPTION = 'ที่ก้าวไกลพร้อมยื่นทันทีหลังเปิดสภา';
export const DEFAULT_OG_IMAGE = 'https://raw.githubusercontent.com/kaogeek/mfp-promise-tracker/main/static/og/default.jpg';

interface createMetadataParams {
  pageName?: string;
  description?: string;
  image?: string;
}

export const createMetadata = ({
  pageName,
  description = DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
}: createMetadataParams = {}) => {
  const title = pageName ? `${pageName} - ${BASE_TITLE}` : BASE_TITLE;

  return {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og-title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og-description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: image,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  };
};
