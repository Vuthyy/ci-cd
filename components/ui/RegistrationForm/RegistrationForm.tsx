import React, { useState } from "react";

interface RegistrationFormProps {
  fullname: string;
  email: string;
  password: string;
  confirm_password: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormProps>({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState<Partial<RegistrationFormProps>>({});

  const validate = (field: string, value: string) => {
    const validationErrors: Partial<RegistrationFormProps> = {};

    if (field === "fullname" && !value) {
      validationErrors.fullname = "Full name is required";
    }

    if (field === "email") {
      if (!value) {
        validationErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        validationErrors.email = "Email address is invalid";
      }
    }

    if (field === "password") {
      if (!value) {
        validationErrors.password = "Password is required";
      } else if (value.length < 6) {
        validationErrors.password = "Password must be at least 6 characters";
      }
    }

    if (field === "confirm_password") {
      if (!value) {
        validationErrors.confirm_password = "Please confirm your password";
      } else if (value !== formData.password) {
        validationErrors.confirm_password = "Passwords do not match";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: validationErrors[field],
    }));

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = Object.keys(formData).every((key) =>
      validate(key, formData[key as keyof RegistrationFormProps])
    );

    if (isFormValid) {
      console.log("Form submitted:", formData);
      setFormData({
        fullname: "",
        email: "",
        password: "",
        confirm_password: "",
      });
      alert("Create Account Successfully");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (errors[name as keyof RegistrationFormProps]) {
      validate(name, value);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          onSubmit={handleSubmit}
          noValidate
        >
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>

          <input
            type="text"
            className={`block border w-full p-3 rounded mb-0 mt-4 ${
              errors.fullname ? "border-red-500" : "border-grey-light"
            }`}
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
          />
          {errors.fullname && (
            <p className="mt-0 mb-4 text-sm text-red-500">{errors.fullname}</p>
          )}

          <input
            type="text"
            className={`block border w-full p-3 rounded mb-0 mt-4 ${
              errors.email ? "border-red-500" : "border-grey-light"
            }`}
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="mt-0 mb-4 text-sm text-red-500">{errors.email}</p>
          )}

          <input
            type="password"
            className={`block border w-full p-3 rounded mb-0 mt-4 ${
              errors.password ? "border-red-500" : "border-grey-light"
            }`}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="mt-0 mb-4 text-sm text-red-500">{errors.password}</p>
          )}

          <input
            type="password"
            className={`block border w-full p-3 rounded mb-0 mt-4 ${
              errors.confirm_password ? "border-red-500" : "border-grey-light"
            }`}
            name="confirm_password"
            placeholder="Confirm Password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
          {errors.confirm_password && (
            <p className="mt-0 mb-4 text-sm text-red-500">
              {errors.confirm_password}
            </p>
          )}

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-4"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-gray-700 mt-4">
            By signing up, you agree to the&nbsp;
            <a
              className="no-underline border-b border-gray-400 text-gray-700"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and&nbsp;
            <a
              className="no-underline border-b border-gray-400 text-gray-700"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </form>

        <div className="text-grey-dark mt-6">
          Already have an account?&nbsp;
          <a
            className="no-underline border-b border-blue text-blue-500"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
