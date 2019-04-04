import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT, CART_RESET } from "./actions";

export const initialState = {
  products: [
    {
      id: 1,
      imgUrl:
        "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      name: "Check Print Shirt",
      price: 110
    },
    {
      id: 2,
      imgUrl:
        "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "Gloria High Logo Sneaker",
      price: 91
    },
    {
      id: 3,
      imgUrl:
        "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "Cate Rigid Bag",
      price: 94.5
    },
    {
      id: 4,
      imgUrl:
        "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      name: "Guess Connect Watch",
      price: 438.9
    },
    {
      id: 5,
      imgUrl:
        "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "'70s Retro Glam Kefiah",
      price: 20
    }
  ],
  cart: {
    items: [],
    totalPrice: 0
  }
};

export default function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case CART_ADD_PRODUCT:
      const itemExists = state.cart.items.find(i => i.id === payload.id);
      if (itemExists) {
        return {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.map(i => {
              return i.id === payload.id
                ? { ...i, quantity: i.quantity + 1 }
                : i;
            })
          }
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            items: [...state.cart.items, { ...payload, quantity: 1 }]
          }
        };
      }
    case CART_REMOVE_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(product => {
            return product.id !== payload.id;
          })
        }
      };
    case CART_RESET:
      return {
        ...state,
        cart: initialState.cart
      };
    default:
      return state;
  }
}
