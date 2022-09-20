/* eslint-disable max-len */
import * as React from 'react'
import { SVGProps } from 'react'

type ownProps = {
  isActiveButton: boolean
}

const FacebookIcon = (props: ownProps) => (
  <svg
    width={28}
    height={28}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect opacity={0.8} width={28} height={28} rx={14} fill={props.isActiveButton ? '#75DAB4' : '#0F1012'} />
    <path
      d='M17.5 9.301V7.022S15.246 7 15.093 7c-1.018 0-2.483 1.198-2.483 2.557v2.439H10.5v2.587h2.082V21h2.464v-6.447h2.177l.277-2.528h-2.426v-1.857c0-.445.324-.881.812-.881.325.001 1.614.014 1.614.014Z'
      fill={props.isActiveButton ? '#0F1012' : '#BFBFBF'}
    />
  </svg>
)

export default FacebookIcon
