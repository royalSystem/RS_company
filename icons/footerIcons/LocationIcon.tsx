/* eslint-disable max-len */
import * as React from 'react'
import { SVGProps } from 'react'

const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={23}
    height={23}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M18.309 3.939c-1.396-2.41-3.875-3.88-6.632-3.937a8.606 8.606 0 0 0-.354 0C8.566.058 6.086 1.53 4.69 3.939a8.007 8.007 0 0 0-.105 7.911l5.704 10.44.007.014c.251.436.7.696 1.203.696.502 0 .951-.26 1.202-.697l.008-.013 5.704-10.44a8.007 8.007 0 0 0-.105-7.911Zm-6.81 6.483a3.238 3.238 0 0 1-3.234-3.234A3.238 3.238 0 0 1 11.5 3.953a3.238 3.238 0 0 1 3.234 3.235 3.238 3.238 0 0 1-3.234 3.234Z'
        fill='#75DAB4'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h23v23H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default LocationIcon
