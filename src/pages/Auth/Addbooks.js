import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import '../css/Addbooks.css';
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Button, Modal } from "react-bootstrap";


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

    const [imagePreview, setImagePreview] = useState(null);
    const [showModal, setShowModal] = useState(false);

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
        e.preventDefault();

        setBookFormData({
            ...bookFormData,
            bookImage: e.target.files[0]
        })

        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();


            reader.onloadend = () => {
                setBookFormData({
                    ...bookFormData,
                    bookImage: file, // Set the image property to the File object directly
                });
                setImagePreview(reader.result);
            };

            reader.readAsDataURL(file);
        } else {
            setBookFormData({
                ...bookFormData,
                bookImage: null, // Clear the bookImage property
            });
            setImagePreview(null);
            setError({ bookImage: "Please select a valid image file (JPEG or PNG)." });
        }
    }

        const handlePreview = () => {
            setShowModal(true);
        };
    const handleCloseModal = () => {
        setShowModal(false);
    };

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
            toast("update Successfully");
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
                    navigate("/books")
                })
        }

    }

    const onKeyBtn = (e) => {
        if (e.key === "Enter") {
            Addbooks();
        }
    }
    const cancelBtn = () => {
        navigate("/books");
    };
    useEffect(() => {
        const handleAddGameShortcut = (e) => {
            if (e.key === "s" && e.altKey) {
                e.preventDefault();
                Addbooks();
            }
        };

        const handleCancelShortcut = (e) => {
            if (e.key === "c" && e.altKey) {
                e.preventDefault();
                navigate("/books");
            }
        };

        document.addEventListener("keydown", handleAddGameShortcut);
        document.addEventListener("keydown", handleCancelShortcut);

        return () => {
            document.removeEventListener("keydown", handleAddGameShortcut);
            document.removeEventListener("keydown", handleCancelShortcut);
        };
    }, []);


    return (
        <>
            <div className="contaiter mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form className="border border-primary p-4">
                            <h1 style={{ textAlign: "center", marginBottom: "5%" }}>
                                {" "}
                                {location?.state?.id ? "Update" : "Add"} Book
                            </h1>
                            
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
                            </div>
                            <div className="form-row">
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
                            </div>
                            <div className="form-row">
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

                                    <div className='form-group col-md-6 mb-3'>
                                        <label htmlFor='inputImage'>Image</label>
                                        <div className='custom-file'>
                                            <input
                                                type='file'
                                                className='custom-file-input'
                                                id='Image'
                                                onChange={(e) => {
                                                    setError({
                                                        ...error,
                                                        bookImage: "",
                                                    });
                                                    handleImageChange(e);
                                                }}
                                            />
                                            <label className='custom-file-label' htmlFor='Image'>
                                                Choose file
                                            </label>
                                        </div>
                                        {error.bookImage && (
                                            <p className='text-danger'>{error.bookImage}</p>
                                        )}
                                    {imagePreview && (
                                        <div className='form-group col-md-6 mb-3'>
                                            <p
                                                className='btn btn-primary'
                                                style={{
                                                    marginTop: "35px",
                                                    width: "120px",
                                                    background: "#000",
                                                    color: "#fff",
                                                }}
                                                onClick={handlePreview}
                                            >
                                                Show Preview
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className="button" style={{ backgroundColor: "#0c4c91", color: "white" }} onClick={Addbooks} >
                                Add books
                            </p>
                            <p className="button" style={{ backgroundColor: "#0c4c91", color: "white" }} onClick={cancelBtn} >
                                Cancel
                            </p>
                            <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header>
              <Modal.Title>Image Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt='Preview'
                  className='img-preview-modal centered-img'
                  width={470}
                  height={300}
                />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
                        </form>
                    </div>
                </div >
            </div >
        </>
    );
}

export default Addbooks;