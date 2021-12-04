import { Input } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FieldConfig, useField } from 'formik';

interface Props extends FieldConfig {
    label: string;
}

const InputField = ({label, ...props}: Props) => {

    const [field, meta] = useField(props);

    return (
        <TextField 
            fullWidth
            autoComplete="off"
            label={label}
            {...field}
            {...props}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            style={{marginBottom: 20}}
            variant='standard'
        >            
        </TextField>
    )
}

export default InputField;


