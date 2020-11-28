import React from 'react';
import './Header.css';

const Header = () =>{
    return(
        <div className="Header">
            <input type="text"/><button> 검색 </button>
            <button>로그인</button>
        </div>
    )
}

export default Header;