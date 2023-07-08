export const BASE_TITLE = 'ติดตาม 14 ชุดกฎหมายเปลี่ยนประเทศ';
const DESCRIPTION = 'ที่พรรคก้าวไกลพร้อมยื่นเข้าสภา';
export const DEFAULT_OG_IMAGE = 'https://raw.githubusercontent.com/kaogeek/mfp-promise-tracker/main/static/og/default.png';

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
