/* eslint-disable max-len */
import * as React from 'react'
import { SVGProps } from 'react'

const PinterestFooterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={43}
    height={43}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#a)'>
      <path
        opacity={0.8}
        d='M14 35C8.477 35 4 30.523 4 25V10C4 4.477 8.477 0 14 0h15c5.523 0 10 4.477 10 10v15c0 5.523-4.477 10-10 10H14Z'
        fill='#0F1012'
      />
      <g clipPath='url(#b)'>
        <path
          d='M21.754 8.167c-5.116 0-7.837 3.278-7.837 6.853 0 1.658.927 3.726 2.41 4.381.225.102.347.059.397-.15.045-.159.24-.923.334-1.284a.33.33 0 0 0-.08-.324c-.492-.57-.883-1.607-.883-2.58 0-2.493 1.983-4.914 5.356-4.914 2.916 0 4.957 1.895 4.957 4.605 0 3.063-1.62 5.182-3.727 5.182-1.165 0-2.033-.915-1.758-2.047.333-1.347.985-2.796.985-3.768 0-.872-.492-1.593-1.498-1.593-1.187 0-2.15 1.175-2.15 2.752 0 1.003.355 1.68.355 1.68s-1.173 4.74-1.391 5.627c-.37 1.499.05 3.927.086 4.136.022.115.152.151.224.057.115-.152 1.534-2.176 1.932-3.64l.739-2.695c.39.706 1.519 1.298 2.72 1.298 3.575 0 6.158-3.142 6.158-7.041-.012-3.738-3.212-6.535-7.329-6.535Z'
          fill='#fff'
        />
      </g>
    </g>
    <defs>
      <clipPath id='b'>
        <path fill='#fff' d='M12.167 8.167h18.667v18.667H12.167z' />
      </clipPath>
      <filter
        id='a'
        x={0}
        y={0}
        width={43}
        height={43}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_2_26553' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_2_26553'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
)

export default PinterestFooterIcon
