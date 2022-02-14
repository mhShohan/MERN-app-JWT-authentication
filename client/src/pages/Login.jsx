import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

export default function Login() {
    const [formData, setFormDate] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;

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
                    <FaSignInAlt />
                    Login to your Acconut..
                </h1>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
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
                        <button type="submit" className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
