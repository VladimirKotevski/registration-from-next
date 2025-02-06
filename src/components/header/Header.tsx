"use client";

import React from "react";
import { useFormDataStore } from "../../store/useFormDataStore";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./Header.module.css";

export default function Header() {
  const { data, updateField } = useFormDataStore();

  const handleBack = () => {
    if (data.currentStep > 1) {
      updateField("currentStep", data.currentStep - 1);
    }
  };

  const showBackArrow = data.currentStep >= 2;

  return (
    <div className="container">
    <header className={styles.header}>
       
      {showBackArrow && (
        <button
          type="button"
          onClick={handleBack}
          aria-label="Go back"
          className={styles.backButton}
        >
          <FiArrowLeft size={24} />
        </button>
      )}

      <div className={styles.logoContainer}>
        <div className={styles.logoCircle}>25</div>
      </div>
      
    </header>
    </div>
  );
}