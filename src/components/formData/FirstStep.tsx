'use client';

import React, { useState } from 'react';
import { useFormDataStore } from '../../store/useFormDataStore';
import Button from '../buttons/Button';

interface FirstStepProps {
  onNext: () => void; // callback to go to step 2
}

export default function FirstStep({ onNext }: FirstStepProps) {

  const {
    data: { firstName, lastName },
    updateField,
  } = useFormDataStore();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!firstName || !lastName) {
      setError('Please enter both first and last name');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <div>
      <h2>Some introductions</h2>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        type="text"
        value={firstName}
        onChange={(e) => updateField('firstName', e.target.value)}
        placeholder="Your first name"
      />

      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        type="text"
        value={lastName}
        onChange={(e) => updateField('lastName' ,e.target.value)}
        placeholder="Your last name"
      />
      {error && <p style={{ color: 'red', fontSize: '0.8rem' }}>{error}</p>}

      <Button  onClick={handleNext} variant="primary" fullWidth borderRadius="rounded-full">
        Submit
      </Button>
    </div>
  );
}