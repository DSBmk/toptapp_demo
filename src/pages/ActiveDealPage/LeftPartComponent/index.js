import { useRef, useState } from 'react';
import Countdown from '../../../components/CountdownComponent';

export default function DealProfile() {
    const [productProfile, setProductProfile] = useState({
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
    });
    const percentage = productProfile.orders * 100 / productProfile.total;
    const [progress, setProgress] = useState(percentage);
    const [newOrder, setNewOrder] = useState(0);
    const [newCustomer, setNewCustomer] = useState(productProfile.customers);

    const handleProgressClick = () => {
        if (progress < 100) {
            setProgress(progress + 1);
            setNewOrder(newOrder + 1);
        }    
    }

    const handleRegressClick = () => {
        if (newOrder > 0) {
            setProgress(progress - 1);
            setNewOrder(newOrder - 1);
        }  
    }

    const handleResetClick = () => {
        setProgress(progress - newOrder);
        setNewOrder(0);
        setIsAddModalVisible(!isAddModalVisible);    
     }
    
    const handleConfirmClick = () => {
        if (newOrder > 0) {
            setNewOrder(0);
            setNewCustomer(newCustomer + 1);
            setIsAddModalVisible(!isAddModalVisible);
        }       
    }

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const ref = useRef(null);
    
    return (
        <div className="Left"> 
            <div style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between'}}>
                <div style={{display: 'flex', flexDirection: "row", alignItems: "flex-end"}}>
                    <p style={{fontSize: 42, fontWeight: 'bold', margin: 0}}>{productProfile.wholesalePrice} ₸</p>
                    <p style={{fontSize: 22, color: 'lightgray', marginBottom: 6, marginLeft: 10, textDecoration: 'line-through'}}>{productProfile.retailPrice} ₸</p>                    
                </div>
                <Countdown duration={productProfile.timer * 24 * 60 * 60 * 1000} />
            </div>
            <div className="container-bar">
                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{width: `${progress}%`}}></div>
                </div>
            <p style={{fontSize: 42, fontWeight: 'bold', margin: 0}}>{progress}
                <span style={{fontSize: 36, fontWeight: 'initial', margin: 0}}> шт забронировано</span>
                <span style={{fontSize: 26, fontWeight: 'initial', margin: 0, color: 'lightgray'}}> (Осталось: <span style={{fontSize: 36, fontWeight: 'bold', margin: 0}}>{parseInt(productProfile.total - progress)}</span> шт)</span>
            </p>            
            <p style={{fontSize: 36, fontWeight: 'initial', margin: 0}}>Количество участников <span style={{fontSize: 42, fontWeight: 'bold', margin: 0}}>{newCustomer}</span> чел.</p>
            <div style={{display: "flex", flexDirection: "column"}}>
                <button className='button' style={{marginBottom: 20}} onClick={() => setIsAddModalVisible(!isAddModalVisible)}>Принять участие в закупке</button>
                {isAddModalVisible && (
                    <div style={{backgroundColor: '#e6e6e6', display: "flex", flexDirection: "column", borderRadius: 10, padding: 15}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: 'center'}}>
                            <p style={{fontSize: 18, fontWeight: 'initial', margin: 0}}>Забронировать количество: <span style={{fontSize: 22, fontWeight: 'bold', margin: 0}}>{newOrder}</span></p>
                            <button style={{marginLeft: 10, backgroundColor: '#05FF00', color: 'white', border: 'none', borderRadius: 50, width: 30, height: 30}} onClick={handleProgressClick}>+</button>
                            <button style={{marginLeft: 10, backgroundColor: 'red', color: 'white', border: 'none', borderRadius: 50, width: 30, height: 30}} onClick={handleRegressClick}>-</button>
                        </div>
                        <textarea style={{backgroundColor: 'white', height: 40, margin: 10}} ref={ref} id="text" name="text">Введите номер Вашего телефона</textarea>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <button style={{backgroundColor: '#05FF00',  border: 'none', height: 40, color: 'white', marginTop: 5, width: '50%'}} onClick={handleConfirmClick}>Подтвердить заявку</button>
                            <button style={{backgroundColor: 'red', border: 'none', height: 40, color: 'white', marginTop: 5, width: '50%'}} onClick={handleResetClick}>Отменить заявку</button>
                        </div>
                    </div>
                )}                
            </div>

            
        </div>
        </div>
    )
}