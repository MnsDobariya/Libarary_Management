import React, { useEffect, useState } from "react";
// import '../css/Addbooks.css';
import { ToastContainer, toast } from "react-toastify";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";




// const rows = [
//     { id: 1, description: 'Snow', name: 'Jon', price: 35, category: 'c', Image: 'Image' },
//     { id: 2, description: 'Lannister', name: 'Cersei', price: 42, category: 'c++', Image: 'Image' },
//     { id: 3, description: 'Lannister', name: 'Jaime', price: 45, category: 'java', Image: 'Image' },
//     { id: 4, description: 'Stark', name: 'Arya', price: 16, category: 'asp.net', Image: 'Image' },
//     { id: 5, description: 'Targaryen', name: 'Daenerys', price: null, category: 'react', Image: 'Image' },
//     { id: 6, description: 'Melisandre', name: null, price: 150, category: 'c', Image: 'Image' },
//     { id: 7, description: 'Clifford', name: 'Ferrara', price: 44, category: 'c++', Image: 'Image' },
//     { id: 8, description: 'Frances', name: 'Rossini', price: 36, category: 'java', Image: 'Image' },
//     { id: 9, description: 'Roxie', name: 'Harvey', price: 65, category: 'asp.net', Image: 'Image' },
// ];



// toast.configure();

const categoryDropDown = [
    { label: "c", value: "c" },
    { label: "c++", value: "c++" },
    { label: "java", value: "java" },
    { label: "asp.net", value: "asp.net" },
    { label: "react", value: "react" },
];

const Books = () => {
    const [booksData, setBookData] = useState([])
    // console.log("books",booksData);
    const getBookData = () => {
        axios.get("http://localhost:3001/api/v1/books/get")
            .then((res) => {
                // console.log("response",res);
                setBookData(res?.data)
            })
    }

    useEffect(() => {
        getBookData()
    }, [])

    const [openPopup, setOpenPopUp] = useState(false)
    const [deleteRowId, setDeleteRowId] = useState()

    const navigator = useNavigate();

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'author', headerName: 'Author', width: 150 },
        { field: 'description', headerName: 'Description', width: 150 },
        { field: 'bookImage', headerName: 'BookImage', width: 150 },
        { field: 'category', headerName: 'category', width: 150 },
        { field: 'price', headerName: 'price', width: 150 },
        // action


        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <FontAwesomeIcon icon={faEdit} onClick={() => {
                            navigator(`/addbooks`, { state: params.row });
                        }} />
                        <FontAwesomeIcon icon={faDeleteLeft} data-toggle="modal" data-target="#exampleModalCenter" onClick={(e) => {
                            console.log("e", params.row.id);
                            // console.log(params.row.id);
                            setOpenPopUp(true)
                            setDeleteRowId(params.row.id)


                        }} />
                    </>
                );
            },
        },
    ];

    const deleteRecord = (id) => {
        // console.log("abc",id);
    }

    return (
        <>
            <DataGrid rows={booksData} columns={columns} pageSize={5}
                components={{
                    Toolbar: () => (
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <GridToolbar />
                            <div>
                                <button
                                    className="btn btn-primary edit-btn"
                                    style={{ marginRight: '10px', cursor: 'pointer', padding: '10px 10px' }}
                                    onClick={() => {

                                        navigator('/addbooks')
                                    }}
                                >Add Book</button>
                            </div>
                        </div>
                    ),
                }}
                style={{ height: '80vh', width: '100%', padding: '20px' }}
                onRowClick={(e) => {
                    console.log(e)
                }}
                className="custom-data-grid"
            />
            {/* {
                console.log("hello", rows.id)
            } */}
            {openPopup &&
                <div>
                    {/* hello
                    <button onClick={() => deleteRecord(deleteRowId)}>Yes</button>
                    <button onClick={() => { setOpenPopUp(false) }}>No</button> */}


                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => deleteRecord(deleteRowId)}>No</button>
                                    <button type="button" class="btn btn-primary" onClick={() => setOpenPopUp(false)}>Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                // <div className="modal" tabindex="-1" role="dialog">
                //     <div className="modal-dialog" role="document">
                //         <div className="modal-content">
                //             <div className="modal-header">
                //                 <h5 className="modal-title">Modal title</h5>
                //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                //                     <span aria-hidden="true">&times;</span>
                //                 </button>
                //             </div>
                //             <div className="modal-body">
                //                 <p>Modal body text goes here.</p>
                //             </div>
                //             <div className="modal-footer">
                //                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                //                 <button type="button" className="btn btn-primary">Save changes</button>
                //             </div>
                //         </div>
                //     </div>
                // </div>

            }
            <ToastContainer />
        </>
    )
}

export default Books;