import React from 'react'
import Homepage from './Homepage'
import ProrityCount from '../componet/ProrityCount'

interface Props{

}

const DashBorde = (props : Props) => {
  return (
    <div>
       <ProrityCount/> 
      <Homepage/>
    </div>
  )
}

export default DashBorde