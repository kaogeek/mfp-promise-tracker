export const BASE_TITLE = 'Promise Tracker';
const DESCRIPTION =
  'สำรวจ รับรู้ ร่วมติดตาม ให้พรรคการเมืองทำตามคำสัญญาที่ให้ไว้กับเรา';
export const DEFAULT_OG_IMAGE =
  'https://raw.githubusercontent.com/wevisdemo/promise-tracker/main/static/og/default.jpg';

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
