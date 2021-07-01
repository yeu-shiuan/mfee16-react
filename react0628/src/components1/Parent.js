//Props父母傳給子女
// import React, { useState } from 'react'
// import ChildA from './ChildA'
// import ChildB from './ChildB'

// function Parent() {
//   const [data, setData] = useState('parent data')

//   return (
//     <>
//       <ChildA data={data} />
//       <ChildB />
//     </>
//   )
// }

// export default Parent

//Props子女傳給父母
import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [parentData, setParentData] = useState('Parent Data')
  const [isChildAAlive, setIsChildAAlive] = useState(true)

  return (
    <>
      <button
        onClick={() => {
          setIsChildAAlive(!isChildAAlive)
        }}
      >
        {isChildAAlive ? 'ChildA再見' : 'ChildA活回來'}
      </button>
      {isChildAAlive && <ChildA parentData={parentData} />}
      {/* <ChildB setParentData={setParentData} /> */}
    </>
  )
}

export default Parent
