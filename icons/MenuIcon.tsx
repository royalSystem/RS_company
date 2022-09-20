import * as React from 'react'
import { SVGProps } from 'react'

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={50} height={50} {...props}>
    <path d='M0 7.5v5h50v-5Zm0 15v5h50v-5Zm0 15v5h50v-5Z' />
  </svg>
)

export default MenuIcon
