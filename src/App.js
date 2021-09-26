import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Authpage from './pages/Authpage';
import Categories from './pages/Categories';
import Basket from './pages/Basket';
import Profile from './pages/Profile';
import Product from './pages/product';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './style/app.scss';
import ProtectedRoute from './ProtectedRoute';
import Cookies from 'universal-cookie';

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
   

    console.log(isAuthenticated);

    const authHandler = () => {
        setIsAuthenticated(true);
      };

    const logoutHandler = () =>{
        setIsAuthenticated(false);
        cookie.remove("token");
    }


    const cookie = new Cookies();

    //componentDidMount -> useEffect:
    useEffect(() => {
      const authCookie = cookie.get("token");
      authCookie ? authHandler() : logoutHandler();

    }, []);



    const [theme, setTheme] = useState({
        palette: 'light',
    });
    const { palette } = theme;
    const themeHandler = (event) => {
        const { name, value } = event.target;
        setTheme((prevState) => ({ ...prevState, [name]: value }));
        // console.log("theme", theme);
    };

    console.log(isAuthenticated);

    return (
        <div className="app-container palette" data-theme-palette={palette}>
            <div className="pages">
                <Switch>
                    <Route path="/" exact>
                        <Header themeHandler={themeHandler} theme={theme} />
                        <Home />
                        <Footer />
                    </Route>
                    <Route path="/Categories">
                        <Header themeHandler={themeHandler} theme={theme} />
                        <Categories />
                        <Footer />
                    </Route>
                    <Route path="/Authpage" component={Authpage} isAuthenticated={isAuthenticated} authHandler={authHandler} />
                    <Route path="/Basket">
                        <Header themeHandler={themeHandler} theme={theme} />
                        <Basket />
                        <Footer />
                    </Route>
                    <ProtectedRoute  auth={isAuthenticated}  path="/Profile" >
                        <Profile component={Authpage} isAuthenticated={isAuthenticated} logoutHandler={logoutHandler} />
                        </ProtectedRoute>

                    <Route path="/Product">
                        <Header themeHandler={themeHandler} theme={theme} />
                        <Product />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;
