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
        {helperText && <span>{helperText}</span>}
    </div>
  )
}

export default Input