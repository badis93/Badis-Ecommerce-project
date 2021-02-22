import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {getproduct} from "./actions";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import './App.scss';

class App extends Component {
    componentDidMount () {
        this.props.getproduct();
    }
  render() {
    return (
            <BrowserRouter>
                <React.Fragment>
                    <Header/>
                    <Switch>
                        <Route exact path={'/'} render={() => {
                            return <Redirect to={'/products'}/>
                        }}/>
                        <Route exact path={'/products'} component={Home}/>
                        <Route exact path={'/products/:id'} component={ProductDetail}/>
                        <Route exact patr={'/cart'} component={ShoppingCart}/>
                    </Switch>
                    <Footer/>
                </React.Fragment>
            </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
    return { 
        data: state.data,
    }
  }
  
  export default connect(mapStateToProps, {getproduct})(App);