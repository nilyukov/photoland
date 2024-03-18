import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.attributes.price * item.amount, 0);
};

const calculateAmount = (cart) => {
    return cart.reduce((total, item) => total + item.amount, 0);
};

const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [itemsAmount, setItemsAmount] = useState(0);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(calculateTotal(cart));
        setAmount(calculateAmount(cart));
        setItemsAmount(cart.length);
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
