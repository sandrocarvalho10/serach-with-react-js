import { Container } from 'react-bootstrap';
import './App.css';
import ListItem from './components/ListItem';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getBooks } from './components/mock/BookService';
import SearchBar from './components/SearchBar';
 
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
`;
 

function App() {
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    setBooks(getBooks());
  }, [])
  return (
   <Container>
     <h1>LuizTools Books</h1>
      <hr />
      <SearchBar setBooks={setBooks}/>
     <ListContainer>
      {books.map(book => {
          return (
            <ListItem
              key={book.url}
              title={book.title}
              image={book.image}
              price={book.price}
              url={book.url}
            />
          )
        })}
     </ListContainer>
   </Container>
  );
}

export default App;
