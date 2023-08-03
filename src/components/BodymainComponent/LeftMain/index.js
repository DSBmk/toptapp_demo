import Deals from './deals';

export default function LeftMain() {
    return (
        <div className='Left'>
          <h5 style={{marginBottom: 20}}>ДЕЙСТВУЮЩИЕ ПРЕДЛОЖЕНИЯ</h5>
          <Deals/>
        </div>   
    )
}