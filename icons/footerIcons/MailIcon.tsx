/* eslint-disable max-len */
import * as React from 'react'
import { SVGProps } from 'react'

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={23}
    height={23}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M20.799 2.92H2.11A2.159 2.159 0 0 0-.045 5.076v12.938c0 1.189.967 2.156 2.156 2.156H20.8c1.189 0 2.156-.967 2.156-2.156V5.076A2.159 2.159 0 0 0 20.8 2.92Zm0 1.437c.098 0 .19.02.275.056l-9.619 8.337-9.62-8.337a.715.715 0 0 1 .276-.056H20.8Zm0 14.375H2.11a.72.72 0 0 1-.718-.718V5.932l9.591 8.312a.718.718 0 0 0 .942 0l9.592-8.312v12.082a.72.72 0 0 1-.72.718Z'
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

export default MailIcon
