import { useNavigate } from "react-router-dom";
import Countdown from "../../CountdownComponent";
import ProgressBarShow from "../../ProgressBarShowComponent";


export default function Deal(item) {
    const days = item.timer;
    const total = item.total;
    const orders = item.orders;
    const percentage = orders * 100 / total;
    const navigate = useNavigate();

    return(
        <div style={{display: 'flex', flexDirection: 'row', borderBottom: '2px solid #AAAAAA', marginBottom: 10}}>
            <img src={item.img} style={{width: 175, height: 175, marginRight: 20, marginBottom: 10}}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
                <h6 style={{fontSize: 26, fontWeight: 'solid', margin: 0}}>{item.productName}</h6>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                    <p style={{fontSize: 36, color: 'lightgray', margin: 0, textDecoration: 'line-through'}}>{item.retailPrice} ₸</p>
                    <p style={{fontSize: 42, fontWeight: 'bold', margin: 0}}>{item.wholesalePrice} ₸</p>
                </div>
                <ProgressBarShow number={percentage}/>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Countdown duration={days * 24 * 60 * 60 * 1000} />
                    <button onClick={()=> {
                        navigate("/ActiveDeal/:dealid");
                    }} className="buttonSmall" style={{marginLeft: 20}}>Присоединиться</button>
                </div>
            </div>
        </div>
    );
}