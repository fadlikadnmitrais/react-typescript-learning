import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { ApplicationState } from "../../store";
import { Cart } from "../../store/cart/types";
import { removeFromCart } from "../../store/cart/action";
import { Inventory } from "../../store/inventory/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const CartContainer = styled.div`
    /* height: 100%;
    width: 100%; */
    padding: 30px;
`;
const CartHeader = styled.h2``;
const CartHeaderDiv = styled.div`
    height: 100%;
    width: 100%;
`;

const CartListsDiv = styled.div`
    height: 100%;
    width: 100%;
`;

const CartListItemDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CartListItemImage = styled.img`
    width: 100px;
    height: 100px;
`;

const CartListItemName = styled.p``;

const CartListItemPrice = styled.p``;

const RemoveFromCart = styled.button`
    padding: 10px;
    background-color: red;
    color: #ffffff;
    border-radius: 10px;
`;

interface propsFromState {
    cartItems: Cart;
}

interface propsFromDispatch {
    removeFromCart: (item: Inventory) => any;
}

type AllProps = propsFromState & propsFromDispatch;

const CartComponent: React.FC<AllProps> = ({ cartItems, removeFromCart }) => {
    const RemoveItemFromCartAction = (item: Inventory) => {
        removeFromCart(item);
    }

    console.log("cartItems", cartItems);
    return (
        <CartContainer>
            <CartHeaderDiv>
                <CartHeader>Your Cart</CartHeader>
            </CartHeaderDiv>
            <CartListsDiv>
                {cartItems.items.map((item, index) => {
                    return (
                        <CartListItemDiv key={`${item.id}-${index}`}>
                            <CartListItemImage src={item.image} />
                            <CartListItemName>{item.name}</CartListItemName>
                            <CartListItemPrice>{item.price}</CartListItemPrice>
                            <RemoveFromCart onClick={() => RemoveItemFromCartAction(item)}>Remove from Cart</RemoveFromCart>
                        </CartListItemDiv>
                    );
                })}
            </CartListsDiv>
        </CartContainer>
    );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
    cartItems: cart.data
});

const mapDispatchProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        removeFromCart: (item: Inventory) => dispatch(removeFromCart(item))
    };
};

export default connect(mapStateToProps, mapDispatchProps)(CartComponent);