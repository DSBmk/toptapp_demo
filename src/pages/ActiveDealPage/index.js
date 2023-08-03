import DealProfile from "./LeftPartComponent";
import ProductProfile from "./RightPartComponent";

export default function Deal() {
    return (
        <div style={{margin: 20}}>
            <h2 style={{paddingLeft: 20, marginBottom: 20}}>ДЕЙСТВУЮЩИЕ ПРЕДЛОЖЕНИЕ</h2>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <ProductProfile />
                <div className="vertical-row"></div>
                <DealProfile />
            </div>
        </div>
    )
}