import { InputField } from './InputField/InputField';
import { ContactsList } from './contactsList/ContactsList';
import { SearchFilter } from './SearchFilter/SearchFilter';


export const App =() => {

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <InputField />
         <h2>Contacts</h2>
        <ContactsList>
          <SearchFilter />
        </ContactsList>
      </div>
    );
}
