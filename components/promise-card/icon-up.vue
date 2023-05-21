<template>
  <svg
    width="32"
    height="32"
    viewBox="27 16 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_442_91721)">
      <circle
        cx="43"
        cy="32"
        r="12"
        transform="rotate(-180 43 32)"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.2736 29.6808C43.2196 29.6268 43.1556 29.5839 43.085 29.5546C43.0145 29.5253 42.9389 29.5103 42.8625 29.5103C42.7861 29.5103 42.7105 29.5253 42.6399 29.5546C42.5694 29.5839 42.5053 29.6268 42.4514 29.6808L38.9675 33.1647C38.8585 33.2737 38.7972 33.4216 38.7972 33.5758C38.7972 33.73 38.8585 33.8779 38.9675 33.9869C39.0765 34.0959 39.2244 34.1572 39.3786 34.1572C39.5328 34.1572 39.6807 34.0959 39.7897 33.9869L42.8625 30.913L45.9353 33.9869C45.9892 34.0409 46.0533 34.0837 46.1239 34.1129C46.1944 34.1421 46.27 34.1572 46.3464 34.1572C46.4227 34.1572 46.4983 34.1421 46.5688 34.1129C46.6394 34.0837 46.7035 34.0409 46.7575 33.9869C46.8114 33.9329 46.8543 33.8688 46.8835 33.7983C46.9127 33.7278 46.9277 33.6522 46.9277 33.5758C46.9277 33.4995 46.9127 33.4239 46.8835 33.3533C46.8543 33.2828 46.8114 33.2187 46.7575 33.1647L43.2736 29.6808Z"
        fill="#3904E9"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_442_91721"
        x="0"
        y="-15"
        width="86"
        height="86"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_442_91721"
        />
        <feOffset dy="-4" />
        <feGaussianBlur stdDeviation="15" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_442_91721"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_442_91721"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'IconUp',
});
</script>
