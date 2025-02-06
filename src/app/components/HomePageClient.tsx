'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useFormDataStore } from '../../store/useFormDataStore';
import FirstStep from '../../components/formData/FirstStep';
import SecondStep from '../../components/formData/SecondStep';
import styles from "./HomePage.module.css";

export default function MultiStepFormClient() {
  const { data, updateField } = useFormDataStore();

  const handleNext = () => {
    updateField('currentStep', 2);
  };

  const handleBack = () => {
    updateField('currentStep', 1);
  };

  const handleSubmit = () => {
    alert('Form submitted!');
  };

  return (
    <>
      <div className={styles.stepsContainer}>
        <div
          className={`${styles.stepCircle} ${data.currentStep === 1 ? styles.activeCircle : ""
            }`}
        >
          1
        </div>
        <div
          className={`${styles.stepCircle} ${data.currentStep === 2 ? styles.activeCircle : ""
            }`}
        >
          2
        </div>
      </div>
      <AnimatePresence mode="wait">
        {data.currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
          >
            <FirstStep onNext={handleNext} />
          </motion.div>
        )}

        {data.currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
          >
            <SecondStep onBack={handleBack} onSubmit={handleSubmit} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}