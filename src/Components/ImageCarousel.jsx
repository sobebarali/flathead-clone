import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ImageCarousel = () => {
  return (
    <Carousel autoPlay width="100%">
      <div>
        <img
          style={{ padding: "20px" }}
          alt=""
          src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/FH_Banner3jpg_41cafa8d-1e9b-4545-9cd6-fa20b38961b0.jpg?v=1655199681"
        />
      </div>
      <div>
        <img
          style={{ padding: "20px" }}
          alt=""
          src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Linen_banner2.jpg?v=1655047319"
        />
      </div>
      <div>
        <img
          style={{ padding: "20px" }}
          alt=""
          src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/KoolTex_banner2.jpg?v=1655047319"
        />
      </div>
      <div>
        <img
          style={{ padding: "20px" }}
          alt=""
          src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Banana_banner1.jpg?v=1655047319"
        />
      </div>
      <div>
        <img
          style={{ padding: "20px" }}
          alt=""
          src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Softknit_banner1.jpg?v=1655047319"
        />
      </div>
    </Carousel>
  )
}

export default ImageCarousel
