'use client';

import React, { useState } from 'react';
import { useFormDataStore } from '../../store/useFormDataStore';
import Button from '../buttons/Button';
import Link from 'next/link';

interface Step2Props {
  onBack: () => void;
  onSubmit: () => void;
}

export default function SecondStep({ onBack, onSubmit }: Step2Props) {
  const {
    data: { phoneNumber, phoneCountryCode },
    updateField,
  } = useFormDataStore();
  const [error, setError] = useState('');

  const countryCodes = [
    { code: "+1", label: "+1" },
    { code: "+389", label: "+389" },
  ];

  const handleSubmit = () => {
    if (!phoneNumber) {
      setError('Please enter phone number');
      return;
    }
    setError('');
    onSubmit();
  };

  return (
    <div>
      <h2>Let’s validate your number</h2>
      <label htmlFor="phoneCountryCode" style={{ fontSize: "0.875rem" }}>
        Phone number
      </label>
      <div style={{ display: "flex" }}>
        <select
          id="phoneCountryCode"
          name="phoneCountryCode"
          value={phoneCountryCode}
          onChange={(e) => updateField('phoneCountryCode', e.target.value)}
          style={{ width: '30%', marginRight: '5px' }}
        >
          {countryCodes.map((item) => (
            <option key={item.code} value={item.code}>
              {item.label}
            </option>
          ))}
        </select>
        <input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => updateField('phoneNumber', e.target.value)}
          placeholder="77890 123456"
        />
      </div>

      {error && <p style={{ color: 'red', fontSize: '0.8rem' }}>{error}</p>}

      <p>By clicking continue you confirm that you agree to our <Link href={'/'}>Tearms and conditions</Link> and <Link href={'/'}>privacy policy</Link></p>

      <Button onClick={handleSubmit} variant="primary" fullWidth borderRadius="rounded-full">
        Continue
      </Button>
    </div>
  );
}