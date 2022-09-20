import { FC } from 'react'
import Carousel from 'react-multi-carousel'
import CustomDot from './componets/CustomDot'

type CustomCarouselProps = {
  renderItems: ()=>void
  isDotsShow: boolean
  isArrowsShow: boolean
  containerClass: string
  itemsClass: string
  items: Array<any>
  customResponsiveProps?: any
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1023 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 750 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1,
  },
}

const CustomCarousel: FC<CustomCarouselProps> = ({
  renderItems,
  isDotsShow,
  isArrowsShow,
  containerClass,
  itemsClass,
  items,
  customResponsiveProps = responsive,
}) => {
  CustomCarousel.defaultProps = {
    customResponsiveProps: responsive,
  }
   
  return (
    <Carousel
      responsive={customResponsiveProps}
      ssr
      showDots={isDotsShow}
      arrows={isArrowsShow}
      slidesToSlide={1}
      containerClass={containerClass}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      itemClass={itemsClass}
      customDot={<CustomDot items={items.length} onClick={() => {}} />}
    >
      {renderItems()}
    </Carousel>
  )
}

export default CustomCarousel
