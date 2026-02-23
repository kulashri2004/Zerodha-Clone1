import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
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
      const response = await axios.post("http://localhost:3002/login", {
        number,
        password,
      });

      console.log(response.data);

      if (response.data.success) {
        alert("Login successful!");
        window.open("http://localhost:5174", "_blank");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="container p-4 text-center mt-5">
      <h2 className="fs-3 mt-4">Open a free demat and trading account online</h2>
      <p className="text-muted">
        Start investing brokerage-free and join a community of 1.5+ crore investors and traders.
      </p>

      <div className="row d-flex justify-content-center align-items-center p-3">
        {/* Left-side image (Hidden on mobile) */}
        <div className="col-md-6  d-md-block">
          <img src="/media/images/signup.svg" alt="signup" className="img-fluid" />
        </div>

       
        <div className="col-12 col-md-5 text-start">
          <h2 className="fw-bold text-center text-md-start mt-3">Login now</h2>
          <p className="text-muted text-center text-md-start">Or track your existing application</p>

          <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center align-items-md-start">
          
            <div className="input-group mb-3 w-100" style={{ maxWidth: "400px" }}>
              <span className="input-group-text">+91</span>
              <input
                type="text"
                placeholder="Your 10-digit mobile number"
                value={number}
                onChange={handleNumberChange}
                className="form-control shadow-none p-3 fs-6"
                required
              />
            </div>

          
            <div className="mb-3 w-100" style={{ maxWidth: "400px" }}>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control shadow-none p-3 fs-6"
                required
              />
            </div>

         
            <button
              type="submit"
              className="btn btn-primary p-3 w-100 fs-6"
              style={{ maxWidth: "400px" }}
            >
              Log in
            </button>
          </form>

       
          <p className="text-muted small mt-4 text-center text-md-start">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#" className="text-decoration-none">terms & privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
