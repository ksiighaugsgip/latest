import React, { useContext } from 'react';
import './Main.css';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';

let cards = [
    {
        name: "COLOMBIA SUPREMO",
        title: "MEDIUM ROAST",
        src: "/imgs/1.jpg",
        link: "/kofa",
    },
    {
        name: "ESPRESSO DI MILANO",
        title: "MEDIUM ROAST",
        src: "/imgs/2.jpg",
        link: "/kofa",
    },
    {
        name: "ORIGINAL ORO",
        title: "MEDIUM ROAST",
        src: "/imgs/3.jpg",
        link: "/kofa",
    },
    {
        name: "CAFE ECLAIR",
        title: "LIGHT ROAST",
        src: "/imgs/4.jpg",
        link: "/kofa",
    },
    {
        name: "DESSERT CUP",
        title: "DARK ROAST",
        src: "/imgs/5.jpg",
        link: "/kofa",
    },
    {
        name: "AMERICANO CREMA",
        title: "MEDIUM ROAST",
        src: "/imgs/6.jpg",
        link: "/kofa",
    },
    {
        name: "ETHIOPIA EUPHORIA",
        title: "LIGHT ROAST",
        src: "/imgs/7.jpg",
        link: "/kofa",
    },
    {
        name: "BRAVO BRAZILIA",
        title: "DARK ROAST",
        src: "/imgs/8.jpg",
        link: "/kofa",
    },
];

function Main() {
    const cardJsx = cards.map((card, i) => (
        <Card key={i} card={card} />
    ));

    return (
        <div className="main">
            <div className="product-container">
                {cardJsx}
            </div>
        </div>
    );
}

function Card({ card }) {
    const { cart, setCart } = useContext(CartContext);
    function handleClick(e) {
        e.preventDefault();
        cart[card.name] = card;
        setCart(structuredClone(cart));
    }
    return (
        <div className="product">
            <Link to={card.link} className="product-link">
                <img src={card.src} alt={card.name} />
                <h2>{card.name}</h2>
                <p>{card.title}</p>
                <div>
                    {cart[card.name] !== undefined ? (
                        <button className='buybtn' disabled>В корзине</button>
                    ) : (
                        <button className='buybtn' onClick={handleClick}>Купить</button>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default Main;
