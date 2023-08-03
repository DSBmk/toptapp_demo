import {Link} from "react-router-dom";

export default function DealSetting() {
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
            <h2 style={{paddingLeft: 20, marginBottom: 20}}>СОЗДАНИЕ ЗАКУПКИ</h2>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <div style={{width: 650}}>
                    <img src={productProfile.img} style={{width: 250, padding: 20, marginRight: 50}}/>
                    <div style={{display: 'flex', flexDirection: "row", alignItems: "flex-end"}}>
                        <p style={{fontSize: 32, fontWeight: 'bold', margin: 0}}>{productProfile.wholesalePrice} ₸</p>
                        <p style={{fontSize: 22, color: 'lightgray', marginBottom: 6, marginLeft: 10, textDecoration: 'line-through'}}>{productProfile.retailPrice} ₸</p>                    
                    </div>
                    <h6 style={{fontSize: 18, fontWeight: 'bold', margin: 0}}>{productProfile.productName}</h6>
                    <p style={{fontSize: 16, margin: 0}}>Продавец: {productProfile.wholesaler}</p>
                    <p style={{fontSize: 16, margin: 0}}>Количество товара для оптовой цены: <span style={{fontSize: 22, fontWeight: 'bold'}}>{productProfile.total}</span></p>
                    <p style={{fontSize: 16, margin: 0}}>Максимальное количество товара в сделке: <span style={{fontSize: 22, fontWeight: 'bold'}}>1000</span></p>
                    <p style={{fontSize: 16, margin: 0}}>Количество дней для сбора заявок: <span style={{fontSize: 22, fontWeight: 'bold'}}>{productProfile.timer}</span></p>
                    <p style={{fontSize: 16, margin: 0}}>Количество дней для организации лоставки: <span style={{fontSize: 22, fontWeight: 'bold'}}>3</span></p>
                </div>               
                <div className="vertical-row"></div>
                <div className='Right' style={{width: '100%', marginTop: 50}}>
                    <div style={{display: 'flex', flexDirection: 'row', width: 800, justifyContent: 'space-between', marginBottom: 20}}>
                        <p style={{fontSize: 22, margin: 0, marginRight: 20}}>ФИО организатора закупки: </p>
                        <input name="myInput" style={{width: 400}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: 800, justifyContent: 'space-between', marginBottom: 20}}>
                        <p style={{fontSize: 22, margin: 0, marginRight: 20}}>WhatsApp организатора закупки: </p>
                        <input name="myInput" style={{width: 400}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: 800, justifyContent: 'space-between', marginBottom: 20}}>
                        <p style={{fontSize: 22, margin: 0, marginRight: 20}}>Минимальное количество товара: </p>
                        <input name="myInput" style={{width: 400}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: 800, justifyContent: 'space-between', marginBottom: 20}}>
                        <p style={{fontSize: 22, margin: 0, marginRight: 20}}>Максимальное количество товара: </p>
                        <input name="myInput" style={{width: 400}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: 800, justifyContent: 'space-between', marginBottom: 20}}>
                        <p style={{fontSize: 22, margin: 0, marginRight: 20}}>Количество дней для сбора заявок: </p>
                        <input name="myInput" style={{width: 400}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: 800, justifyContent: 'space-between', marginBottom: 20}}>
                        <p style={{fontSize: 22, margin: 0, marginRight: 20}}>Единая точка доставки: </p>
                        <input name="myInput" style={{width: 400}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: 800, justifyContent: 'space-between', marginBottom: 20}}>
                        <p style={{fontSize: 22, margin: 0, marginRight: 20}}>Единая дата доставки: </p>
                        <input name="myInput" style={{width: 400}}/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 20}}>
                        <Link to="/ActiveDeal/:dealid">
                            <button className='button'>Создать закупку</button>
                        </Link>
                    </div> 
                </div>
            </div>
        </div>
    )
}