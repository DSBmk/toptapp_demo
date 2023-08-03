import {Link} from "react-router-dom";
export default function RightMain() {
        return (
        <div className='Right'>
            <h5 style={{marginBottom: 20}}>КАК ЭТО РАБОТАЕТ</h5>
            <img src={require('./images/placeholder.png')} style={{width: '100%', height:'40%'}}/>
            <p style={{marginTop: 20, marginBottom: 40}}>«Топтапп» — это платформа, позволяющая розничным покупателям группировать их заказы и совершать покупки по оптовым ценам под общей точкой сбора и/или самовывозом в заранее оговоренную дату и время. Товары на платформе представлены оптовыми продавцами, которые продают большими партиями по оптовым ценам, «Топтапп» собирает заинтересованных в предложениях розничных покупателей, которые покупают маленькими партиями. Как только набирается необходимое количество покупателей и товаров, сделка осуществляется.</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Link to="/catalogue">
                    <button className='button'>Начать закупку</button>
                </Link>
            </div>                             
        </div>
    )
}