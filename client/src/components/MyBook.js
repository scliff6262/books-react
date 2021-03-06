import React from 'react'

const MyBook = (props) => {
  const book = props.book
  const description = (props.book.description.length > 125 ? props.book.description.substring(0, 125) + "..." : props.book.description)
  return(
    <li className="my-book">
      <div className="card" book-id={book.id}>
        <img className="card-img-top img-fluid" src={book.img_link} alt="Not Available"/>
        <h5 className="card-title">{book.title.substring(0,30)}</h5>
        <p className="author card-subtitle mb-2 text-muted"> {book.author} </p>
        <p className="card-text">{ description ? description : null}</p>
        { book.buy_link ? <div><a className="card-link" target="_blank" href={book.buy_link}>Purchase</a><br/></div> : null }
        { book.prev_link ? <a className="card-link" target="_blank" href={book.prev_link}>Preview</a> : null }
        { book.has_read ? null : <button className="btn btn-primary finished" onClick={props.handleClick}>Finished Reading</button>}
        <button className="btn btn-danger remove" onClick={props.handleClick}>Delete</button>
      </div>
    </li>
  )
}

export default MyBook
