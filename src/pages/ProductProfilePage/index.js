import {Link} from "react-router-dom";

export default function ProductProfilePage() {
    const productProfile = {
        productName: "Dr Pepper Soda Bottles - 6pk/16.9 Fl",
        img: require('./images/test_product_1.png'),
        wholesaler: "ТОО Global Trade",
        productDescription: "«Доктор Пе́ппер» - безалкогольный газированный напиток, содержащий кофеин и фруктозу. Имеет мягкий вишневый вкус с нотками Амаретто. Производство: США.",
        retailPrice: 1200,
        wholesalePrice: 990,
        timer: 10,
        total: 100,
        orders: 5,
        customers: 2
    };

    return (
        <div style={{margin: 20}}>
            <h2 style={{paddingLeft: 20, marginBottom: 20}}>УСЛОВИЯ СОЗДАНИЯ ЗАКУПКИ</h2>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <div>
                    <img src={productProfile.img} style={{width: 400, padding: 20, marginRight: 50}}/>
                </div>               
                <div className="vertical-row"></div>
                <div className='Right' style={{width: '100%'}}>
                    <h6 style={{fontSize: 32, fontWeight: 'bold', margin: 0}}>{productProfile.productName}</h6>
                    <p style={{fontSize: 20, margin: 0}}>Продавец: {productProfile.wholesaler}</p>
                    <p style={{fontSize: 20, margin: 0}}>Описание: {productProfile.productDescription}</p>
                    <p style={{fontSize: 20, margin: 0, fontWeight: 'bold', marginTop: 20}}>Условия закупки:</p>
                    <p style={{fontSize: 20, margin: 0, marginLeft: 30}}>Розничная цена: <span style={{fontSize: 26, fontWeight: 'bold'}}>{productProfile.retailPrice} ₸</span></p>
                    <p style={{fontSize: 20, margin: 0, marginLeft: 30}}>Оптовая цена: <span style={{fontSize: 26, fontWeight: 'bold'}}>{productProfile.wholesalePrice} ₸</span></p>
                    <p style={{fontSize: 20, margin: 0, marginLeft: 30}}>Количество товара для оптовой цены: <span style={{fontSize: 26, fontWeight: 'bold'}}>{productProfile.total}</span></p>
                    <p style={{fontSize: 20, margin: 0, marginLeft: 30}}>Максимальное количество товара в сделке: <span style={{fontSize: 26, fontWeight: 'bold'}}>1000</span></p>
                    <p style={{fontSize: 20, margin: 0, marginLeft: 30}}>Количество дней для сбора заявок: <span style={{fontSize: 26, fontWeight: 'bold'}}>{productProfile.timer}</span></p>
                    <p style={{fontSize: 20, margin: 0, marginLeft: 30}}>Количество дней для организации лоставки: <span style={{fontSize: 26, fontWeight: 'bold'}}>3</span></p>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Link to="/DealSetting/:dealid">
                            <button className='button'>Настроить закупку</button>
                        </Link>
                    </div> 
                </div>
            </div>
        </div>
    )
}