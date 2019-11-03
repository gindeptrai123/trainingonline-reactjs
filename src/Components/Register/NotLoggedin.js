import React from 'react';
import {Link} from 'react-router-dom';

function NotLoggedin() {
  return (
    <li className="dp-il">
      <Link to="/dang-nhap">Đăng nhập</Link> /<Link to="/dang-ky"> Đăng ký</Link>
    </li>
  );
}

export default NotLoggedin;
