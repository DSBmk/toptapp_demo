import {Link} from "react-router-dom";
export default function Header() {
    return(
        <div style={{borderBottom: '2px solid #AAAAAA'}}>
            <div className='Header' style={{borderBottom: '2px solid #AAAAAA'}}>
                <Link to="/" style={{fontSize: 20, fontWeight: 350, margin: 0, textDecoration: 'none', color: 'black'}}>ГЛАВНАЯ</Link>           
                <img src={require('./images/logo.png')} style={{width: 175, height: 45, margin: 15}}/>
                <p style={{fontSize: 20, fontWeight: 350, margin: 0}}>ОПТОВИКУ</p>
            </div>
            <div style={{fontSize: 20, fontWeight: 350, paddingLeft: 20, paddingRight: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignitems: 'center'}}>
                <Link to="/catalogue" style={{fontSize: 20, fontWeight: 350, margin: 5, textDecoration: 'none', color: 'black'}}>КАТАЛОГ ТОВАРОВ</Link>                
            </div>
        </div>
    )
}