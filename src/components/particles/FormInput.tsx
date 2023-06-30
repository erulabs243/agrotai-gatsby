import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

type Props = {
    name: string;
    type: string;
    label?: string;
    onChange: () => void;
    error?: string;
}

function FormInput({name, type, label, error, onChange, ...rest}: Props) {
  return (
    <FormControl my={2}>
        {label && <FormLabel fontSize="sm" color="gray.700">{label}</FormLabel>}
        <Input type={type} name={name} />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default FormInput