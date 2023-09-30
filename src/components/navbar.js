import {  useSelector } from 'react-redux';

const Navbar = () => {
    const favorites = useSelector((state) => state.favorites);
  
    return (
      <div className="navbar">
        
        <p>  {`Favorites: ${favorites.length}`}</p>
      </div>
    );
  };
export default Navbar;