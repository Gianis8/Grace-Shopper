import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'

const HomePage = () => {
  return (
    <div id="home">
      <div id="homepage">
        <Carousel className="caro">
          <Carousel.Item className='caro'>
            <img
              className="d-block w-100 h-100"
              src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/4OWZloS7J48Ai305bul14l/0a1bbc5e304454a8803b53f2a5684ea1/AB006OM_SHOE_ANGLE_GLOBAL_MENS_WOOL_RUNNER_MIZZLE2_DARK_GREY_NATURAL_WHITE.png"
              alt="Mizzles"
            />
            <Carousel.Caption>
              <h3 className="caroH3">Mizzles</h3>
              <p>Style, Comfort</p>
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item className='caro'>
            <img
              className=" w-100 h-100"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png"
              alt="AirForce1"
            />
            <Carousel.Caption>
              <h3 className="caroH3">Air Force 1</h3>
              <p>First Class</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='caro'>
            <img
              className="d-block w-100 h-100"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b155760-7f13-4feb-8200-c5ec59a1166f/lebron-19-basketball-shoes-VkqHgW.png"
              alt="Lebron 19"
            />

            <Carousel.Caption>
              <h3 className="caroH3">Lebron 19</h3>
              <p>
                Dominate like Lebron
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="abouts">
        <div id="aboutCard">
          <h3>About Us</h3>
          <p> sapien faucibus et molestie ac feugiat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Egestas sed sed risus pretium. Mauris commodo quis imperdiet massa. Non pulvinar neque laoreet suspendisse. Vel pharetra vel turpis nunc eget. Egestas sed tempus urna et pharetra pharetra massa massa. Aliquet enim tortor at auctor. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Integer vitae justo eget magna. Etiam tempor orci eu lobortis.</p>
        </div>
        <div id="buyCard">
          <h3>Buy our Shoes</h3>
          <p> leo enim elementum libero, vel tempus purus augue at elit. Suspendisse finibus fermentum metus sit amet pharetra. Nullam et gravida ex. Suspendisse porttitor nisl sit amet eros pulvinar, ac porta lacus molestie. Sed vel eros placerat, ultricies dolor eu, aliquam metus. Quisque varius tortor ut convallis laoreet. Phasellus tempus sem tortor, ac volutpat eros pretium at. Nulla pellentesque velit quam, sit amet hendrerit leo ultrices ac. </p>
        </div>
        <div id="saleCard">
          <h3>Sale!</h3>
          <p> sapien faucibus et molestie ac feugiat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Egestas sed sed risus pretium. Mauris commodo quis imperdiet massa. Non pulvinar neque laoreet suspendisse. Vel pharetra vel turpis nunc eget. Egestas sed tempus urna et pharetra pharetra massa massa. Aliquet enim tortor at auctor. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Integer vitae justo eget magna. Etiam tempor orci eu lobortis.</p>
        </div>
      </div>
  </div>
  )
}

export default HomePage