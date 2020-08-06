const description = `
    A few new crossbags for keeping documents, accessories and other 
    stuffs have been added to the collection. We’re sure you’d love 
    them. A few new crossbags for keeping documents, accessories and 
    other stuffs have been added to the collection. We’re sure you’d 
    love them. A few new crossbags for keeping documents, accessories 
    and other stuffs have been added to the collection. We’re sure you’d...
`


const products = [
    // BACKPACKS
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
        imgSrc: 'https://lh3.googleusercontent.com/Z0KQbaDVR6Ca4uxHvQJwxaI7I5UkhyFaIERTp8CURmOtoTl3ZM33W0-VS3aaGWJty907Ynaiumgn-PI5-KKqb9nADm2M-lHcx7QStxfwsrng8f2H5WBKybXHLJnUSQ_kCLcP8mpSTh5OfG2v9Uz4tMGfA1kuumwZEVjR5ZozVlvRrYrP4aVZbDiH0EZLIo9swUwIg8XL3j8f0tRQJIS9--TqvPv2dGo-EsDpBWaLsOYF7X1LQC_arK0q4R5MLSnfu180612WHX4kF0NP6QoJkT7REhYwG3bWSVQgnBWqnyVl8RshMh5oTvud24K32fCfPbL8zv2Lw1XQ_i-TRPTGCs_1FaxWKXC9F6ysI6VB1jW9lo8RbXyB0685fU-5iy-UGOrtwwg9LWGDb_omhrB1QBR-14Wztgvym2WaUb9ejG3R9sgPNKWu3D6_vkV-EqB98Lrl3NnEbiAIIDMHR2_EQ_mpTxy4dgOgCU1Do8bMQXB_K9d7wqeatA-LQsc2bbjUQxx23vm-vHxktWIS_f_oref_gKi2uhabPDRCVI2UIS40F4dk5YviArlD9V7pAdi9bGrJCNTIO8zQFrYVHLODOZ015q4peqDqCMKiFMHS5oz6-PMWnQY2qTHxfGfzm0xEUdT5sp2gnoXnP3Qj1lmJGff3dCjwH_VAQDlKCqroqtCRiDPIwwCDweH7Uu7A=s800-no?authuser=0',
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
        category: ['backpacks', ],
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
        category: [['accessories', 'new in']],
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
        name: "Travel brown leather luggage.",
        imgSrc: 'https://lh3.googleusercontent.com/BgTMSMPWR7Gyb1z1TAf5HnnaL6tseYfw3PTFG2Gm30Wmes4B7p3Rzik_oUUYDv763a8ebEK-kZCURPBF7k0NF1nxuiVYcAoXZs74txhpsumfHm3bQwPJCCLDEnL_dAe3n4aVetETkMQcJYBANxucRLDYZpDGRDbrjBRU4--vPr7Vk0U_M9kO3tA5ue8g-JhxJ4lDIpMC82t778jSvv_HSktR2HFa53TPUR2s5-C-_B9xVpKAIeEdzSAoDk-EvrOUQEvOCyXI3dskMsHAOlnqKUFZtIvzF7GnmQdFFhLh-QbNXV6bTLruK4m_EZqN1xaCkMWsIPn_KxxLmpytaIOhA5GIhA055bTmV8M0aGzkOAMgU6ho93Y4IN3Wd1iW32_sGdQHus4GsFkhP_-WXMtfqzfL5ThAaUgtePnatEHyGB2ZMrLRwZlELQwfbxhR47tAvMpxsahcdhCQeK_eHF3t8OMvscEQLTDK2HqFe0eZRAE4cgQaHHJscMJCRtSnvMG1mt04y9u6AOiS6tc5E-liDi5mBYMpG353rZZDkqgKieeAY-ycqFRYvt7sxkOB5FKeWIp38tQg4Zryp8YTp0SbCcSHeazHWT0EOPhsjabddOSEuPOYB9oJeOJboaLKyL7QXozlGfteC9A6bPJpF8rGMOo0LV-Jv8Yver-QniKmz8L3QEdzKCaRdlKrnBuZ=s800-no?authuser=0',
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
        id: 'p12',
        name: 'The Self Adjusting Watch',
        imgSrc: 'https://lh3.googleusercontent.com/0qnJy0GMHv8-7M4-CUVIlhNeSv3ge7o2T2dbZQB9CzW7ApJ-6ucvAB9GL7w-ouslZhw0NNrUv7Fk0WUbq6uhME2o1nAfKO38-qVv4V-5Q0yxyQz8XLtBRXyji6yirRin-M9aRWh1chUheBzzO74WFOxOX4P4yQqfm3_GFYClavekF19m-k4O4jYWTsBYfFusZe2QNwSxqOXEiT6Fl1Fzoi512GWK_jZhLFaNUdN0h4IPofahwMN7V676q9TkjbLGDlEFfAtB3_oxju_eHjOL3DMb2t40pcYAQM8clSC0NwKNaSbeRrWlaNp5y21mzg1s-P8BCtteQdC5NLp85Zxbqj-rUnunt5IlaOUgvyROcLr9gSpogXyGCfwsNsHltUegTctrAom4bAV5h_torBhRpthKI7T-DyfXQz2pwPtMvIrJ2u1Iy4iFSsXqXeDfiDVtxLtSlOu-OcDvUaC2fVxUp_sKy0etkzjkqQJ_CpQ0YVI5XGu2eOYH4YZJ-t12z_jhkpEqjqgzsxiuA5_utF9ynoMr8h6ajyfq7uA0lYv4FukgLnUl6sjVITgN4QqLU292dR4RTMkEHm31v2jkOc6CamPZXdrxvBPd0NNAtu4vii1yACAW2x5yRUUU2ZROC3REDbF5fkZ4FSsmz-V_segWEXnu6D3pkiC8bXmfsCdBNqhJvX33S2lc6VhjhbhQ=w800-h801-no?authuser=0',
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
    },,
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
        category: [, 'new in', 'crossbody bags', 'accessories'],
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