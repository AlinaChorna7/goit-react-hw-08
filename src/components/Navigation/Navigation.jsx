
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
     
      <NavLink to="/" style={navStyle}>
        Home
      </NavLink>


      {isLoggedIn && (
        <NavLink to="/contacts" style={navStyle}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};


const navStyle = ({ isActive }) => ({
  color: isActive ? 'tomato' : 'black',
  margin: '0 10px',
  textDecoration: 'none',
});
