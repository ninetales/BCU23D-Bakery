const orders = [
    {
        id: 1,
        user_id: 1,
        order_products: [
            {
                product_id: 1,
                amount_pkg: 2,
            },
            {
                product_id: 5,
                amount_pkg: 4,
            },
            {
                product_id: 20,
                amount_pkg: 2,
            },
            {
                product_id: 3,
                amount_pkg: 2,
            },
            {
                product_id: 6,
                amount_pkg: 4,
            },
            {
                product_id: 13,
                amount_pkg: 2,
            },

        ],
        order_date: '9-12-2023',
        processed: true,
        lev_date: '12-12-2023',
    },
    {
        id: 2,
        user_id: 1,
        order_products: [
            {
                product_id: 8,
                amount_pkg: 2,
            },
            {
                product_id: 3,
                amount_pkg: 4,
            },
            {
                product_id: 16,
                amount_pkg: 2,
            },

        ],
        order_date: '9-12-2023',
        processed: false,
        lev_date: null,
    },
    {
        id: 3,
        user_id: 1,
        order_products: [
            {
                product_id: 3,
                amount_pkg: 2,
            },
            {
                product_id: 9,
                amount_pkg: 4,
            },
            {
                product_id: 14,
                amount_pkg: 2,
            },
        ],
        order_date: '12-12-2023',
        processed: false,
        lev_date: null,
    },
    {
        id: 4,
        user_id: 2,
        order_products: [
            {
                product_id: 6,
                amount_pkg: 2,
            },
            {
                product_id: 11,
                amount_pkg: 4,
            },
            {
                product_id: 18,
                amount_pkg: 2,
            },

        ],
        order_date: '9-10-2023',
        processed: true,
        lev_date: '12-10-2023',
    },
    {
        id: 5,
        user_id: 2,
        order_products: [
            {
                product_id: 7,
                amount_pkg: 2,
            },
            {
                product_id: 15,
                amount_pkg: 4,
            },
            {
                product_id: 18,
                amount_pkg: 2,
            },
        ],
        order_date: '12-12-2023',
        processed: false,
        lev_date: null,
    },
    {
        id: 6,
        user_id: 2,
        order_products: [
            {
                product_id: 19,
                amount_pkg: 2,
            },
            {
                product_id: 11,
                amount_pkg: 4,
            },
            {
                product_id: 14,
                amount_pkg: 2,
            },
        ],
        order_date: '12-12-2023',
        processed: false,
        lev_date: null,
    },
]
