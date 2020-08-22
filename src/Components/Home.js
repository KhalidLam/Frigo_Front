import React, { useEffect } from 'react'
import Nav from './LayoutsComponents/Nav'
import Sidebar from './LayoutsComponents/Sidebar'
// import home3 from '../im'
import Home3 from '../img/home3.jpg';
import { Card, CardDeck } from 'react-bootstrap';
import courses from '../img/courses.jpg'
import frigo from '../img/frigo.jpg'
import recettes from '../img/recettes.jpg'
import arrow from '../img/arrow.png'


export default function Home() {


  useEffect(() => {

    console.log(localStorage.username)

  }, [])

  const style = {
    height: '300px'
  }
  return (
    <div>
      <Nav />

      <div  >
        <div
          className="uk-border-rounded-large uk-background-top-center uk-background-cover 
    uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1"
          style={{
            backgroundImage: `url(${Home3})`,
            height: '700px'
          }}
        >
          <div className="uk-position-cover uk-header-overlay" />
          <div className="uk-position-relative" data-uk-grid>
            <div className="uk-width-1-2@m uk-flex uk-flex-middle">
              <div className="uk-padding-large uk-padding-remove-right">
                <h1 className="uk-heading-small uk-margin-remove-top mt-5  " style={{ color: '#eb4a43', fontFamily: 'Lobster', fontSize: '60px' }}>
                  Bienvenue chez Frikocina
            </h1>
                <h3 className="uk-text-secondary title1"  >
                  Qu'est-ce qu'on mange ce soir ?
            </h3>
                {/* <a
              className="uk-text-secondary uk-text-600 uk-text-small hvr-forward"
              href="sign-up.html"
            >
              Sign up today
              <span
                className="uk-margin-small-left"
                data-uk-icon="arrow-right"
              />
            </a> */}
              </div>
            </div>
            <div className="uk-width-expand@m"></div>
          </div>
        </div>
      </div>
      <main className='p-3 presentation'>
        <div className=' container  col-10 mt-5 text-center' style = {{    fontStyle:' italic' }}>
          <Card.Title className='   title1' > Bonjour,  </Card.Title>
          <p >
            Vous rêvez d'une application du quotidien pour cuisiner simplement, sainement tout en disant adieu au gaspillage ?
        </p>
          <p >
            L’application de cuisine gratuite « Frikocina » est faîte pour vous !
         </p>
        </div>
      </main>
      <main className=' container my-5'>
        <div className='d-flex '>

          {/* <CardDeck > */}
          <>
            <Card style={{ width: '18rem', height: '100%' }}>
              <Card.Img style={style} variant="top" src={`${courses}`} />
              <Card.Title className='text-center title4'> Vos Courses </Card.Title>
            </Card>

            <Card.Img style={{ width: '10rem', height: '100%' }} className='align-self-center' variant="top" src={`${arrow}`} />
          </>

          <>
            <Card style={{ width: '18rem', height: '100%' }}>
              <Card.Img style={style} variant="top" src={`${frigo}`} />
              <Card.Title className='text-center title4'>  Vos Aliments   </Card.Title>
            </Card>

            <Card.Img style={{ width: '10rem', height: '10rem' }} className='align-self-center' variant="top" src={`${arrow}`} />
          </>



          <Card style={{ width: '18rem', height: '100%' }}>
            <Card.Img style={style} variant="top" src={`${recettes}`} />
            <Card.Title className='text-center title4'> Vos Recettes </Card.Title>
          </Card>
          {/* </CardDeck> */}
        </div>
      </main>
    </div>
  )
}


