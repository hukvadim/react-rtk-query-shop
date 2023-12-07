import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './admin.css';
import ModalAddProduct from './ModalAddProduct';

const Admin = () => {

	// Переклюаємо модальне вікно
	const [modalAddProduct, setModalAddProduct] = useState(false);

	// Встановлюємо класи для body
	const bodyClasses = `page-admin ${modalAddProduct ? 'modal-open' : ''}`;

	return (
        <>
            {/* Використовуємо Helmet для додавання класів до body */}
            <Helmet>
                <body className={bodyClasses} />
            </Helmet>

            <div className="box-view-products">
                <div className="container">
                    <div className="box-view-products__header">
                        <h1 className="box-view-products__title">Каталог товарів</h1>
                        <div className="box-view-products__header-actions">
                            <button className="btn-light btn-primary btn-sm" onClick={() => setModalAddProduct(!modalAddProduct)}>
                                <svg className="icon icon-plus"><use href="#icon-plus"></use></svg>
                                Добавити
                            </button>
                        </div>
                    </div>

                    <div className="box-view-products__content mt-3">
                        <div className="form-group form-group--icon mb-3 position-relative">
                            <svg className="icon icon-search">
                                <use href="#icon-search"></use>
                            </svg>
                            <input type="text" className="form-control" placeholder="Знайти товар" />
                        </div>

                        <div className="box-view-products__content-cards">
                            <div className="card card-373">
                                <div className="card-img-hold">
                                    <img src="https://picsum.photos/id/24/250/160" className="card-img" alt="" />
                                    <span className="badge badge-publish badge-success">Опублікувати</span>
                                    <div className="card-img-actions d-flex-center">
                                        <button className="btn-light btn-light rounded-circle d-flex-center">
                                            <svg className="icon icon-edit">
                                                <use href="#icon-edit"></use>
                                            </svg>
                                        </button>
                                        <button className="btn-light btn-light rounded-circle d-flex-center">
                                            <svg className="icon icon-delete">
                                                <use href="#icon-delete"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card-body-text">
                                        <div className="card-title">Fleet - Travel shopping UI desgn kit</div>
                                        <p className="card-meta">
                                            <svg className="icon icon-clock">
                                                <use href="#icon-clock"></use>
                                            </svg>
                                            2 дні назад
                                        </p>
                                    </div>
                                    <div className="card-body-price">
                                        <span className="badge badge-success badge-price">$64</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalAddProduct modalAddProduct={modalAddProduct} setModalAddProduct={setModalAddProduct} />
        </>
    );
}

export default Admin;
