import { create } from 'zustand';
import { FormData } from '../interfaces/form.type'


interface FormDataStore {
    data: FormData;
    updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}

export const useFormDataStore = create<FormDataStore>((set) => ({
    data: {
        phoneNumber: '',
        phoneCountryCode: '+389',
        firstName: '',
        lastName: '',
        currentStep: 1,
    },

    updateField: (field, value) =>
        set((state) => ({
            data: { ...state.data, [field]: value },
        })),
}));