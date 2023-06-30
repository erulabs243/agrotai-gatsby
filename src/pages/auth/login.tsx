import { Stack, Box, Link, Text, Button } from '@chakra-ui/react'
import { FormButton, FormHeading, FormInput } from '@components/particles'
import Layout from '@layouts/layout'
import { navigate } from 'gatsby'
import React from 'react'

const Login: React.FC = () => {

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
              heading="Connexion" 
              subheading="Accedez à plus d'opportunites" />

              <Stack direction="column">
                <FormInput 
                  name="username" 
                  label='Utilisateur/e-mail' 
                  onChange={() =>console.log('email')} 
                  type="text" 
                  />
                  <FormInput 
                    name="password"
                    label="Mot de passe"
                    type="password"
                    onChange={() => console.log('password')}
                  />
                  <Link 
                    href='#' 
                    textAlign="right" 
                    color="green.500" 
                    fontSize="sm"
                  >
                    Mot de passe oublié ?
                  </Link>
                  <Stack 
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FormButton 
                      label="Se connecter" 
                      fn={handleSubmit} 
                    />
                    <Text>ou</Text>
                    <Button
                      my={4}
                      variant="outline"
                      colorScheme="green"
                      onClick={() => navigate('/auth/register')}
                    >
                      Créer un compte
                    </Button>
                  </Stack>
              </Stack>
          </Box>
        </Stack>
    </Layout>
  )
}

export default Login