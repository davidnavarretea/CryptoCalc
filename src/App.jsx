import { useState } from 'react'
import styled from 'styled-components'
import Form from './components/Form'
import CryptoImage from './img/crypto.webp'
/* STYLED */
// H1
const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #feedb5;
  text-align: center;
  font-size: 3.4rem;
  font-weight: 700;
  margin: 8rem 0 5rem 0;
  &::after {
    content: '';
    width: 15rem;
    height: 0.6rem;
    background-color: #feedb5;
    display: block;
    margin: 1rem auto 0 auto;
  }
`
// Container
const Container = styled.div`
  width: 90%;
  max-width: 90rem;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
// Image
const Image = styled.img`
  width: 75%;
  max-width: 40rem;
  margin: 10rem auto 0 auto;
  display: block;
`
/* HTML */
const App = () => {
  return (
    <Container>
      <div>
        <H1>Check Crypto</H1>
        <Form/>
      </div>
      <Image
        src={CryptoImage}
        alt='Crypto'
      />
    </Container>
  )
}

export default App