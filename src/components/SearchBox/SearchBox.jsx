import styles from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import { useSelector } from 'react-redux';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <h2>Find contacts by name</h2>
      <input  
        className={styles.searchInput}
        type="text"
        value={filter}
        onChange={handleChange} />
    </div>
  );
}