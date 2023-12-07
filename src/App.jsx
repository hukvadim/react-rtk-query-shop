import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import config from './utils/config';

// Сторінки сайту
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Order from "./pages/Order";
import Search from "./pages/Search";
import Category from "./pages/Category";

// Ліниво завантажений компонент Admin
const Admin = lazy(() => import('./admin'));

function App() {

    return (
        <BrowserRouter basename={config.siteUrl}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={`/category/:categoryId`} element={<Category />} />
                    <Route path={`/about`} element={<About />} />
                    <Route path={`/delivery`} element={<Delivery />} />
                    <Route path={`/contacts`} element={<Contacts />} />
                    <Route path={`/search`} element={<Search />} />
                    <Route path={`/order`} element={<Order />} />
                    <Route path={`*`} element={<NoMatch />} />
                </Route>
                <Route
                    path="/admin"
                    element={
                        <Suspense fallback={<div>Завантаження...</div>}>
                            {/* {"Nav"} */}
                            <Admin />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
