import Deal from './deal';

export default function Deals() {
    const deals = [
        {
            productName: "Dr Pepper Soda Bottles - 6pk/16.9 Fl",
            img: require('./images/test_product_1.png'),
            wholesaler: "ТОО Global Trade",
            productDescription: "Краткое описание товара.",
            retailPrice: 1200,
            wholesalePrice: 990,
            timer: 10,
            total: 100,
            orders: 5,
            customers: 2
        },
        {
            productName: "Dr Pepper Soda Bottles - 6pk/16.9 Fl",
            img: require('./images/test_product_1.png'),
            wholesaler: "ТОО Global Trade",
            productDescription: "Краткое описание товара.",
            retailPrice: 1200,
            wholesalePrice: 990,
            timer: 5,
            total: 20,
            orders: 5,
            customers: 2
        },
        {
            productName: "Dr Pepper Soda Bottles - 6pk/16.9 Fl",
            img: require('./images/test_product_1.png'),
            wholesaler: "ТОО Global Trade",
            productDescription: "Краткое описание товара.",
            retailPrice: 1200,
            wholesalePrice: 990,
            timer: 1,
            total: 15,
            orders: 14,
            customers: 2
        }
    ];

    return deals.map((item, index) => <Deal {...item} key={index}/>)
}