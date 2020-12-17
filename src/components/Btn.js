import React from 'react';
import './Btn.css';
import { Link } from 'react-router-dom';

const styles = ['btn--primary', 'btn--outline'];
const sizes = ['btn--medium', 'btn--large'];

export const Btn = ({ children, type, onClick, btnStyle, btnSize, linkTo }) => {
  const checkBtnStyle = styles.includes(btnStyle) ? btnStyle : styles[0];
  const checkBtnSize = styles.includes(btnSize) ? btnSize : sizes[0];

  return (
    <Link to={linkTo} className="btn-mobile">
      <button
        className={`btn ${checkBtnStyle} ${checkBtnSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
