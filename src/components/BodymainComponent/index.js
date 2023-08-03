import LeftMain from "./LeftMain";
import RightMain from "./RightMain";


export default function BodyMain() {
    return (
        <div>            
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40, marginBottom: 40}}>
                <h2 style={{marginBottom: 40}}>“Чем больше товара, тем меньше цена!”</h2>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className='boxBody'>
                        <h2 style={{marginTop: 10, marginBottom: 5, color: '#05FF00'}}>1</h2>
                        <p style={{fontWeight: 'bold', fontSize: 18, marginBottom: 5}}>количество товаров</p>
                    </div>
                    <div className='boxBody'>
                        <h2 style={{marginTop: 10, marginBottom: 5, color: '#05FF00'}}>3</h2>
                        <p style={{fontWeight: 'bold', fontSize: 18, marginBottom: 5}}>активные закупки</p>
                    </div>
                    <div className='boxBody'>
                        <h2 style={{marginTop: 10, marginBottom: 5, color: '#05FF00'}}>0</h2>
                        <p style={{fontWeight: 'bold', fontSize: 18, marginBottom: 5}}>закрытые закупки</p>
                    </div>
                </div>
            </div>
            <div className='BodyMain'>
                <RightMain/>
                <div className="vertical-row"></div>
                <LeftMain/>
            </div>  
        </div>

    );
}