import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  fetchOrdersHistoryAsync, selectCart, selectOrders } from '../store/ordersSlice';
/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AdminOrders = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrdersHistoryAsync(id))
  }, [dispatch])

    const orders = useSelector(selectOrders)
  console.log("orders:",orders)

  return (
    <>
      <h1> User-{id} Orders</h1>
      <Container>
        <Row>
          <Col>Id</Col>
          <Col>Price</Col>
          <Col>Created At</Col>
          <Col>Shipping Address</Col>
          <Col>Shoes</Col>
        </Row>
            <Row key={orders[0].id}>
              <Col>{orders[0].id}</Col>
              <Col>{orders[0].cost}</Col>
              <Col>{orders[0].createdAt}</Col>
              <Col>{orders[0].shippingAddress}</Col>
              <Col>{orders[0].shoes}</Col>
            </Row>
      </Container>
    </>
  )
}

export default AdminOrders