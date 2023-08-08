import React from 'react'

const Notes = ({params}) => {
  return (
    <div>
        <input type="text" defaultValue={params.note}/>

    </div>
  )
}

export default Notes