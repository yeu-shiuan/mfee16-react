//函式型元件
// import React, { useState } from 'react'

// function App() {
//   // 一組狀態
//   // useState(0)
//   // =>[獲得狀態(變數),設定狀態(函數)]
//   // 解構賦值(ES6)
//   const [total, setTotal] = useState(9)
//   return (
//     <>
//       <h1
//         onClick={() => {
//           setTotal(total + 1)
//         }}
//       >
//         {total}
//       </h1>
//     </>
//   )
// }

// export default App

//類別型元件
import React from 'react'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 9,
    }
  }
  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}
export default App
