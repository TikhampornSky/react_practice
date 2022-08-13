import Item from "./Item";
import './Transaction.css';
import DataContext from "../data/DataContext";
import { useContext } from "react";

const Transaction = (props) => {                //props --> มาจาก App.js
    const {items} = props
    const {star, sharp} = useContext(DataContext)
    return (
        <div>
            <p> รายการ: </p>
            <ul className="item-list">
                {items.map((element) => {
                    return <Item title={element.title} amount={element.amount} key= {element.id}/>
                    //return <Item {...element}/>   สำหรับกรณีที่ชื่อหน้าเท่ากับ กับหลัง element. เหมือนกัน 
                })}
            </ul>

            <DataContext.Consumer>
                {value=> <p> {value.star}</p>}      
            </DataContext.Consumer>

            <p>ลองส่ง Context อีกแบบ: {star} and {sharp}</p>
        </div>
    );
}

export default Transaction
