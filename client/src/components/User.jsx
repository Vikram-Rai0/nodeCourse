import { useState } from 'react';
import axios from 'axios';
const User = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        role: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5555/api/insertUserData', data).then((response) => {
            // Handle success - update the message to show success
            console.log('Post created successfully!');
            console.log(response.data); // You can log or use the response data
        })
            .catch((error) => {
                // Handle error - update the message to show error
                console.log('Failed to create post. Please try again.');
                console.error(error);
            });
        console.log("Form Data:", data);
        setData({
            name: "",
            email: "",
            password: "",
            phone: "",
            role: "",
        })
    };


    return (
        <div>
            <div className="formController">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Name" />
                    <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email" />
                    <input type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" />
                    <input type="text" name="phone" value={data.phone} onChange={handleChange} placeholder="Phone" />
                    <input type="text" name="role" value={data.role} onChange={handleChange} placeholder="Role" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default User;
