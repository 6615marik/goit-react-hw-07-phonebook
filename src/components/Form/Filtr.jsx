import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
export const Filtr = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  // console.log(filter);
  const filtrValue = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <h2>Find contacts by name</h2>
      <input type="text" value={filter} onChange={filtrValue} />
    </>
  );
};
