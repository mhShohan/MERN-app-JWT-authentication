import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

export default function Register() {
    const [formData, setFormDate] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { name, email, password, confirmPassword } = formData;

    const onChange = (event) => {
        setFormDate((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };
    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser />
                    Register An Acconut..
                </h1>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Enter Your name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Enter Your email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={onChange}
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
