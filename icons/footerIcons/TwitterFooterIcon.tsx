/* eslint-disable max-len */
import * as React from 'react'
import { SVGProps } from 'react'

const TwitterFooterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={35}
    height={35}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10 35C4.477 35 0 30.523 0 25V10C0 4.477 4.477 0 10 0h15c5.523 0 10 4.477 10 10v15c0 5.523-4.477 10-10 10H10Z'
      fill='#75DAB4'
    />
    <g clipPath='url(#a)'>
      <path
        d='M14.248 24.509c6.604 0 10.216-5.472 10.216-10.216 0-.155-.003-.31-.01-.464a7.305 7.305 0 0 0 1.79-1.86 7.165 7.165 0 0 1-2.061.566 3.603 3.603 0 0 0 1.579-1.986 7.198 7.198 0 0 1-2.28.871 3.59 3.59 0 0 0-6.119 3.274 10.194 10.194 0 0 1-7.4-3.75 3.588 3.588 0 0 0 1.112 4.793 3.562 3.562 0 0 1-1.627-.45v.046a3.591 3.591 0 0 0 2.88 3.52 3.603 3.603 0 0 1-1.622.062 3.594 3.594 0 0 0 3.354 2.494 7.203 7.203 0 0 1-4.459 1.537c-.29 0-.575-.017-.856-.05a10.163 10.163 0 0 0 5.503 1.613'
        fill='#0F1012'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M8.167 8.167h18.667v18.667H8.167z' />
      </clipPath>
    </defs>
  </svg>
)

export default TwitterFooterIcon
