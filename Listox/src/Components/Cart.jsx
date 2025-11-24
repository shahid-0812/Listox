import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const Cart = ({ cartOpen, setCartOpen }) => {
    return (
        <>

            {cartOpen && (
                <div
                    onClick={() => setCartOpen(false)}
                    className="fixed inset-0 bg-black/50 bg-opacity-50 z-110"
                ></div>
            )}

            {/* Cart Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg transform transition-transform duration-300 z-1100
                ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-5 flex justify-between items-center border-b">
                    <h2 className="text-lg font-semibold">Your Cart</h2>
                    <i
                        className="bi bi-x-lg text-2xl cursor-pointer"
                        onClick={() => setCartOpen(false)}
                    ></i>
                </div>

                {/* Cart Content */}
                <div className="p-5 text-gray-600">
                    <p>No items in cart</p>
                </div>
            </div>
        </>
    );
};
