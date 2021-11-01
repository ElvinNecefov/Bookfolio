import React, { Component } from 'react';
import BookContextProvider from "../contexts/BookContext";
import ThemeContextProvider from "../contexts/ThemeContext";
import BookList from './BookList';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Header from './Header';

export class App extends Component {


  render() {

    return (
      
      <ThemeContextProvider>
        <BookContextProvider>
          <Header />
          <BookList  />
          <Portfolio />
          <Footer />
        </BookContextProvider>
      </ThemeContextProvider>
      
    )
  }
}

export default App;
