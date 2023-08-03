import { useNavigate } from "react-router-dom";

export default function SingleProduct(item) {
    const days = item.timer;
    const total = item.total;
    const orders = item.orders;
    const percentage = orders * 100 / total;
    const navigate = useNavigate();

    return(
        <div style={{display: 'flex', flexDirection: 'column', borderRight: '2px solid #AAAAAA', marginBottom: 10, width: "25%", padding: 20}}>
            <img src={item.img} style={{width: 250, height: 250, margin: 40}}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>                
                <div style={{display: 'flex', flexDirection: "row", alignItems: "flex-end"}}>
                    <p style={{fontSize: 32, fontWeight: 'bold', margin: 0}}>{item.wholesalePrice} ₸</p>
                    <p style={{fontSize: 22, color: 'lightgray', marginBottom: 6, marginLeft: 10, textDecoration: 'line-through'}}>{item.retailPrice} ₸</p>                    
                </div>
                <h6 style={{fontSize: 18, fontWeight: 'bold', margin: 0}}>{item.productName}</h6>
                <p style={{fontSize: 18, margin: 0}}>Продавец: {item.wholesaler}</p>
                <p style={{fontSize: 14, margin: 0}}>Количество товара для оптовой цены: <span style={{fontSize: 32, fontWeight: 'bold'}}>{item.total}</span></p>
                <div>
                    <button onClick={()=> {
                        navigate("/ProductProfile/:productid");
                    }} className="buttonBig">Выбрать товар</button>
                </div>
            </div>
        </div>
    );
}
