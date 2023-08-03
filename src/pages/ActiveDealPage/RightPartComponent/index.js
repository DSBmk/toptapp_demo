
export default function ProductProfile() {
    const product = {
            productName: "Dr Pepper Soda Bottles - 6pk/16.9 Fl",
            img: require('./images/test_product_1.png'),
            wholesaler: "ТОО Global Trade",
            productDescription: "«Доктор Пе́ппер» - безалкогольный газированный напиток, содержащий кофеин и фруктозу. Имеет мягкий вишневый вкус с нотками Амаретто. Производство: США.",
            retailPrice: 1200,
            wholesalePrice: 990,
            timer: 10,
            total: 10,
            orders: 5,
            customers: 2
};
    return (
        <div className='Right'>
            <img src={product.img} style={{width: '50%'}}/>
            <h3>{product.productName}</h3>
            <p style={{fontSize: 18}}>Продавец: {product.wholesaler}</p>
            <p style={{fontSize: 18}}>Описание: {product.productDescription}</p>
        </div>
    )
}