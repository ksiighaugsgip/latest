import './Start.css';
import logo from './logo.png';

import { Link } from "react-router-dom";

function Start() {
    return (
        <div className="start">
            <div className="full-screen-image">
                <img src="/imgs/banner1.jpg" alt="?" />
            </div>
                <div className="content-grid">
                    <div className="image-container">
                        <img src={logo} alt="?" />
                    </div>
                <div className="text-container">
                    <h2>Добро пожаловать в Koffee!</h2>
                    <p>Мы - команда страстных кофеманов, которые предлагают вам только лучший кофе. Наша компания действует на рынке уже много лет, и мы гордимся своим опытом и качеством продукции.</p>
                    <p>Мы работаем над тем, чтобы каждая чашка кофе, которую вы пьете у нас, была настоящим удовольствием. Наш кофе - это не просто напиток, это наша страсть, наше искусство.</p>
                    <p>Присоединяйтесь к нам сегодня и окунитесь в мир ароматного и качественного кофе!</p>
                </div>
            </div>
            <div className="buy">
                <Link to="/main">
                    <button className='buybtnstart'>Купить кофе</button>
                </Link>
            </div>
        </div>
    );
}

export default Start;
