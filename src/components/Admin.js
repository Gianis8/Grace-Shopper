import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AdminUserData from './AdminUserData';
import { addShoes } from '../store/shoesSlice';
import { Accordion, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import AllShoes from './AllShoes';


/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const Admin = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')

  async function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(addShoes({
      name,
      size,
      price,
      brand,
      type,
      color,
    }))

  }

  return (
    <div id='invForm'>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor='name'>Name</Form.Label>
          <Form.Control name='name' value={name} onChange={(evt) => setName(evt.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='size'>Size</Form.Label>
          <Form.Control name='size' type='number' value={size} onChange={(evt) => setSize(+evt.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='brand'>Brand</Form.Label>
          <Form.Control name='brand' value={brand} onChange={(evt) => setBrand(evt.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='type'>Type </Form.Label>
          <Form.Control name='type' value={type} onChange={(evt) => setType(evt.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='price'>Price</Form.Label>
          <Form.Control name='price' type='number' value={price} onChange={(evt) => setPrice(+evt.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='color'>Color</Form.Label>
          <Form.Control name='color' value={color} onChange={(evt) => setColor(evt.target.value)} />
        </Form.Group>
        <Button type='submit'>Add to inventory</Button>
      </Form>
      <Accordion >
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Users</Accordion.Header>
          <Accordion.Body>
            <AdminUserData />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Inventory</Accordion.Header>
          <Accordion.Body>
            <AllShoes />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Admin