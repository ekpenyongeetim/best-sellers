import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
//Code Examples

// function Greeting() {
//   return <h2>My First Component</h2>;
// }

// function Greeting() {
//   return React.createElement("h2", {}, "Hello World");
// }

// function Greeting() {
//   return (
//     <React.Fragment>
//       <section>...rest of the return</section>
//     </React.Fragment>
//   );
// }

// function Greeting() {
//   return (
//     <>
//       <h2>Code still works</h2>
//       <section>...rest of the return</section>
//     </>
//   );
// }

//First Example Project
// const firstBook = {
//   author: "Jordan Moore",
//   title: "Interesting Facts For Curious Minds",
//   img: "./images/book-1.jpg",
// };
// const secondBook = {
//   author: "James Clear",
//   title: "Atomic Habits",
//   img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       />
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   );
// }
//PROPS
// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   );
// };
// OR
// const Book = ({ img, title, author }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   );
// };

// Another Method
// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author} </h4>
//     </article>
//   );
// };

//Another Method with it's own array and .map
// .map is ued to write jsx in component <Book {code here}/>
// if not the code will not apper on the browser for single elements

function BookList() {
  return (
    <>
      <h1>Amazon Best Seller</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
