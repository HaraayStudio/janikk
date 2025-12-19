import React, { useState } from "react";
import styles from "./styles/StudentRegistration.module.scss";

const StudentRegistration = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.contact) {
      newErrors.contact = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(form.contact)) {
      newErrors.contact = "Enter valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Submitted:", form);
    alert("Registration Successful");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className={styles.overlay}>
      <form className={styles.card} onSubmit={handleSubmit} noValidate>
        <div className={styles.header}>
          <span>Contact Us Register for</span>
          <h1>Global Education Summit 2026</h1>
        </div>

        <p className={styles.description}>
          GES 2026 is a landmark event shaping the future of Indian academia at
          a global level. The summit gathers policymakers, educators,
          researchers, and industry leaders.
        </p>

        <div className={styles.formId}>Frame 1984084332</div>

        <div className={styles.sectionTitle}>Student Details:</div>

        <div className={styles.grid}>
          <div className={styles.field}>
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className={styles.error}>{errors.firstName}</span>
            )}
          </div>

          <div className={styles.field}>
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className={styles.error}>{errors.lastName}</span>
            )}
          </div>

          <div className={styles.field}>
            <label>E-mail Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          <div className={styles.field}>
            <label>Contact Number *</label>
            <input
              type="tel"
              name="contact"
              placeholder="Enter contact number"
              value={form.contact}
              onChange={handleChange}
            />
            {errors.contact && (
              <span className={styles.error}>{errors.contact}</span>
            )}
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;
