import React from 'react';
import style from './cartWindow.module.scss';
import Button from '../button/Button';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function CartWindow({ isOpen, onClose, children }: CartProps) {
    if (!isOpen) return null;
    return (
        <>
            <div className={style['modal-overlay']}>
                <div className={style['modal-content']}>
                    <h2>Cart</h2>
                    <hr className={style['line']}></hr>
                    <div className={style['cart-content']}>
                        {' '}
                        {React.Children.count(children) > 0
                            ? children
                            : 'Your cart is empty'}
                    </div>
                    <div>
                        {React.Children.count(children) === 0 ? (
                            ''
                        ) : (
                            <Button label="Checkout" onClick={onClose}></Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default CartWindow;
