import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    evaluateStrength(pwd);
  };

  const evaluateStrength = (pwd) => {
    const length = pwd.length >= 8;
    const lower = /[a-z]/.test(pwd);
    const upper = /[A-Z]/.test(pwd);
    const digit = /\d/.test(pwd);
    const special = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

    if (length && lower && upper && digit && special) {
      setStrength('Strong');
    } else if (
      (length && lower && upper) ||
      (length && lower && digit) ||
      (length && upper && digit)
    ) {
      setStrength('Medium');
    } else {
      setStrength('Weak');
    }
  };

  return (
    <div>
      <h1>Password Strength Checker</h1>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
      <p>Password strength: {strength}</p>
    </div>
  );
};

export default PasswordStrengthChecker;