import { useDispatch, useSelector } from 'react-redux';
import {removeFromFavorites} from '../favoritesActions'
const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
  
    const removeProduct = (productId) => {
      dispatch(removeFromFavorites(productId));
    };
  
    return (
      <div className="favorites">
        <h2>Favorites</h2>
        {favorites.length === 0 ? (
          <p>No favorites selected yet.</p>
        ) : (
          <ul>
            {favorites.map((productId) => (
              <li key={productId}>
                Product ID: {productId}
                <button onClick={() => removeProduct(productId)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default Favorites;