import { CSSProperties } from "react";

interface Props 
extends React.DetailedHTMLProps<
React.HTMLAttributes<HTMLElement>, 
HTMLInputElement 
>{
  label: string;
  error: boolean;
  helperText: string;
}

function Input({ label, error, helperText, ...props }: Props) {
  return (
    <div>
        <label htmlFor={props.id}>{label}</label>
        <input {...props} />
        {helperText && <span style={helperTextStyle(error)}>{helperText}</span>}
    </div>
  )
}

const helperTextStyle: (error: boolean) => CSSProperties = (error) => ({
  color: error ? 'red' : 'darkgrey'
});

export default Input