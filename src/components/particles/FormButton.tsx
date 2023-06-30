import React from 'react';
import { Button } from '@chakra-ui/react';
import {navigate} from 'gatsby';

type Props = {
    label: string;
    fn: () => void;
};

function FormButton({label, fn}: Props) {
  return (
    
    <Button 
        my={4}
        colorScheme='green'
        alignSelf="flex-start"
        onClick={fn}
    >
        {label}
    </Button>
  )
}

export default FormButton