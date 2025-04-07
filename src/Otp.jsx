import React, { useState, useRef } from 'react'

const Otp = () => {
  const otpLength = 4;
  const [otpValue, setOtpValue] = useState(new Array(otpLength).fill(''));
  const inputRefs = useRef(new Array(otpLength));

  const handleChange = ({ index, value })=> {
    let newValue = value.trim();
    if (!/^\d?$/.test(newValue)) return; 

    let newOtp = [...otpValue];
    newOtp[index] = newValue;
    setOtpValue(newOtp);

    if (newValue && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  const handleKeyDown = ({ index, e }) => {
    if (e.key === 'Backspace' && index > 0) {
      let newOtp = [...otpValue];

      if (!newOtp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }

      newOtp[index] = '';
      setOtpValue(newOtp);
    }
  }


  return (
    <>
      <h2 className="text-center font-bold text-2xl pb-5">OTP Verification</h2>
      <div className="flex justify-center items-center">
        {otpValue.map((digit, index) => (
          <input
            key={index}
            type="text"
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            value={digit}
            onChange={(e) => handleChange({ index, value: e.target.value })}
            maxLength={1}
            className="border text-2xl w-10 h-10 mx-1 p-1 text-center rounded-md "
            onKeyDown={(e) => handleKeyDown({ index, e })}
          />
        ))}
      </div>
      {/* Ensure Pagination is imported or defined */}
      
    </>
  );
}

export default Otp