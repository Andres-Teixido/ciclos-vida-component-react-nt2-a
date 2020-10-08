import React from 'react'

export default ({marca, modelo}) => {
  return (
    <li>{marca} - { modelo }</li>
  )
}

export const OtroVehiculo = (prop) => {
  
  return (
    <li>{prop.marca} - { prop.modelo }</li>
  )
}

export function TercerVehiculo(prop){
  return (
    <li><b>{prop.marca}</b> - { prop.modelo }</li>
  )
}