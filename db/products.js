// ===================================================================
// Product Database
// ===================================================================
const categories = ['Bread', 'Roll', 'Buns', 'Specialty'];

const products = [
  {
    id: 1,
    name: 'Baguettes',
    description:
      'A classic French baguette with a crispy crust and soft interior.',
    image: [
      {
        alt: 'A classic French baguette with a crispy crust and soft interior.',
        src: './assets/images/bread/bread_baguette.webp',
      },
    ],
    price: {
      regular: 7,
      discountPercentage: null,
    },
    category: ['Bread'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 2,
    name: 'Fig & Hazelnut',
    description:
      'A delightful bread with sweet figs and crunchy hazelnuts, perfect for those seeking something unique.',
    image: [
      {
        alt: 'A delightful bread with sweet figs and crunchy hazelnuts, perfect for those seeking something unique.',
        src: './assets/images/bread/bread_fikon_och_hasselnot.webp',
      },
    ],
    price: {
      regular: 7,
      discountPercentage: null,
    },
    category: ['Bread'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 3,
    name: 'Fruit & Nut',
    description:
      'A juicy bread filled with mixed fruits and nuts, a flavorful combination.',
    image: [
      {
        alt: 'A juicy bread filled with mixed fruits and nuts, a flavorful combination.',
        src: './assets/images/bread/bread_frukt_och_not.webp',
      },
    ],
    price: {
      regular: 11,
      discountPercentage: null,
    },
    category: ['Bread'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 4,
    name: 'Danish Rye Bread',
    description:
      'A traditional Danish rye bread with deep flavor and good saltiness.',
    image: [
      {
        alt: 'A traditional Danish rye bread with deep flavor and good saltiness.',
        src: './assets/images/bread/bread_dansken_ragbrod.webp',
      },
    ],
    price: {
      regular: 8,
      discountPercentage: null,
    },
    category: ['Bread'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 5,
    name: 'Levain',
    description:
      'A sourdough bread with a delightful sourness and aromatic character.',
    image: [
      {
        alt: 'A sourdough bread with a delightful sourness and aromatic character.',
        src: './assets/images/bread/bread_levain.webp',
      },
    ],
    price: {
      regular: 5,
      discountPercentage: null,
    },
    category: ['Bread'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 6,
    name: 'Pumpkin & Cranberry',
    description:
      'A bread that combines pumpkin and cranberries in a festival of flavors.',
    image: [
      {
        alt: 'A bread that combines pumpkin and cranberries in a festival of flavors.',
        src: './assets/images/bread/bread_pumpa_och_tranbar.webp',
      },
    ],
    price: {
      regular: 6,
      discountPercentage: null,
    },
    category: ['Bread'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 7,
    name: 'Cheese Roll',
    description:
      'A soft and cheesy roll that satisfies the taste buds of cheese lovers.',
    image: [
      {
        alt: 'A soft and cheesy roll that satisfies the taste buds of cheese lovers.',
        src: './assets/images/bread_rolls/bread_roll_ost.webp',
      },
    ],
    price: {
      regular: 11,
      discountPercentage: null,
    },
    category: ['Roll'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 8,
    name: 'Seed Roll',
    description:
      'A healthy and crunchy roll full of various seeds for extra crunch.',
    image: [
      {
        alt: 'A healthy and crunchy roll full of various seeds for extra crunch.',
        src: './assets/images/bread_rolls/bread_roll_fro.webp',
      },
    ],
    price: {
      regular: 12,
      discountPercentage: null,
    },
    category: ['Roll'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 9,
    name: 'Levain Roll',
    description:
      'A mini version of the Levain sourdough bread, perfect as a snack.',
    image: [
      {
        alt: 'A mini version of the Levain sourdough bread, perfect as a snack.',
        src: './assets/images/bread_rolls/bread_roll_levain.webp',
      },
    ],
    price: {
      regular: 14,
      discountPercentage: null,
    },
    category: ['Roll'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 10,
    name: 'Parmesan Roll',
    description:
      "A roll with the taste of Italian Parmesan cheese, a cheese lover's dream.",
    image: [
      {
        alt: "A roll with the taste of Italian Parmesan cheese, a cheese lover's dream.",
        src: './assets/images/bread_rolls/bread_roll_parmegiano.webp',
      },
    ],
    price: {
      regular: 7,
      discountPercentage: null,
    },
    category: ['Roll'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 11,
    name: 'Pumpkin & Cranberry Roll',
    description: 'A small piece of autumn with pumpkin and tart cranberries.',
    image: [
      {
        alt: 'A small piece of autumn with pumpkin and tart cranberries.',
        src: './assets/images/bread_rolls/bread_roll_pumpa_och_tranbar.webp',
      },
    ],
    price: {
      regular: 11,
      discountPercentage: null,
    },
    category: ['Roll'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 12,
    name: 'Sesame Seed Roll',
    description:
      'A classic roll covered with sesame seeds for a nutty flavor and crunchy surface.',
    image: [
      {
        alt: 'A classic roll covered with sesame seeds for a nutty flavor and crunchy surface.',
        src: './assets/images/bread_rolls/bread_roll_sesam.webp',
      },
    ],
    price: {
      regular: 10,
      discountPercentage: null,
    },
    category: ['Roll'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 13,
    name: 'Black Sesame Roll',
    description:
      'A roll with an intense flavor of black sesame seeds, perfect for those who love contrasts.',
    image: [
      {
        alt: 'A roll with an intense flavor of black sesame seeds, perfect for those who love contrasts.',
        src: './assets/images/bread_rolls/bread_roll_svart_sesam.webp',
      },
    ],
    price: {
      regular: 5,
      discountPercentage: null,
    },
    category: ['Roll'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 14,
    name: 'Poppy Seed Roll',
    description:
      'A soft and delicious roll covered with poppy seeds for a subtle nutty nuance.',
    image: [
      {
        alt: 'A soft and delicious roll covered with poppy seeds for a subtle nutty nuance.',
        src: './assets/images/bread_rolls/bread_roll_valmo.webp',
      },
    ],
    price: {
      regular: 8,
      discountPercentage: null,
    },
    category: ['Roll', 'Specialty'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 15,
    name: 'Cinnamon Bun',
    description: 'A cinnamon-spiced classic, perfect for fika time.',
    image: [
      {
        alt: 'A cinnamon-spiced classic, perfect for fika time.',
        src: './assets/images/buns/bun_kanelbulle.webp',
      },
    ],
    price: {
      regular: 7,
      discountPercentage: null,
    },
    category: ['Buns'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 16,
    name: 'Cinnamon Wreath',
    description:
      'A beautiful and delicious cinnamon wreath that offers generous amounts of cinnamon.',
    image: [
      {
        alt: 'A beautiful and delicious cinnamon wreath that offers generous amounts of cinnamon.',
        src: './assets/images/buns/bun_kanelkrans.webp',
      },
    ],
    price: {
      regular: 10,
      discountPercentage: null,
    },
    category: ['Buns'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 17,
    name: 'Cinnamon Length',
    description:
      'A longer variant of the cinnamon bun, perfect for sharing with someone special.',
    image: [
      {
        alt: 'A longer variant of the cinnamon bun, perfect for sharing with someone special.',
        src: './assets/images/buns/bun_kanellangd.webp',
      },
    ],
    price: {
      regular: 8,
      discountPercentage: null,
    },
    category: ['Buns'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 18,
    name: 'Cardamom Bun',
    description: 'A favorite with the scent and flavor of cardamom.',
    image: [
      {
        alt: 'A favorite with the scent and flavor of cardamom.',
        src: './assets/images/buns/bun_kardemumma.webp',
      },
    ],
    price: {
      regular: 4,
      discountPercentage: null,
    },
    category: ['Buns'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 19,
    name: 'Cardamom Length',
    description:
      'A longer variant of the cardamom bun, ideal for cardamom lovers.',
    image: [
      {
        alt: 'A longer variant of the cardamom bun, ideal for cardamom lovers.',
        src: './assets/images/buns/bun_kardemummalangd.webp',
      },
    ],
    price: {
      regular: 8,
      discountPercentage: null,
    },
    category: ['Buns'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 20,
    name: 'Vanilla Bun',
    description:
      'A sweet and creamy bun with vanilla filling, a true delicacy.',
    image: [
      {
        alt: 'A sweet and creamy bun with vanilla filling, a true delicacy.',
        src: './assets/images/buns/bun_vanilj.webp',
      },
    ],
    price: {
      regular: 5,
      discountPercentage: null,
    },
    category: ['Buns'],
    stock: null,
    itemsPerPackage: 12,
  },
  {
    id: 21,
    name: 'Saffron Buns',
    description:
      'Christmas favorite with the scent of saffron and sweetness, perfect for festive occasions.',
    image: [
      {
        alt: 'Christmas favorite with the scent of saffron and sweetness, perfect for festive occasions.',
        src: './assets/images/buns/bun_saffran.webp',
      },
    ],
    price: {
      regular: 10,
      discountPercentage: null,
    },
    category: ['Buns', 'Specialty'],
    stock: null,
    itemsPerPackage: 12,
  },
];
