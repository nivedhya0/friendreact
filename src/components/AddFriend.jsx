import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const AddFriend = () => {
    const [data, changedata] = useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName": "",
            "DescribeYourFriend": ""
        }


    )
    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully added")
                }
                else {
                    alert("Error")
                }
            }).catch()
    }


return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="text" className="form label">NAME</label>
                            <input type="text" className="form control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="text" className="form label">FRIENDNAME</label>
                            <input type="text" className="form control" name='friendName' value={data.friendName} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="text" className="form label">FRIENDNICKNAME</label>
                            <input type="text" className="form control" name='friendNickName' value={data.friendNickName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="text" className="form label">DESCRIBEYOURFRIEND</label>
                            <input type="text" className="form control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputHandler} />
                        </div>
                        <break>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <button className="btn btn-success" onClick={readValue}> SUBMIT</button>
                        </div>
                        </break>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default AddFriend