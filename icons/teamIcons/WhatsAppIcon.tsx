/* eslint-disable max-len */
import * as React from 'react'
import { SVGProps } from 'react'

type ownProps = {
  isActiveButton: boolean
}

const WhatsAppIcon = (props: ownProps) => (
  <svg
    width={28}
    height={28}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect opacity={0.8} width={28} height={28} rx={14} fill={props.isActiveButton ? '#75DAB4' : '#0F1012'} />
    <path
      d='M13.999 21a6.949 6.949 0 0 1-3.961-1.229l-2.835 1.115.998-2.966A6.951 6.951 0 0 1 7 14c0-1.87.728-3.627 2.05-4.95A6.955 6.955 0 0 1 14 7c1.87 0 3.628.728 4.95 2.05A6.955 6.955 0 0 1 21 14c0 1.87-.728 3.628-2.05 4.95A6.966 6.966 0 0 1 14 21Zm-3.874-1.934.138.1A6.328 6.328 0 0 0 14 20.377a6.384 6.384 0 0 0 6.376-6.376A6.384 6.384 0 0 0 14 7.624 6.384 6.384 0 0 0 7.622 14 6.33 6.33 0 0 0 8.8 17.69l.091.13-.672 1.995 1.906-.749Z'
      fill={props.isActiveButton ? '#0F1012' : '#BFBFBF'}
    />
    <path
      d='M17.941 15.765a.287.287 0 0 1 .074.243c-.08.517-.533 2.416-2.814 1.608-2.63-.93-4.532-2.566-5.14-4.747-.61-2.181 1.146-2.759 1.515-2.63.368.128 1.283 1.748 1.155 2.1-.129.354-.746.69-.726 1.063.017.316 2.345 2.635 3.007 2.45.455-.127.502-.83.95-.91.41-.073 1.583.404 1.979.823Z'
      fill={props.isActiveButton ? '#0F1012' : '#BFBFBF'}
    />
  </svg>
)

export default WhatsAppIcon
