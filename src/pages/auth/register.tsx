import { 
  Heading, 
  Stack, 
  Box, 
  Link, 
  Text,
  Button,
  Icon
} from '@chakra-ui/react';
import {navigate} from 'gatsby';
import Layout from '@layouts/layout'
import React from 'react'
import {
  FormHeading,
  FormInput,
  FormButton
} from '@components/particles'
import { IconBrandGoogle } from '@tabler/icons-react';

const Register: React.FC = () => {

  const handleSubmit = () => {
    navigate('/ligantoine02/dashboard');
    return null;
  }

  return (
    <Layout>
        <Stack 
          as={Box} 
          direction="row" 
          w={{base: 'full', lg: "5xl" }}
          mx="auto" 
          p={8} 
          my={8} 
          rounded="lg"
          >
          <Box w="50%" p={4}>
            <FormHeading 
              heading="Inscription" 
              subheading="Vous n'êtes toujours pas membre ? Créez un compte !" />

              <Stack direction="column">
                <Stack direction="row" gap={4}>
                  <FormInput 
                    name="firstName"
                    label='Nom'
                    onChange={() => console.log('name')}
                    type='text'
                  />
                  <FormInput 
                    name="lastName"
                    label='Post-nom'
                    onChange={() => console.log('lastName')}
                    type="text"
                  />
                </Stack>
                <FormInput 
                  name="email"
                  label="Adresse e-mail"
                  onChange={() => console.log('email')}
                  type='email'
                />
                <FormInput 
                  name="username" 
                  label='Utilisateur' 
                  onChange={() =>console.log('email')} 
                  type="text" 
                  />
                  <FormInput 
                    name="password"
                    label="Mot de passe"
                    type="password"
                    onChange={() => console.log('password')}
                  />
                  <Stack
                    direction='row'
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FormButton label="Créer un compte" fn={handleSubmit} />
                    <Text>ou</Text>
                    <Button
                      variant="outline"
                      colorScheme="green"
                      onClick={() => navigate('/auth/login')}
                    >
                      Se connecter
                    </Button>
                  </Stack>
              </Stack>

              <Stack as={Box} direction="column" my={8}>
                <Text
                  textAlign="center"
                  fontSize="sm"
                >
                  Utiliser une autre méthode
                </Text>
                <Button
                variant="outline"
                  colorScheme="facebook"
                  leftIcon={
                    <Icon 
                      as={IconBrandGoogle}  
                    />
                  }
                >
                  Se connecter avec Google
                </Button>
              </Stack>
          </Box>
        </Stack>
    </Layout>
  )
}

export default Register