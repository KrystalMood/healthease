export interface AkunType {
  email: string;
  password: string;
  confirm_password: string;
}

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  icon: JSX.Element;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  toggleVisibility?: () => void;
  showPassword?: boolean;
}