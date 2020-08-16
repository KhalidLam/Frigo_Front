import React, { useState, useEffect } from 'react'
import { Button, Card, Form, Spinner, ListGroupItem, ListGroup } from 'react-bootstrap'
import { GrEdit } from 'react-icons/gr'
import { BsTrash } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

import { PostComment, GetComment, GetEditComment, EditComment, deleteComment } 
from '../FunctionComponents/UserFunction';
export default function Comment(props) {

  const recetteId = props.recipeId
  const [comment, setComment] = useState('')
  const [EditCommentId, setEditCommentId] = useState()
  const [OldComment, setOldComment] = useState()
  const [NewComment, setNewComment] = useState()
  const [AllComments, setAllComments] = useState([])
  const [input, setInput] = useState(false)
  const [changeComment, setChangeComment] = useState(false)
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const [spinner, setSpinner] = useState(false)

  //comments
  useEffect(() => {
    GetComment(recetteId).then(response => {
    
      setAllComments(response.data)
      console.log(response);
      setSpinner(false)
    }).catch((error) => {
      console.log('error ' + error);
    })
  
  }, [changeComment])


  const DataComment = { comment: comment, recetteId: recetteId, rating: rating }
  const SubAddComment = (e) => {
    e.preventDefault();
    PostComment(DataComment).then((res) => {
      setChangeComment(!changeComment)
      console.log(res);
      setComment('')
      setRating('')
    }).catch((err) => {
      console.log(err.message);
    })
    console.log(DataComment.comment)
  }

  //edit
  const HandelEdit = (commentId) => {
    setEditCommentId(commentId)
    setInput(true)
    GetEditComment(commentId).then((res) => {
      console.log(res.data);
      console.log(res.data[0].comment);
      setNewComment(res.data[0].comment)
    }).catch((err) => {
      console.log(err.message);
    })
    console.log(commentId)
  }
  const DataEditComment = { comment: NewComment, commentId: EditCommentId }
  const SubEditComment = (e) => {
    e.preventDefault();
  console.log("NewComment");
  console.log(NewComment);

    setSpinner(true)
    EditComment(DataEditComment).then((res) => {
      setEditCommentId('')
      
      setChangeComment(!changeComment)

      console.log(res);
      setInput(false)
    }).catch((err) => {
      console.log(err.message);
    })
    console.log(DataComment.comment)

  }
  //delete
  const HandelDeleteComment = (commentId) => {
    deleteComment(commentId).then((res) => {
      setChangeComment(!changeComment)
      console.log(res);
    }).catch((err) => {
      console.log(err.message);
    })
    console.log(commentId)
  }
  var dateFormat = require('dateformat');
  return (
    <>
   
          
      <Card.Title className='text-center title  '>Comments   </Card.Title> 

      <ul className="uk-comment-list uk-margin-medium-top">
        <li>
        <Card>
        <ListGroup className="list-group-flush  "> 

          {AllComments.map((item, i) => 
              <ListGroupItem key = {i} >  
                <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                  <div className="uk-width-auto">
                    <img
                      className="uk-comment-avatar uk-border-circle"
                      src={`http://localhost:1000/${item.avatar}`} 
                      width={50}
                      height={50}
                      alt="Alice Thomson"
                    />
                  </div>
                  <div className="uk-width-expand">
                    <h4 className="uk-comment-title uk-margin-remove">
                      <a className="uk-link-reset" href="#">
                        {item.name}
                      </a>
                    </h4>
                    <p className="uk-comment-meta uk-margin-remove">
                      <a className="uk-link-reset" href="#">
                      {item.date}
                        {/* {dateFormat(new Date(item.date), "dddd, mmmm dS, yyyy, h:MM:ss TT")} */}
                      </a>
                    </p> 
                    <div className="uk-rating">
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                          <label key = {i}>
                            <input type="radio" name="rating" value={item.rating} hidden />
                            <FaStar className='star'  color={ratingValue <= (item.rating) ? "F90" : "rgb(161, 158, 158)"} size={18} />
                          </label>
                        )
                      })} 
                    </div> 
                  </div>
                </div>  
              <div className="uk-comment-body"> 
                {item.id !== EditCommentId ?
                  <div className='d-flex justify-content-between'> 
                    <div>
                      <p className='ml-5'>
                        {item.comment}
                      </p>
                    </div>
                    {item.user_id == localStorage.userId &&
                      <div className='d-flex justify-content-between' style={{ width: '8%' }}>
                        <GrEdit color = '#ff9900' onClick={() => HandelEdit(item.id)} style={{ cursor: 'pointer' }} />
                        <BsTrash color = 'red' onClick={(e) => HandelDeleteComment(item.id)} style={{ cursor: 'pointer' }} />
                      </div>
                    }

                  </div>
                  : 
                  <div>
                    {spinner ?
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                      :
                      <Form onSubmit={(e) => SubEditComment(e)}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                           <Form.Control onChange={(e) => { setNewComment(e.target.value) }}
                            defaultValue={NewComment || ''}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Button variant="warning" type="submit" className='add'>
                            Modifier
            </Button>
                        </Form.Group>
                      </Form>
                    }
                  </div>
                } 
              </div> 
              </ListGroupItem> 
          )}
 </ListGroup>
</Card>

          <article
            className="uk-comment uk-comment-primary uk-visible-toggle uk-border-rounded mt-5"
          // tabIndex={-1}
          >
            <Form onSubmit={(e) => SubAddComment(e)}>
              <h2> Noter cette recette</h2>

              {[...Array(5)].map((star, i) => {

                const ratingValue = i + 1;
                return (
                  <label key = {i} >
                    <input type="radio" name="rating" value={ratingValue} hidden
                      onClick={() => setRating(ratingValue)}

                    />
                    <FaStar className='star mt-3'
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                      color={ratingValue <= (hover || rating) ? "F90" : "rgb(161, 158, 158)"} size={18} />
                  </label>

                )
              }
              )}

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className='align-self-center'> Laisser un commentaire </Form.Label>
                <Form.Control as="textarea" rows="3" onChange={(e) => { setComment(e.target.value) }}
                  value={comment} />

                <Button variant="warning" type="submit" className='add d-flex justify-content-center'>
                  Post comment
                               </Button>
              </Form.Group>
            </Form>
          </article>

        </li>
      </ul> 
    </>
  )
}
