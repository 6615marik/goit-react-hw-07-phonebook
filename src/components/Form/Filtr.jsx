import { useDispatch } from 'react-redux';
import { setContactFilter } from 'redux/slice';
import { useSelector } from 'react-redux';
export const Filtr = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  // console.log(filter);
  const filtrValue = e => {
    console.log(e.target.value);
    dispatch(setContactFilter(e.target.value));
  };
  return (
    <>
      <h2>Find contacts by name</h2>
      <input type="text" value={filter} onChange={filtrValue} />
    </>
  );
};
