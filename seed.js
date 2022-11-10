
const { db, user, order, shoe, order_shoe } = require('./server/db/index')
// const shoe = require('./server/db/shoe')


const addSomething = async () => {
  // await TableName.create(row to add)
  await db.sync({ force: true })
 
  const user1 = {
    username: "Joseph123",
    email: "jd123@email.com",
    password: "password123",
    
  }

  const user2 = {
    username: "Mudassar456",
    email: "md456@email.com",
    password: "password456",
    
  }

  const user3 = {
    username: "Ian789",
    email: "ih456@email.com",
    password: "password789",
    
  }

  const user4 = {
    username: "Steve246",
    email: "sz246@email.com",
    password: "password246",
    
  }


  const order1 = [{
    cost: "70.99",
    shippingAddress: "123 Delivery Street, New York, NY. 10001",
    status: "complete",
    userId: 1,
  }, {
    cost: "109.95",
    shippingAddress: "2468 Green Ave. Apt 1A, Chicago, IL, 56798",
    status: "cart",
    userId: 1
  }, {
    cost: "56.05",
    shippingAddress: "12469 Brown Drive, Dallas, TX, 32215",
    status: "complete",
    userId: 2
  }, {
    cost: "19.95",
    shippingAddress: "245 Bridge Court. Apt 7D, New Haven, CT, 23526",
    status: "cart",
    userId: 3
  }, {
    cost: "209.95",
    shippingAddress: "4563 Evergreen Dr., Charleston, SC, 63632",
    status: "complete",
    userId: 4
  }, {
    cost: "449.99",
    shippingAddress: "65472 E 74th St. Unit 1849, New York, NY, 10037",
    status: "complete",
    userId: 2
  }, {
    cost: "69.01",
    shippingAddress: "2468 Green Ave. Apt 1A, Chicago, IL, 56798",
    status: "cart",
    userId: 4
  }]

  const shoesSeed = [{
    name: "Mizzles",
    size: 10,
    price: 79.99,
    brand: "All Birds",
    type: "casual",
    color: "Grey",
    description: "Combining cozy ZQ Merino wool and a bio-based water repellent shield, our rain-ready sneaker keeps your feet predictably dry in unpredictable weather.",
    imageUrl: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/4OWZloS7J48Ai305bul14l/0a1bbc5e304454a8803b53f2a5684ea1/AB006OM_SHOE_ANGLE_GLOBAL_MENS_WOOL_RUNNER_MIZZLE2_DARK_GREY_NATURAL_WHITE.png",
  
  }, {
    name: "Air Force 1",
    size: 9.5,
    price: 110.00,
    brand: "Nike",
    type: "athletic",
    color: "White",
    description: "The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png",
  
  }, {
    name: "Lebron 19",
    size: 13.5,
    price: 200.00,
    brand: "Nike",
    type: "athletic",
    color: "Blue/Green",
    description: "LeBron thrives when stakes are high and the pressure’s on. The LeBron 19 harnesses that energy with a locked-in fit and an updated cushioning system. The snug inner sleeve is pulled together by a sculpted overlay that the laces feed through to help prevent the foot from moving inside the shoe. Embedded pods in the tongue and around the collar help reduce weight, keep the ankle aligned, and give players the secure feel and confidence to go all out when the game is on the line.",
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b155760-7f13-4feb-8200-c5ec59a1166f/lebron-19-basketball-shoes-VkqHgW.png",
  
  }, {
    name: "Air Jordan 11 Retro",
    size: 10,
    price: 225.00,
    brand: "Jordan",
    type: "athletic",
    color: "Midnight Navy",
    description: "Let's cut to the chase—the AJ11 is all-time. MJ won 72 games and a title while wearing 'em. Now, the icon returns with velvet detailing and a near-monochromatic colorway. From the slick accents (check out that Jumpman) to its color-matched outsole, this Tinker Hatfield design brings the off-court allure. And for the final touch? Full-length Air cushioning is the cherry on top (er, bottom).",
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4e38e20e-9fde-4322-971e-a88363083be8/air-jordan-11-retro-womens-shoes-KwBKXS.png",
    
  }, {
    name: "Arizona Birkibuc",
    size: 11,
    price: 110.00,
    brand: "Birkenstock",
    type: "casual",
    color: "Mocha",
    description: "An icon of timeless design and legendary comfort, the Arizona sandal has been defining style since 1973. The laid-back look comes in durable Birkibuc® for a brushed, leather-like finish. Complete with legendary BIRKENSTOCK design elements, like a contoured cork-latex footbed for the ultimate in support.",
    imageUrl: "https://www.birkenstock.com/on/demandware.static/-/Sites-master-catalog/default/dw2c766a11/151183/151183_sole.jpg",
    
  }]

  const orderShoe = [{
    unitPrice: 110.00,
    quantity: 1,
  }, {
    unitPrice: 300.87,
    quantity: 2,
  }, {
    unitPrice: 250.56,
    quantity: 2, 
  }, {
    unitPrice: 546.98,
    quantity: 4,
  }]

  await user.create(user1);
  await user.create(user2);
  await user.create(user3);
  await user.create(user4);

  await Promise.all(order1.map(orderRow => order.create(orderRow)))
  await Promise.all(shoesSeed.map(shoesRow => shoe.create(shoesRow)))
  await Promise.all(orderShoe.map(orderShoeRow => order_shoe.create(orderShoeRow)))
}



const seed = async () => {
  try {
    await db.sync({ force: true })
    await addSomething()
  } catch (err) {
    console.log(err)
  }
}

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

async function runSeed() {
  try {
    await seed()
    console.log('Seeding success!')
  } catch (err) {
    console.error('Oh noes! Something went wrong!')
    console.error(err)
  } finally {
    db.close()
  }
}

if (require.main === module) {
  runSeed()
}
