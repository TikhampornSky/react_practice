import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css'

const ReportComponent = () => {
    const {star, sharp, income, expense} = useContext(DataContext)

    const formatNumber=(num)=> {                //convert 6000 --> 6,000
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div>
            <h4>ยอดคงเหลือ: ฿ {formatNumber((income - Math.abs(expense)).toFixed(2))}</h4>
            <div className="report-containner">
                <div>
                    <h4>รายรับทั้งหมด</h4>
                    <p className="report plus">฿{formatNumber(income)} {star}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className="report minus">฿{formatNumber(expense)} {sharp}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent