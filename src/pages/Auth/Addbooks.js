import React from "react";

const Addbooks = () => {
    return (
        <>
            <div className="contaiter mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form className="border border-primary p-4">
                            <h4 className="text-center md-4">
                                Add Books
                            </h4>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputDescription">Description</label>
                                    <input
                                        type="description"
                                        className="form-control"
                                        id="Description"
                                        placeholder="Description"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputName">Name</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        id="Name"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputPrice">Price</label>
                                    <input
                                        type="price"
                                        className="form-control"
                                        id="Price"
                                        placeholder="Price"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputauthor">Author</label>
                                    <input 
                                    type="author"
                                    className="form-control"
                                    id="Author"
                                    placeholder="Author"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputCategory">Category</label>
                                    <select id="inputCategory" className="form-control">
                                        <option selected>React</option>
                                        <option>java</option>
                                        <option>C++</option>
                                        <option>Asp.Net</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputImage">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="Image"
                                    />
                                </div>
                            </div>
                            <button type="sumbit" className="btn btn-primary">
                                Sumbit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addbooks;