import Item from "./Item";
import './Transaction.css';
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
   const data = [
    {title: "ค่ารักษาพยาบาล", amount: 2000},
    {title: "ค่าน้ำมัน", amount: 4000},
    {title: "เงินเดือน", amount: 82000},
    {title: "ค่าประกัน", amount: 15000},
   ]
    return (
        <>
            <p> รายการ: </p>
            <ul className="item-list">
                {data.map((element) => {
                    return <Item title={element.title} amount={element.amount} key= {uuidv4()}/>
                    //return <Item {...element}/>   สำหรับกรณีที่ชื่อหน้าเท่ากับ กับหลัง element. เหมือนกัน 
                })}
            </ul>
        </>
    );
}

export default Transaction
