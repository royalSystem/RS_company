/* eslint-disable max-len */
import * as React from 'react'
import { SVGProps } from 'react'

const FacebookFooterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={35}
    height={35}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      opacity={0.8}
      d='M10 35C4.477 35 0 30.523 0 25V10C0 4.477 4.477 0 10 0h15c5.523 0 10 4.477 10 10v15c0 5.523-4.477 10-10 10H10Z'
      fill='#0F1012'
    />
    <g clipPath='url(#a)'>
      <path
        d='M18.765 25.666v-7.45h2.5l.374-2.904h-2.874v-1.854c0-.84.232-1.413 1.439-1.413h1.536V9.446a20.835 20.835 0 0 0-2.24-.114c-2.216 0-3.734 1.353-3.734 3.838v2.141H13.26v2.905h2.507v7.45h2.999Z'
        fill='#fff'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M9.333 9.333h16.333v16.333H9.333z' />
      </clipPath>
    </defs>
  </svg>
)

export default FacebookFooterIcon
