import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 10) {
      setNumber(value);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/register", {
        number,
        password,
      });
      console.log(response.data);
      alert("User registered successfully!");
      setNumber("");
      setPassword("");
    } catch (err) {
      console.error(err);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="container p-4 text-center mt-5">
      <h2 className="fs-2 mt-4">Open a free demat and trading account online</h2>
      <p className="text-muted">
        Start investing brokerage free and join a community of 1.5+ crore investors and traders
      </p>

      <div className="row justify-content-center align-items-center mt-4">
        {/* Image Section */}
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
          <img
            src="/media/images/signup.svg"
            alt="signup"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto", minWidth: "250px" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-lg-5 col-md-6 col-sm-12 text-center text-md-start mt-4">
          <h2 className="fw-bold">Signup now</h2>
          <p className="text-muted">Or track your existing application</p>

          <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
            {/* Mobile Number Input */}
            <div className="input-group mb-3 w-100 px-2" style={{ maxWidth: "400px" }}>
              <span className="input-group-text">+91</span>
              <input
                type="text"
                placeholder="Your 10 digit mobile number"
                value={number}
                onChange={handleNumberChange}
                className="form-control shadow-none p-3 fs-5"
                required
              />
            </div>

           
            <div className="input-group mb-3 w-100 px-2" style={{ maxWidth: "400px" }}>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control shadow-none p-3 fs-5"
                required
              />
            </div>

           
            <button className="btn btn-primary w-100 p-2 fs-5 px-2" style={{ maxWidth: "400px" }}>
              Create Account
            </button>
          </form>

          <p className="mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none" style={{ color: "rgb(56,126,209)" }}> Login here!</Link>
          </p>
          <p className="text-muted small">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#" className="text-decoration-none">
              terms & privacy policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
