import React from "react";

const ModalAddProduct = ({ modalAddProduct, setModalAddProduct }) => {
    return (
        <div className="modal fade show" id="modal-form-add" aria-modal="true">
            <div className="modal-dialog">
                <form className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Добавити товар
                        </h5>
                        <button type="button" className="close" onClick={() => setModalAddProduct(!modalAddProduct)}>
                            <svg className="icon icon-close">
                                <use href="#icon-close"></use>
                            </svg>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder="Назва товару" required />
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder="Картинка (посилання)" />
                        </div>
                        <div className="form-group mb-2">
                            <input type="number" className="form-control" placeholder="Ціна" />
                        </div>
                        <div className="form-group mb-2">
                            <select className="form-control" name="publish" defaultValue="publish">
                                <option value="publish">Опублікувати</option>
                                <option value="unpublish">Приховати</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer mb-3">
                        <button type="button" className="btn-light btn-outline-danger btn-cancel btn-sm" data-dismiss="modal">
                            Відмінити
                        </button>
                        <button type="button" className="btn-light btn-primary">
                            <svg className="icon icon-save">
                                <use href="#icon-save"></use>
                            </svg>
                            Зберегти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalAddProduct;
