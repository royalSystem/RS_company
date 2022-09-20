/* eslint-disable max-len */
import * as React from 'react'
import { SVGProps } from 'react'

type ownProps = {
  isActiveButton: boolean
}

const InstagramIcon = (props: ownProps) => (
  <svg
    width={28}
    height={28}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect opacity={0.8} width={28} height={28} rx={14} fill={props.isActiveButton ? '#75DAB4' : '#0F1012'} />
    <path
      d='M16.675 21h-5.35A4.329 4.329 0 0 1 7 16.676v-5.351A4.329 4.329 0 0 1 11.325 7h5.35A4.329 4.329 0 0 1 21 11.325v5.35A4.33 4.33 0 0 1 16.675 21Zm-5.35-12.439a2.767 2.767 0 0 0-2.765 2.764v5.35a2.767 2.767 0 0 0 2.764 2.764h5.351a2.767 2.767 0 0 0 2.764-2.764v-5.35a2.767 2.767 0 0 0-2.764-2.764h-5.35Z'
      fill={props.isActiveButton ? '#0F1012' : '#BFBFBF'}
    />
    <path
      d='M14 17.577A3.581 3.581 0 0 1 10.423 14 3.581 3.581 0 0 1 14 10.422 3.581 3.581 0 0 1 17.578 14 3.581 3.581 0 0 1 14 17.577Zm0-5.75A2.176 2.176 0 0 0 11.827 14c0 1.198.975 2.173 2.173 2.173A2.176 2.176 0 0 0 16.173 14c0-1.2-.975-2.174-2.173-2.174Z'
      fill={props.isActiveButton ? '#0F1012' : '#BFBFBF'}
    />
    <path
      d='M13.641 10.819a.605.605 0 1 0 0-1.21.605.605 0 0 0 0 1.21Z'
      fill={props.isActiveButton ? '#0F1012' : '#BFBFBF'}
    />
  </svg>
)

export default InstagramIcon
