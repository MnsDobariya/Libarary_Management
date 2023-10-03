import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import '../css/Addbooks.css';
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const categoryDropDown = [
    { label: "c", value: "c" },
    { label: "c++", value: "c++" },
    { label: "java", value: "java" },
    { label: "asp.net", value: "asp.net" },
    { label: "react", value: "react" },
];



const Addbooks = () => {

    const location = useLocation();

    const [bookFormData, setBookFormData] = useState({
        title: '',
        author: '',
        description: '',
        bookImage: '',
        category: '',
        price: ''
    })

    useEffect(() => {
        if (location?.state) {
            setBookFormData(location?.state)
        }
    }, [location])

    const [error, setError] = useState({
        title: '',
        author: '',
        description: '',
        bookImage: '',
        category: '',
        price: ''

    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBookFormData({
            ...bookFormData,
            [e.target.name]: e.target.value
        })
    }


    const handleImageChange = (e) => {
        setBookFormData({
            ...bookFormData,
            bookImage: e.target.files[0]
        })
    }

    const Addbooks = () => {
        const error = {};

        if (!bookFormData.title) {
            error.title = "please title required";
        }

        if (!bookFormData.author) {
            error.author = "please author required";
        }

        if (!bookFormData.description) {
            error.description = "please description required";
        }

        // const nameRegex = /^[a-zA-Z]*$/;
        // if (!bookFormData.name) {
        //     error.name = "please name required";
        // } else if (!nameRegex.test(bookFormData.name)) {
        //     error.name = "Invalid name"
        // }

        if (!bookFormData.bookImage) {
            error.bookImage = "please Image required";
        }


        const priceRegex = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
        if (!bookFormData.price) {
            error.price = "please price required";
        } else if (!priceRegex.test(bookFormData.price)) {
            error.price = "Invalid price"
        }


        if (error.title || error.author || error.description || error.bookImage || error.price) {
            setError(error)
            return;
        }

        console.log("id", location?.state);
        const form_data = new FormData();

        form_data.append("title", bookFormData?.title)
        form_data.append("author", bookFormData?.author)
        form_data.append("description", bookFormData?.description)
        form_data.append("bookImage", bookFormData?.bookImage)
        form_data.append("category", bookFormData?.category)
        form_data.append("price", bookFormData?.price)

        if (location?.state) {
            console.log("location?.state", location?.state);
            axios.put(`http://localhost:3001/api/v1/books/update/${location?.state?.id}`, form_data)
                .then((res) => {
                    console.log("update", res);
                    navigate("/books")
                })
        } else {
            axios.post("http://localhost:3001/api/v1/books/create", form_data)
                .then((res) => {
                    if (res.status === 201) {
                        setBookFormData({
                            title: '',
                            author: '',
                            description: '',
                            bookImage: '',
                            category: '',
                            price: ''
                        })
                    }
                    toast('Add Book Successfully');
                    navigate("/home")
                })
        }

    }

    const onKeyBtn = (e) => {
        if (e.key === "Enter") {
            Addbooks();
        }
    }


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
                                <div className="form-group col-md-6 mb-0">
                                    <label for="inputDescription">title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        value={bookFormData.title}
                                        placeholder="Description"
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                title: ''
                                            })
                                            handleChange(e)
                                        }}
                                    />
                                    {
                                        error.title && <p>{error.title}</p>
                                    }
                                </div>
                                <div className="form-group col-md-6 mb-0">
                                    <label for="inputDescription">author</label>
                                    <input
                                        type="text"
                                        name="author"
                                        className="form-control"
                                        value={bookFormData.author}
                                        placeholder="Description"
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                author: ''
                                            })
                                            handleChange(e)
                                        }}
                                    />
                                    {
                                        error.author && <p>{error.author}</p>
                                    }
                                </div>
                                <div className="form-group col-md-6 mb-0">
                                    <label for="inputDescription">Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        value={bookFormData.description}
                                        placeholder="Description"
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                description: ''
                                            })
                                            handleChange(e)
                                        }}
                                    />
                                    {
                                        error.description && <p>{error.description}</p>
                                    }
                                </div>
                                {/* <div className="form-group col-md-6 mb-0">
                                    <label for="inputName">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={bookFormData.name}
                                        placeholder="Name"
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                name: ''
                                            })
                                            handleChange(e)
                                        }}

                                    />
                                    {
                                        error.name && <p>{error.name}</p>
                                    }
                                </div> */}
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6 mb-0">
                                    <label for="inputPrice">Price</label>
                                    <input
                                        type="text"
                                        name="price"
                                        className="form-control"
                                        value={bookFormData.price}
                                        placeholder="Price"
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                price: ''
                                            })
                                            handleChange(e)
                                        }}
                                    />
                                    {
                                        error.price && <p>{error.price}</p>
                                    }
                                </div>
                                <div className="form-group col-md-6 mb-0">
                                    <label for="inputCategory">Category</label>
                                    <select name="category" id="inputCategory" className="form-control"
                                        value={bookFormData.category}
                                        onChange={(e) =>
                                            handleChange(e)
                                        }>
                                        {categoryDropDown &&
                                            categoryDropDown?.map((x) => (
                                                <option value={x.value}>{x.value}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6 ">
                                    <label for="inputImage">bookImage</label>
                                    <input
                                        type="file"
                                        name="bookImage"
                                        className="form-control"
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                bookImage: ''
                                            })
                                            handleImageChange(e)
                                        }}
                                        onKeyPress={(e) => onKeyBtn(e)}
                                    />
                                    {
                                        error.bookImage && <p>{error.bookImage}</p>
                                    }
                                </div>
                            </div>
                            <p className="button" style={{ verticalAlign: "middle" }}><span className="sign-in-btn" onClick={Addbooks} >
                                Addbooks</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Addbooks;