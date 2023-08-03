import SingleProduct from '../ProductComponent';

export default function ListOfProducts() {
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
        }
    ];

    return deals.map((item, index) => <SingleProduct {...item} key={index}/>)
}