import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 以下要導入所需要頁面
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/product/Product'
import ProductBaby from './pages/product/ProductBaby'
import ProductMen from './pages/product/ProductMen'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import ProductBabyCart from './pages/product/ProductBabyCart'

// 路由器所在的位置，記錄所有的路由
// 全域狀態放在這裡
function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <h3>用Link連結</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/product">Product</Link>
        {/* <h3>用a連結</h3>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <a href="/product">Product</a> */}

        {/* 以下是路由表 */}
        <Switch>
          <Route path="/product/men">
            <ProductMen />
          </Route>
          <Route path="/product/baby/cart">
            <ProductBabyCart />
          </Route>
          <Route path="/product/baby">
            <ProductBaby />
          </Route>
          {/* 此處設定網址上的params */}
          {/* `:id` 取名params的屬性名為id */}
          {/* `?` 可選的 */}
          <Route path="/product/:id?">
            <Product auth={auth} />
          </Route>
          <Route path="/login">
            <Login setAuth={setAuth} auth={auth} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          {/* 404頁面，找不到頁面 */}
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
