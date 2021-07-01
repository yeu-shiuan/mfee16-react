import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  const { products, counts, setCounts } = props

  //更新某個商品數量

  const setProductItemCount = (productIndex, newCount) => {
    // 1. 先從目前的狀態拷貝一份新的
    const newCounts = [...counts]

    //2. 在這個拷貝的陣列或物件上更新
    newCounts[productIndex] = newCount

    //3. 把更新完成的陣列或物件(新狀態)，設定回原本壯態
    setCounts(newCounts)
  }

  return (
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h4>
              <b>訂購單</b>
            </h4>
          </div>
          <div className="col align-self-center text-right text-muted">
            3種商品項目
          </div>
        </div>
      </div>
      {products.map((product, index) => (
        <ProductItem
          category={product.category}
          name={product.name}
          image={product.image}
          price={product.price}
          count={counts[index]}
          setCount={(newCount) => {
            setProductItemCount(index, newCount)
          }}
        />
      ))}
      <div className="back-to-shop">
        <a href="#/">←</a>
        <span className="text-muted">回到商品頁</span>
      </div>
    </div>
  )
}

export default OrderList
