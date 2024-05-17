import React from 'react'

function Items({params}:{params:{item:string}}) {
 
  return (
  <>
  <h1>
    items details here ...
  </h1>
<p>
  {params.item}
</p>
  </>
  )
}

export default Items