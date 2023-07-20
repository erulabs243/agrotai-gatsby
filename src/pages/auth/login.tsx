import { Stack, Box, Link, Text, Button, Input, FormControl, FormLabel, FormErrorMessage, Alert, AlertIcon } from '@chakra-ui/react'
import { FormHeading } from '@components/particles'
import Layout from '@layouts/layout'
import { loginSchema, loginType } from '@propstypes/schemas/login.schema'
import { navigate } from 'gatsby'
import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import { useSetAtom } from 'jotai'
import { authTokenAtom } from '../../atoms'



const Login: React.FC = () => {

  const setAuthTokenAtom = useSetAtom(authTokenAtom)

  const [authError, setAuthError] = React.useState<string>('');
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const values: loginType = {
    username: '',
    password: '',
  }

    const {
      register,
      handleSubmit,
      formState: {errors}
    } = useForm({
      defaultValues: values,
      resolver: yupResolver(loginSchema)
    });

  const formSubmit = async (values: loginType) => {
    setIsSubmitting(true);
    console.log(values)
    try {
      const authRes = await axios.post("http://localhost:1337/api/auth/local", {
        identifier: values.username,
        password: values.password
      })

      if(authRes) {
        const res = authRes.data
        setAuthTokenAtom(res.jwt)
        localStorage.setItem('agrotai-authToken', res.jwt)
        localStorage.setItem('agrotai-lastLogged', Date.now().toString())
        navigate(`/${res.user.username}/dashboard`)
      }
      else setAuthError("Identifiant ou mot de passe invalide")
      setIsSubmitting(false);
    } catch(err) {
      setAuthError("Identifiant ou mot de passe invalide")
      setIsSubmitting(false);
    }

    setIsSubmitting(false);
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

                <form method='post'>
                  <Stack direction="column">
                    {authError && <Alert my={2} status="error">
                      <AlertIcon />
                      {authError}
                      </Alert>
                    }
                    <FormControl my={2} isRequired isInvalid={'username' in errors}>
                      <FormLabel fontSize="sm" color="gray.700">Utilisateur/e-mail</FormLabel>
                      <Input type='text' {...register('username')} />
                      <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl my={2} isRequired isInvalid={'password' in errors}>
                      <FormLabel fontSize="sm" color="gray.700">Mot de passe</FormLabel>
                      <Input type="password" {...register('password')} />
                      <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                  </FormControl>
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
                    <Button 
                      type="submit" 
                      isLoading={isSubmitting} 
                      colorScheme='green'
                      onClick={handleSubmit(formSubmit)}
                    >
                      Se connecter
                    </Button>
                    <Text>ou</Text>
                    <Button
                      my={4}
                      variant="outline"
                      colorScheme="gray"
                      onClick={() => navigate('/auth/register')}
                    >
                      Créer un compte
                    </Button>
                  </Stack>
              </Stack>
              </form>
          </Box>
        </Stack>
    </Layout>
  )
}

export default Login