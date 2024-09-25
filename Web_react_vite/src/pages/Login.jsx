import React, { useState, useEffect } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [timer, setTimer] = useState(60);
  const [codeVerified, setCodeVerified] = useState(false);

  const sendVerificationCode = () => {
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(generatedCode);
    setCodeSent(true);
    setTimer(60);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    console.log(`Verification code sent to ${email}: ${generatedCode}`);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (isResettingPassword) {
      if (codeSent && !codeVerified) {
        if (inputCode === verificationCode) {
          setCodeVerified(true);
          console.log('Email verified successfully');
        } else {
          alert('Invalid code. Please try again.');
        }
      } else if (!codeSent) {
        sendVerificationCode();
      }
    } else {
      console.log('Proceed with login or sign up');
    }
  };

  const handleStateChange = (newState) => {
    setCurrentState(newState);
    setIsResettingPassword(false);
    setCodeSent(false);
    setCodeVerified(false);
    setEmail('');
    setInputCode('');
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{isResettingPassword ? 'Reset Password' : currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {isResettingPassword ? (
        <>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Email'
            required
          />
          {codeSent && !codeVerified && (
            <>
              <input
                type='text'
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className='w-full px-3 py-2 border border-gray-800'
                placeholder='Enter the 6-digit code'
                required
              />
              <p className='text-sm text-gray-600'>Time remaining: {timer}s</p>
            </>
          )}
          {codeVerified && (
            <>
              <input
                type='password'
                className='w-full px-3 py-2 border border-gray-800'
                placeholder='New Password'
                required
              />
            </>
          )}
        </>
      ) : (
        <>
          {currentState === 'Sign Up' && (
            <input
              type='text'
              className='w-full px-3 py-2 border border-gray-800'
              placeholder='Name'
              required
            />
          )}
          <input
            type='email'
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Email'
            required
          />
          <input
            type='password'
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Password'
            required
          />
        </>
      )}

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        {!isResettingPassword && (
          <p className='cursor-pointer' onClick={() => setIsResettingPassword(true)}>
            Forgot your password?
          </p>
        )}
        {currentState === 'Login' ? (
          <p onClick={() => handleStateChange('Sign Up')} className='cursor-pointer'>
            Create account
          </p>
        ) : (
          <p onClick={() => handleStateChange('Login')} className='cursor-pointer'>
            Login Here
          </p>
        )}
      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {isResettingPassword && !codeVerified ? 'Verify Code' : currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;


