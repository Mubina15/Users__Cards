import React from 'react'
import loading from "../../../Assets/img/Rolling-1.1s-323px.gif"

export const Loading = () => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img src={loading} alt="loading" />
    </div>
  )
}
