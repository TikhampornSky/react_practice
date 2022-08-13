import PropTypes from 'prop-types';
import './Item.css'
import DataContext from '../data/DataContext';
import { useContext } from 'react';

const Item = (props) => {
    const {title, amount} = props
    const status = amount<0 ? "expense" : "income"
    const symbol = amount<0 ? "-" : "+"
    const star = useContext(DataContext)
    const formatNumber=(num)=> {                //convert 6000 --> 6,000
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    return (
        <li className={status}> {title}<span> {symbol} {formatNumber(Math.abs(amount))} บาท { star.star } </span> 
        </li>
    );
}

Item.propTypes={                //Define the type of props
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired          //isRequired = บังคับว่าต้องมี Item นี้
}

export default Item