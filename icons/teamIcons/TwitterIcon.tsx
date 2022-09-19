/* eslint-disable max-len */
import * as React from 'react'

type ownProps = {
  isActiveButton: boolean
}

const TwitterIcon = (props: ownProps) => (
  <svg
    width={28}
    height={28}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width={28} height={28} rx={14} fill={props.isActiveButton ? '#75DAB4' : '#0F1012'} />
    <path
      d='M20.222 8.064S19.3 6.95 17.688 7.002c-1.909.063-3.681 1.228-3.478 4.213 0 0-2.875.874-7.348-3.37 0 0-1.44 2.341 1.105 4.547 0 0-.715.197-1.669-.333 0 0-.511 1.977 2.764 3.475 0 0-1.106.313-1.606 0 0 0 .292 2.101 3.234 2.602 0 0-1.512 1.499-5.09 1.457 0 0 7.44 3.797 12.597-1.083 3.683-3.484 3.172-8.136 3.172-8.136s1.084-.333 1.731-1.508c0 0-1.23.385-1.94.322 0 0 1.356-.844 1.461-1.842-.001 0-1.158.822-2.4.718Z'
      fill={props.isActiveButton ? '#0F1012' : '#BFBFBF'}
    />
  </svg>
)

export default TwitterIcon
