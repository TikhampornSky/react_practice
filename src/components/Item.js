import PropTypes from 'prop-types';

const Item = (props) => {
    const {title, amount} = props
    return (
        <li> {title} <span> {amount} บาท</span></li>
    );
}

Item.propTypes={                //Define the type of props
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired          //isRequired = บังคับว่าต้องมี Item นี้
}

export default Item