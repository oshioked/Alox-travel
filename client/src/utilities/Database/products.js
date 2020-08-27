const description = `
    A few new crossbags for keeping documents, accessories and other 
    stuffs have been added to the collection. We’re sure you’d love 
    them. A few new crossbags for keeping documents, accessories and 
    other stuffs have been added to the collection. We’re sure you’d 
    love them. A few new crossbags for keeping documents, accessories 
    and other stuffs have been added to the collection. We’re sure you’d...
`


const products = [
    {
        id: 'p17',
        name: "Men's Travel Flight Bag Handbag Crazy Horse Leather Vintage Luggage Bag",
        imgSrc: 'https://ae01.alicdn.com/kf/HTB1TAjkaQP2gK0jSZPxq6ycQpXaL/MAHEU-45cm-Genuine-Leather-Men-s-Travel-Flight-Bag-Handbag-Crazy-Horse-Leather-Vintage-Crossbody-Hand.jpg',
        category: ['luggages', 'new in'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p10',
        name: 'New Fire Backpack',
        imgSrc: 'https://i.ibb.co/vBpy3BQ/firebackpack-1.png',
        category: ['backpacks', 'new in'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p1',
        name: 'Dive backpack with brown straps and buckles.',
        imgSrc: 'https://ae01.alicdn.com/kf/H7380c4a3a32040198fd985b0fdb50f94p/Large-Capacity-Men-s-Backpack-Travel-Bag-Men-Casual-Computer-Bags-Male-Full-Leather-College-Backpacks.jpg',
        category: ['backpacks' ],
        discount: '-25%',
        highPrice: '$ 53.25',
        description: description,
        price: '$ 53.25',
        quantityAvailable: '10'
    },
    {
        id: 'p2',
        name: 'Go backpack with brown straps and buckles.',
        imgSrc: 'https://ae01.alicdn.com/kf/HTB13yaiacvrK1Rjy0Feq6ATmVXaO/Retro-Genuine-Leather-Men-s-Backpack-Large-Capacity-Laptop-Bag-School-Backpack-Male-Shoulder-Bags-Brown.jpg',
        category: ['backpacks', 'new in'],
        discount: '-25%',
        highPrice: '$ 53.25',
        description: description,
        price: '$ 53.25',
        quantityAvailable: '10'
    },
    {
        id: 'p3',
        name: 'Vintage bag Canvas Leather Backpacks for Men Laptop Daypacks Waterproof Canvas',
        imgSrc: 'https://ae01.alicdn.com/kf/H4a469f8b9b2145ecb2a3b17cff7e6af4n/Vintage-bag-Canvas-Leather-Backpacks-for-Men-Laptop-Daypacks-Waterproof-Canvas-Rucksacks-Large-Waxed-Mountaineering-Travel.jpg',
        category: ['backpacks'],
        discount: '-25%',
        highPrice: '$ 53.25',
        description: description,
        price: '$ 53.25',
        quantityAvailable: '10'
    },
    {
        id: 'p4',
        name: 'Vintage Luxury Vintage Canvas Backpacks for Men Oil Wax Canvas Leather',
        imgSrc: 'https://ae01.alicdn.com/kf/HLB13aDGbjLuK1Rjy0Fhq6xpdFXa0/80L-Super-Large-Outdoor-Backpack-Men-Organizer-Travel-Bags-Duffle-Big-Duffel-Weekend-Vs-Bag-Luggage.jpg',
        category: ['backpacks'],
        discount: '-25%',
        highPrice: '$ 53.25',
        description: description,
        price: '$ 53.25',
        quantityAvailable: '10'
    },
    {
        id: 'p5',
        name: 'Bonita backpack with brown straps and buckles.',
        imgSrc: 'https://ae01.alicdn.com/kf/H06e40df3d962419eaf5a8d47a2ebfea0w/CARRYLOVE-15-famous-brand-men-s-Backpacks-laptop-genuine-leather-laptop-waterproof-business-travel-Back-Pack.jpg',
        category: ['backpacks', 'new in'],
        discount: '-25%',
        highPrice: '$ 53.25',
        description: description,
        price: '$ 53.25',
        quantityAvailable: '10'
    },
    {
        id: 'p6',
        name: 'Women backpack mochila feminina genuine leather Backpacks For Teenage Girls',
        imgSrc: 'https://ae01.alicdn.com/kf/HTB1O63fV8LoK1RjSZFuq6xn0XXao/Women-backpack-mochila-feminina-genuine-leather-Backpacks-For-Teenage-Girls-Bagpack-Drawstring-Bag-Holographic-Backpack.jpg',
        category: ['backpacks'],
        discount: '-25%',
        highPrice: '$ 53.25',
        description: description,
        price: '$ 53.25',
        quantityAvailable: '10'
    },
    {
        id: 'p7',
        name: 'Classic owl pattern women backpack',
        imgSrc: 'https://ae01.alicdn.com/kf/HTB13du9pByWBuNkSmFPq6xguVXaW/More-colors-Classic-owl-pattern-women-backpack-vintage-lovers-travel-backpack-casual-canvas-backpack.jpg',
        category: ['backpacks', 'new in'],
        discount: '-25%',
        highPrice: '$ 53.25',
        description: description,
        price: '$ 53.25',
        quantityAvailable: '10'
    },
    {   id: 'p8',
        name: 'Original Vintage Cotton Bags Hemp Travel Backpack ',
        imgSrc: 'https://ae01.alicdn.com/kf/Hc713849cd7e146128e6d848e78f088e7v/Original-Vintage-Cotton-Bags-Hemp-Travel-Backpack-casual-large-Size-Lovers-Backpack-Owl-Pattern-Bags.jpg',
        category: ['backpacks', 'new in'],
        discount: '-25%',
        highPrice: '$ 53.25',
        description: description,
        price: '$ 53.25',
        quantityAvailable: '10'
    },
    {
        id: 'p9',
        name: 'Backpack set',
        imgSrc: require('./images/backpack set.png'),
        category: ['accessories', 'new in'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: true,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p10',
        name: 'Brown leather bag',
        imgSrc: require('./images/brown leather bag.png'),
        category: ['accessories'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: true,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p11',
        name: 'Cotton backpack',
        imgSrc: require('./images/cotton backpack.png'),
        category: ['accessories', 'new in'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: true,
        price: '$ 85',
        quantityAvailable: '110'
    } ,
    {
        id: 'p17',
        name: "Travel brown leather luggage",
        imgSrc: 'https://i.ibb.co/wp3sJPN/travel-Lengend.png',
        category: ['luggages', 'new in'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p12',
        name: 'Luggage organizer',
        imgSrc: require('./images/Luggage organizer.png'),
        category: ['accessories','new in'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: true,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p10',
        name: 'Brown leather bag',
        imgSrc: require('./images/brown leather bag.png'),
        category: ['accessories'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: true,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p9',
        name: 'Backpack set',
        imgSrc: require('./images/backpack set.png'),
        category: ['accessories', 'new in'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: true,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p12',
        name: 'The Self Adjusting Watch',
        imgSrc: 'https://i.ibb.co/VgRLkBS/watch-1.png',
        category: ['accessories','new in'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        price: '$ 85',
        quantityAvailable: '110'
    },
    
    // LUGGAGAES
    {
        id: 'p14',
        name: 'Waterproof Hand Luggage Bag Large Capacity',
        imgSrc: 'https://ae01.alicdn.com/kf/H73d22b087ea6459f94606f28f49d6f52H.jpg',
        category: ['luggages'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p15',
        name: 'Women Travel Bag Hand Luggage Bag Men crossbody Duffle Bag',
        imgSrc: 'https://ae01.alicdn.com/kf/H114e437f37c54ff2979a9a9007f10c26S/Women-Travel-Bag-Hand-Luggage-Bag-Men-crossbody-Duffle-Bag-Tote-Weekend-Bag-Overnight-Canvas-Carry.jpg',
        category: ['luggages', 'new in', 'crossbody bags'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p13',
        name: 'Brown Bucket Travel Bags Large Crazy Horse',
        imgSrc: 'https://ae01.alicdn.com/kf/H27a511091ab14f6283551dbae41aa4fat/Xiao-P-Brand-Retro-Brown-Bucket-Travel-Bags-Large-Crazy-Horse-PU-Leather-Handbags-Shoulder-Bag.jpg',
        category: ['luggages', 'crossbody bags'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p16',
        name: 'Leather Bag Soft',
        imgSrc: 'https://ae01.alicdn.com/kf/H2797885c4bf04b399616ca722d086506n/MAHEU-Hot-Genuine-Leather-Men-Women-Travel-Bag-Soft-Real-Leather-Cowhide-Carry-Hand-Luggage-Bags.jpg',
        category: ['luggages'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    
    {
        id: 'p17',
        name: "Genuine Leather Men Travel Bags Shoe Pocket",
        imgSrc: 'https://ae01.alicdn.com/kf/H824878a79ec249fe89b24ebde71563d8Q/MAHEU-Genuine-Leather-Men-Travel-Bags-Shoe-Pocket-Hand-Luggage-Bag-Large-Capacity-Outdoor-Male-Duffle.jpg',
        category: ['luggages'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p17',
        name: "Super Large Capacity Women's Travel Bag Waterproof",
        imgSrc: 'https://ae01.alicdn.com/kf/Hf6b4cb80dab644da8c2b7627f69d2cdfl/Super-Large-Capacity-Women-s-Travel-Bag-Waterproof-Men-Duffel-Bags-Trip-Weekender-Overnight-Hand-Luggage.jpg',
        category: ['luggages'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p17',
        name: "Oxford Travel Bag Women men Hand Luggage Bags Case",
        imgSrc: 'https://ae01.alicdn.com/kf/H972f3fd88cf545a883589ed8d945b70d5/Fashion-Oxford-Travel-Bag-Women-men-Hand-Luggage-Bags-Case-Big-Travel-Duffle-Weekend-Bag-Male.jpg',
        category: ['luggages', 'new in', 'crossbody bags'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    // BACKPACKS
    {
        id: 'p17',
        name: "Men Original Leather Casual Fashion Chest Sling Bag",
        imgSrc: 'https://cbu01.alicdn.com/img/ibank/2019/092/977/11332779290_2068518898.jpg',
        category: [ 'crossbody bags', 'accessories'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p17',
        name: " Spiral Coil Sketchbook Kraft Paper Journal",
        imgSrc: 'https://ae01.alicdn.com/kf/Hab91e8995f6d4f588c84bd9b7d3e81aah/Retro-Spiral-Coil-Sketchbook-Kraft-Paper-Notebook-Sketch-Painting-Diary-Journal-Student-Note-Pad-Book-Memo.jpg',
        category: ['accessories', 'new in'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p17',
        name: "Real Leather men Casual Design Small Waist Bag ",
        imgSrc: 'https://ae01.alicdn.com/kf/H4f2323c8281a434a8380d55ff9af03a6o/Real-Leather-men-Casual-Design-Small-Waist-Bag-Cowhide-Fashion-Hook-Bum-Bag-Waist-Belt-Pack.jpg',
        category: ['new in', 'crossbody bags', 'accessories'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p17',
        name: "Genuine Nature Cow Skin Vintage Handbag Handmade Women Retro Real Leather Cross Body ",
        imgSrc: 'https://ae01.alicdn.com/kf/HTB1tl3XNFXXXXaEXpXXq6xXFXXXd/Genuine-Nature-Cow-Skin-Vintage-Handbag-Handmade-Women-Retro-Real-Leather-Cross-Body-Cowhide-Shoulder-Big.jpg',
        category: ['crossbody bags'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p17',
        name: "Original Leather Male Design Casual Shoulder messenger bag",
        imgSrc: 'https://ae01.alicdn.com/kf/Hbd05270afadf4a259220984dd71739dcG/Original-Leather-Male-Design-Casual-Shoulder-messenger-bag-cowhide-Fashion-8-Tote-Crossbody-Mochila-Satchel-bag.jpg',
        category: ['crossbody bags', 'new in', 'accessories'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p17',
        name: "Natural Skin Cross Body Messenger Shoulder Bag Tote Deer Pattern",
        imgSrc: 'https://ae01.alicdn.com/kf/HLB1nPrkX.LrK1Rjy0Fjq6zYXFXah/Natural-Skin-Cross-Body-Messenger-Shoulder-Bag-Tote-Deer-Pattern-High-Quality-Women-Genuine-Leather-Top.jpg',
        category: ['crossbody bags'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p17',
        name: "Messenger Bags Nylon Waterproof Big Shoulder Bag",
        imgSrc: 'https://ae01.alicdn.com/kf/H40009506a7fe41859f11c508879d7d6db/Men-Messenger-Bags-Nylon-Waterproof-Big-Shoulder-Bag-Famous-Designer-Brands-High-Quality-Men-s-Hip.jpg',
        category: ['crossbody bags'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    },
    {
        id: 'p17',
        name: " Multifunctional Shoulder Messenger Bag with Reflective Strip",
        imgSrc: 'https://ae01.alicdn.com/kf/H636a6fd9cf5f4026830e6fa9c0a8fbf21/Men-Multifunctional-Shoulder-Messenger-Bag-with-Reflective-Strip-Waterproof-Nylon-Travel-Handbag-Large-Capacity-Storage-Bags.jpg',
        category: ['crossbody bags', 'new in'],
        discount: '25%',
        highPrice: '$ 140',
        description: description,
        recommended: false,
        price: '$ 85',
        quantityAvailable: '110'
    }
   
]

export default products;