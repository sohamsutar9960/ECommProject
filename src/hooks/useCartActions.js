import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {
  addToCart,
  removeAllFromCart,
  removeFromCart,
  updateQuantity,
} from '../store/cartSlice';

const useCartActions = () => {
  const dispatch = useDispatch();

  // Memoized handler for adding an item into the cart
  const handleAddToCart = useCallback(
    product => {
      dispatch(
        addToCart({
          id: product.id,
          name: product.title,
          image: product.image,
          price: product.price,
          category: product.category,
          quantity: 1,
        }),
      );
    },
    [dispatch],
  );

  // Memoized handler for removing an item from the cart
  const handleRemoveFromCart = useCallback(
    id => {
      dispatch(removeFromCart(id));
    },
    [dispatch],
  );

  // Memoized handler for updating quantity
  const handleUpdateQuantity = useCallback(
    (id, quantity) => {
      if (quantity > 0) {
        dispatch(updateQuantity({id, quantity}));
      } else {
        handleRemoveFromCart(id);
      }
    },
    [dispatch, handleRemoveFromCart],
  );

  // Memoized handler for removing all items from the cart
  const handleRemoveAllFromCart = useCallback(() => {
    dispatch(removeAllFromCart());
  }, [dispatch]);

  return {
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity,
    handleRemoveAllFromCart,
  };
};

export default useCartActions;
