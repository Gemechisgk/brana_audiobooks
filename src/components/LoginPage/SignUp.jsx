import React, { useState, useEffect } from "react";
import regions from "./Regions";
import logo from "../../assets/images/logoBlue.png";

function SignUp() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    region: "",
    cityzone: "",
    subcityworeda: "",
    pobox: "",
    snl: "",
    ssn: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [selectedRegion, setSelectedRegion] = useState("");
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const validateStep0 = () => {
    const errors = {};
    if (!formData.firstname.trim()) {
      errors.firstname = "*";
    }
    if (!formData.lastname.trim()) {
      errors.lastname = "*";
    }
    if (!formData.username.trim()) {
      errors.username = "*";
    }
    if (!formData.email.trim()) {
      errors.email = "*";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid Email";
    }
    if (!formData.password.trim()) {
      errors.password = "*";
    } else if (formData.password.length < 8) {
      errors.password = "Must be at least 8 characters long";
    }
    if (!formData.confirmpassword.trim()) {
      errors.confirmpassword = "*";
    } else if (formData.password !== formData.confirmpassword) {
      errors.confirmpassword = "Passwords do not match";
    }
    console.log("Step 0 errors:", errors);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep1 = () => {
    const errors = {};
    if (!formData.region.trim()) {
      errors.region = "*";
    }
    if (!formData.cityzone.trim()) {
      errors.cityzone = "*";
    }
    if (!formData.subcityworeda.trim()) {
      errors.subcityworeda = "*";
    }
    console.log("Step 1 errors:", errors);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
 
  const handleRegister = async (event) => {
    event.preventDefault();

    const isStep0Valid = validateStep0();
    const isStep1Valid = validateStep1();

    if (!isStep0Valid || !isStep1Valid) {
      console.error("Error: Form is invalid");
      return;
    }

    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const newUser = await response.json();
      console.log("Registered:", newUser);
      alert("Registerd Successfully");
    } else {
      console.error("Error:", response.statusText);
    }
  };

  const nextStep = () => {
    const isStep0Valid = validateStep0();
    if (isStep0Valid) {
      setFormStep(1);
    }
  };

  const previousStep = () => {
    setFormStep(0);
  };

  const [cityZones, setCityZones] = useState([]);

  function handleRegionChange(event) {
    const region = event.target.value;
    setSelectedRegion(region);
    setCityZones(regions[region] || []);
    setFormData({ ...formData, region });
  }
  return (
    <section className="container-form container-form-sign-up">
      <form onSubmit={handleRegister} className="sign-up-form">
        {formStep === 0 && (
          <div className="personal-info-form peronal-address-form">
            <div className="register-first-page">
              <img src={logo} />
              <h1>Personal Information</h1>
            </div>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              autoComplete="on"
            />
            {formErrors.firstname && (
              <div className="error">{formErrors.firstname}</div>
            )}
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              autoComplete="on"
            />
            {formErrors.lastname && (
              <div className="error">{formErrors.lastname}</div>
            )}

            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="on"
            />
            {formErrors.username && (
              <div className="error">{formErrors.username}</div>
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="on"
            />
            {formErrors.email && (
              <div className="error">{formErrors.email}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formErrors.password && (
              <div className="error">{formErrors.password}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
            {formErrors.confirmpassword && (
              <div className="error">{formErrors.confirmpassword}</div>
            )}
            <button
              type="button"
              className="signIn-register-btn next-back-reg-btn  next-btn"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        )}

        {formStep === 1 && (
          <div className="address-form peronal-address-form">
            <div className="register-first-page">
              <img src={logo} />
              <h1>Address</h1>
            </div>
            <div>
              <select
                name="region"
                value={selectedRegion}
                onChange={handleRegionChange}
              >
                <option value="">Region/City</option>
                {Object.keys(regions).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {formErrors.region && (
                <div className="error">{formErrors.region}</div>
              )}
              <select name="cityzone"
                value={formData.cityzone}
                onChange={handleChange}
                >
                <option value="">Subcity/Zone</option>
                {cityZones.map((cityZone) => (
                  <option key={cityZone} value={cityZone}>
                    {cityZone}
                  </option>
                ))}
              </select>
              {formErrors.cityzone && (
                <div className="error">{formErrors.cityzone}</div>
              )}
              <input
                type="text"
                placeholder="City/Woreda"
                name="subcityworeda"
                value={formData.subcityworeda}
                onChange={handleChange}
                required
                autoComplete="on"
              />
              {formErrors.subcityworeda && (
                <div className="error">{formErrors.subcityworeda}</div>
              )}
              <input
                type="text"
                placeholder="P.O.Box"
                name="pobox"
                value={formData.pobox}
                onChange={handleChange}
                autoComplete="on"
              />
              <input
                type="text"
                placeholder="Special Name for your location"
                name="snl"
                value={formData.snl}
                onChange={handleChange}
                autoComplete="on"
              />
              <input
                type="text"
                placeholder="SSN"
                name="ssn"
                value={formData.ssn}
                onChange={handleChange}
                autoComplete="on"
              />
              <button
                type="button"
                className="signIn-register-btn next-back-reg-btn back-btn"
                onClick={previousStep}
              >
                Back
              </button>
              <button
                type="submit"
                className="signIn-register-btn next-back-reg-btn next-back-btn"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}

export default SignUp;
