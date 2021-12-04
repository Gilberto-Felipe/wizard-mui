import { Button } from '@mui/material'
import { FormikValues } from 'formik'
import React from 'react'

interface Props {
    children: React.ReactNode;
    hasPrevious?: boolean;
    onBackClick: (values: FormikValues) => void;
    isLastStep: boolean;
}

const FormNavigation = (props: Props) => {
    return (
        <div 
            style={{
                display: "flex",
                marginTop: 20,
                justifyContent:"space-between",
            }}
        >
            {props.hasPrevious && 
                <Button 
                    variant={'contained'}
                    type="button"
                    onClick={props.onBackClick}
                >Back</Button>
            }

            <Button 
                type="submit"
                color="primary"
                variant="contained"
            >
                { props.isLastStep ? "Submit" : "Next" }
            </Button>
        </div>
    )
}

export default FormNavigation;