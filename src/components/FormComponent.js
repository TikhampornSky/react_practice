import './FormComponent.css'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {

    //useState
    //const [ชื่อ State, ฟังก์ชันที่จะใช้เปลี่ยนแปลง State] = useState(ค่าเริ่มต้นของ State) เป็นการสร้าง State
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid, setFormValid] = useState(false)

    const inputTitle = (event) => {
        setTitle(event.target.value)
    }
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }
    const saveItem = (event) => {
        event.preventDefault()              //  ป้องกันการรีเฟรชหน้าใหม่
        const itemData = {
            id: uuidv4(),
            title:title,
            amount:Number(amount)           //  เพราะค่าที่มันส่มาให้เป็น String
        }
        props.onAddItem(itemData)

        setTitle('')        //clear state
        setAmount(0)
        setFormValid(false)
    }

    useEffect(() => {                       //  ถูกเรียนใช้ตลอดที่มีการเปลี่ยนแปลง State ชื่อ amount และ title
        const checkData = title.trim().length > 0 && amount !== 0 && amount !== ''
        if (checkData) {
            setFormValid(true)
        }
    }, [title, amount])                            //   ระบุ State ที่เราสนใจ 

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent