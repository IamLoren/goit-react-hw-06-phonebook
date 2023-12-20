import s from './SearchFilter.module.css';

export const SearchFilter = ({ filterState, changeFilter }) => {
 
    return (
      <label className={s.searchLabel}>
        Find contacts by name
        <input
          name="filter"
          value={filterState}
          onChange={event => changeFilter(event)}
          type="text"
          placeholder='Enter contact name'
        />
      </label>
    );

}
