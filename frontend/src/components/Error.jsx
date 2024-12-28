import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <br />
      <h1>OOPS</h1><br /><br />
      <h2>Something went Wrong</h2><br /><br />
      <h3>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default Error
