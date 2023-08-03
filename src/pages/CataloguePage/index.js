import ProgressBar from "../../components/ProgressBarComponent";
import ListOfProducts from "./ProductsComponent";

export default function Catalogue(){
    return (
        <div style={{margin: 20}}>
            <h2 style={{paddingLeft: 20, marginBottom: 20}}>КАТАЛОГ ТОВАРОВ</h2>
            <div style={{margin: 20, display: "flex", flexDirection: "row"}}>
                <ListOfProducts />
            </div>            
        </div>
    )
}