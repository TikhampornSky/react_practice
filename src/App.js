//import logo from './logo.svg';
import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import ReportComponent from './components/ReportComponent'
//import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect, useReducer } from 'react';
import DataContext from './data/DataContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Title = () => <h1> บัญชีรายรับ-รายจ่าย </h1>
const Description = () => <p> บันทึกข้อมูลประจำวันของฉัน </p>
const Notice = () => {
  return (
    <div>
      <p> หมายเหตุ: </p>
      <ul>
        <li> จดเอาไว้กันลืม </li>
        <li> ต้องมีระเบียบ </li>
      </ul>
    </div>
  );
}

function App() {
  const design = {color: "red", fontSize: "1.5rem"}
  const initData = [
    {id:1, title: "ค่ารักษาพยาบาล", amount: -2000},
    {id:2, title: "ค่าน้ำมัน", amount: -4000},
    {id:3, title: "เงินเดือน", amount: 82000},
    {id:4, title: "ค่าประกัน", amount: -15000},
   ]

  const [items, setItems] = useState(initData)

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  // reducer state
  const [count, setCount] = useState(0)
  const reducer = (state, action) => {
    switch(action.type) {
      case "ADD" :
        return state+action.payload
      case "SUB" :
        return state-action.payload
      case "CLEAR" :
        return 0
      default:
        setCount(0)
    }
  }
  const [result, dispatch] = useReducer(reducer, count)     //dispatch = Action รูปแบบใด เช่น ADD, result คือ ผลลัพธ์จากการที่ state ถูกกระทำ

  const [showReport, setShowReport] = useState(false)
  const reducer2 = (state, action) => {
    switch(action.type) {
      case "SHOW" :
        return setShowReport(true)
      case "HIDE" :
        return setShowReport(false)
      default:
        
    }
  }
  const [resultReport, dispatch2] = useReducer(reducer2, showReport)
  //console.log(resultReport)

  useEffect(() => {                                       // จะถูกเรียกเมื่อ State ที่กำหนดมีการเปลี่ยนแปลง
    const amounts = items.map(items => items.amount)      //amounts เป็น Array ที่มีแต่ค่า map
    const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0).toFixed(2)
    const expense = amounts.filter(element => element < 0).reduce((total, element) => total += element, 0).toFixed(2)      //total โดยถูกกำหนดให้มีค่าเริ่มต้นคือ 0
    setReportIncome(income)
    setReportExpense(expense)
  }, [items, reportIncome, reportExpense])

  const onAddNewItem = (newItem) => {     // ฟังก์ชันที่ใช้จีดการข้อมูลที่ส่งมาจาก Form Component
      setItems((prevItem) => {
        return [newItem, ...prevItem]       // เอา Item ใหม่ มาต่อกับของเก่า
      })
  } 

  return (
    <DataContext.Provider value={
      {
        star : '**',
        sharp : '#',
        income: reportIncome,
        expense: reportExpense
      }
    }>   
      <div className='container'>
        <Title />
        <Description />
        <p style={design}> Tontan Tomato </p>

        <Router>
          <div>
            <ul className='horizontal-menu'>
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
          </div>

          <Routes>
            <Route path='/' element={<ReportComponent/>}></Route>
            <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem}/> <Transaction items={items}/> </>}></Route>
          </Routes>

        </Router>

        { showReport && <Notice /> }   
        <button onClick={() => dispatch2({type: "SHOW"})}>Show Detail</button>
        <button onClick={() => dispatch2({type: "HIDE"})}>Hide Detail</button>
        <p>{resultReport}</p>
      </div>

      <div align="center">
        <h1>{result}</h1>
        <button onClick={() => dispatch({type: "ADD", payload:10})}>เพิ่ม</button>
        <button onClick={() => dispatch({type: "SUB", payload:5})}>ลบ</button>
        <button onClick={() => dispatch({type: "CLEAR"})}>ล้าง</button>
      </div>
    </DataContext.Provider>

  );
}

export default App;
