import React from 'react'
import { Link } from 'react-router-dom'

export const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
            <div className="landing-inner">
                <h1 className="x-large">The Iku Organization</h1>
                <p className="lead">
                    Create a Iku organization profile, share posts, and get help from members.
                </p>
            <div className="buttons">
                <Link to="/register" className="btn btn-danger">Sign Up</Link>
                <Link to="/login" className="btn btn-light">Login</Link>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Landing;
