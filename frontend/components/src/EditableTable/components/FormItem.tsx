import { FormControl, FormLabel } from '@chakra-ui/react';
import Input from '../../Input';

interface FormInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  accessor: string;
  placeholder?: string;
  readonly?: boolean;
}
const FormItem = ({
  value,
  onChange,
  accessor,
  title,
  placeholder,
  readonly,
}: FormInputProps): JSX.Element => {
  return (
    <FormControl as="fieldset" key={`field-${accessor}`} mb="1.25rem">
      <FormLabel htmlFor={accessor} color="gray.700" fontWeight={600}>
        {title}
      </FormLabel>
      <Input
        id={accessor}
        value={value}
        onChange={onChange}
        variant="outline"
        colorScheme="gray"
        isDisabled={readonly}
        placeholder={placeholder}
      />
    </FormControl>
  );
};
export default FormItem;
