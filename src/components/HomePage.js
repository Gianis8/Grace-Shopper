import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'

const HomePage = () => {
  return (
    <div id="homepage">
      <Carousel className="caro">
        <Carousel.Item style={{ height: 60 + "vh" }}>
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
        <Carousel.Item style={{ height: 60 + 'vh' }}>
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
        <Carousel.Item style={{ height: 60 + 'vh' }}>
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
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>About Us</Accordion.Header>
          <Accordion.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Magna ac placerat vestibulum lectus. Sociis natoque penatibus et magnis dis parturient. Mauris cursus mattis molestie a iaculis at erat pellentesque. Tristique senectus et netus et. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Enim diam vulputate ut pharetra sit amet aliquam id diam. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Egestas sed sed risus pretium. Mauris commodo quis imperdiet massa. Non pulvinar neque laoreet suspendisse. Vel pharetra vel turpis nunc eget. Egestas sed tempus urna et pharetra pharetra massa massa. Aliquet enim tortor at auctor. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Integer vitae justo eget magna. Etiam tempor orci eu lobortis.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Buy our Shoes</Accordion.Header>
          <Accordion.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Magna ac placerat vestibulum lectus. Sociis natoque penatibus et magnis dis parturient. Nullam eu rhoncus augue, non porttitor tortor. Phasellus viverra eros ut felis aliquet tempus. Aenean eu tincidunt eros. Nam porta lorem et mauris blandit, quis auctor neque porta. In tortor justo, sagittis at metus vel, efficitur efficitur libero. Donec ac enim at ex posuere iaculis id at tellus. Etiam eu convallis felis. Duis volutpat purus ac est rutrum lacinia. Donec porttitor, sapien eu tempor pulvinar, leo enim elementum libero, vel tempus purus augue at elit. Suspendisse finibus fermentum metus sit amet pharetra. Nullam et gravida ex. Suspendisse porttitor nisl sit amet eros pulvinar, ac porta lacus molestie. Sed vel eros placerat, ultricies dolor eu, aliquam metus. Quisque varius tortor ut convallis laoreet. Phasellus tempus sem tortor, ac volutpat eros pretium at. Nulla pellentesque velit quam, sit amet hendrerit leo ultrices ac. Pellentesque a lacus commodo, blandit felis eu, varius leo. Nullam eget dui nec arcu mattis commodo nec in felis. Duis id tincidunt felis. Donec iaculis nibh a fringilla dictum. Donec scelerisque nisi nec ligula interdum placerat. Suspendisse potenti. Praesent elementum purus nibh, ac dignissim justo iaculis in. Etiam pulvinar pellentesque magna sit amet varius. Praesent sagittis metus neque, sed vulputate urna pellentesque vel. Suspendisse malesuada orci magna, sed pharetra dui venenatis in. Vivamus egestas massa eget quam condimentum, ut laoreet turpis blandit. Sed et erat velit. Maecenas eget ultricies justo. Mauris scelerisque orci vel tortor malesuada tincidunt. Ut nec est nulla. Etiam et elementum velit, sit amet fermentum est. Vestibulum hendrerit malesuada sem at ultricies. Sed eu fermentum est, nec rutrum lacus. Nunc posuere interdum semper. Mauris at risus lectus. Integer id molestie tortor, vel hendrerit metus. Duis vel nisl sapien. Phasellus sed eleifend dui.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div >
  )
}

export default HomePage