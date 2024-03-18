import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [itemsAmount, setItemsAmount] = useState(0);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amount = cart.reduce((a, c) => a + c.amount, 0);
        setAmount(amount);
        if (amount === 0) {
            setIsOpen(false);
        }
    }, [cart]);

    useEffect(() => {
        const total = cart.reduce((a, c) => a + c.attributes.price * c.amount, 0);
        setTotal(total);
    }, [cart]);

    const addToCart = (data) => {
        const existItem = cart.find((item) => item.id === data.id);

        if (existItem) {
            setCart(
                cart.map((item) =>
                    item.id === existItem.id ? { ...existItem, amount: existItem.amount + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...data, amount: 1 }]);
        }

        setItemsAmount(cart.length);
        setAmount(amount + data.attributes.price);
        setTotal(total + data.attributes.price);
        setIsOpen(true);
    };

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
        setAmount(0);
        setTotal(0);
        setItemsAmount(0);
    };

    const handleInput = (e, id) => {
        const newCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, amount: parseInt(e.target.value) };
            }
            return item;
        });
        setCart(newCart);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                itemsAmount,
                amount,
                total,
                isOpen,
                setIsOpen,
                addToCart,
                removeFromCart,
                clearCart,
                handleInput
            }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node
};

export default CartProvider;
