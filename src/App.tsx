import React from 'react';
import { Formik, useFormik } from 'formik';
import { Button } from '@mui/material';
import * as yup from 'yup';
import './App.css';
import InputField from './InputField';
import MultiStepForm, { FormStep } from './MultiStepForm';

const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MultiStepForm
                    initialValues={{
                        name: '',
                        email: '',
                        street: '',
                        country: '',
                    }}
                    onSubmit={values => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <FormStep
                        stepName="Person"
                        onSubmit={() => console.log("Step 1 Submit")}
                        validationSchema={validationSchema}
                    >
                        <InputField name="name" label="Name"></InputField>
                        <InputField name="email" label="Email" ></InputField>
                    </FormStep>

                    <FormStep 
                        stepName="Address"
                        onSubmit={() => console.log("Step 2 Submit")}
                        validationSchema={yup.object({
                            street: yup.string().required("Street is required"),
                            country: yup.string().required("Country is required"),
                        })}
                    >
                        <InputField name="street" label="Street"></InputField>
                        <InputField name="country" label="Country" ></InputField>
                    </FormStep>

                </MultiStepForm>
            </header>
        </div>
    );
}

export default App;
