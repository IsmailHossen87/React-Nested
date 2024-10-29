import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home SECtion</h1>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}
