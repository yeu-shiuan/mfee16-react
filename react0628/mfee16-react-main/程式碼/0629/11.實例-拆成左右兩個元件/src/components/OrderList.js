import React from 'react'

function OrderList(props) {
  const {
    tshirtOne,
    tshirtTwo,
    tshirtThree,
    setTshirtOne,
    setTshirtTwo,
    setTshirtThree,
  } = props

  return (
    <>
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
        <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/1GrakTl.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">咖啡色 T-shirt</div>
            </div>
            <div className="col">
              <a
                href="#/"
                onClick={() => {
                  // 限制數量為最少要買1件
                  const newTshirtOne =
                    tshirtOne - 1 < 1 ? 1 : tshirtOne - 1

                  setTshirtOne(newTshirtOne)
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {tshirtOne}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setTshirtOne(tshirtOne + 1)
                }}
              >
                +
              </a>
            </div>
            <div className="col">
              $300 <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/ba3tvGm.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">白色 T-shirt</div>
            </div>
            <div className="col">
              <a
                href="#/"
                onClick={() => {
                  const newTshirtTwo =
                    tshirtTwo - 1 < 1 ? 1 : tshirtTwo - 1

                  setTshirtTwo(newTshirtTwo)
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {tshirtTwo}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setTshirtTwo(tshirtTwo + 1)
                }}
              >
                +
              </a>
            </div>
            <div className="col">
              $200 <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/pHQ3xT3.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">黑色 T-shirt</div>
            </div>
            <div className="col">
              <a
                href="#/"
                onClick={() => {
                  const newTshirtThree =
                    tshirtThree - 1 < 1
                      ? 1
                      : tshirtThree - 1

                  setTshirtThree(newTshirtThree)
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {tshirtThree}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setTshirtThree(tshirtThree + 1)
                }}
              >
                +
              </a>
            </div>
            <div className="col">
              $450 <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
