
export default function Footer() {
    return (
        <div style={{borderTop: '2px solid gray', backgroundColor: '#EEEEEE'}}>
            <div style={{marginRight: 20, marginLeft:20, paddingLeft: 20, paddingRight: 20}}>
                <img src={require('./images/logogrey.png')} style={{width: 190, height: 67}}/>
            </div>
            <div style={{borderTop: '2px solid gray', color: '#AAAAAA', paddingLeft: 20, paddingRight: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-around',  alignitems: 'center'}}>
                <p>2023 ● toptapp – демоверсия маркет-плейса созданная в рамках учебной программы «nFactorial Fullstack»</p>
            </div>
        </div>
    );
}