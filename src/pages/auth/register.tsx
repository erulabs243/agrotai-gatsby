import {
  Stack,
  Box,
  Text,
  Button,
  Icon,
  FormControl,
  FormLabel,
  Input,
  AlertIcon,
  Alert,
  FormErrorMessage,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { navigate } from "gatsby";
import Layout from "@layouts/layout";
import React from "react";
import { FormHeading } from "@components/particles";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import {
  registrationSchema,
  registrationType,
} from "@propstypes/schemas/register.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useSetAtom } from "jotai";
import { authTokenAtom } from "../../atoms";

const Register: React.FC = () => {
  const [authError, setAuthError] = React.useState<string>("");
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const setAuthToken = useSetAtom(authTokenAtom);

  const initialValues: registrationType = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    gender: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(registrationSchema),
  });

  const formSubmit = async (values: registrationType) => {
    setIsSubmitting(true);
    console.log(JSON.stringify(values, null, 2));
    try {
      //Check if username is used

      //Check if email is used

      const res = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          fullName: values.firstName + " " + values.lastName,
          username: values.username,
          email: values.email,
          gender: values.gender,
          password: values.password,
        },
      );

      if (res) {
        const data = res.data;
        setAuthToken(data.jwt);
        localStorage.setItem("agrotai-authToken", data.jwt);
        localStorage.setItem("agrotai-lastLogged", Date.now().toString());

        navigate(`/${data.user.username}/dashboard`);
      } else {
        setAuthError("E-mail ou utilisateur déjà attribués");
        setIsSubmitting(false);
      }
    } catch (err) {
      setAuthError("E-mail ou utilisateur déjà attribués");
      setIsSubmitting(false);
    }
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <Stack
        as={Box}
        direction="row"
        w={{ base: "full", lg: "5xl" }}
        mx="auto"
        p={8}
        my={8}
        rounded="lg"
      >
        <Box w="50%" p={4}>
          <FormHeading
            heading="Inscription"
            subheading="Vous n'êtes toujours pas membre ? Créez un compte !"
          />

          <form method="post" onSubmit={handleSubmit(formSubmit)}>
            <Stack direction="column">
              {authError && (
                <Alert my={2} status="error">
                  <AlertIcon />
                  {authError}
                </Alert>
              )}
              <Stack direction="row" gap={4}>
                <FormControl
                  my={2}
                  isRequired
                  isInvalid={"firstName" in errors}
                >
                  <FormLabel fontSize="sm" color="gray.700">
                    Nom
                  </FormLabel>
                  <Input type="text" {...register("firstName")} />
                  <FormErrorMessage>
                    {errors.firstName?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl my={2} isRequired isInvalid={"lastName" in errors}>
                  <FormLabel fontSize="sm" color="gray.700">
                    Prénom
                  </FormLabel>
                  <Input type="text" {...register("lastName")} />
                  <FormErrorMessage>
                    {errors.lastName?.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
              <FormControl my={2} isRequired isInvalid={"email" in errors}>
                <FormLabel fontSize="sm" color="gray.700">
                  Adresse e-mail
                </FormLabel>
                <Input type="email" {...register("email")} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <Stack direction="row" gap={4}>
                <FormControl
                  flex={2}
                  my={2}
                  isRequired
                  isInvalid={"username" in errors}
                >
                  <FormLabel fontSize="sm" color="gray.700">
                    Utilisateur
                  </FormLabel>
                  <Input type="text" {...register("username")} />
                  <FormErrorMessage>
                    {errors.username?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={"gender" in errors}
                  flex={1}
                  my={2}
                  isRequired
                >
                  <FormLabel fontSize="sm" color="gray.700">
                    Sexe
                  </FormLabel>
                  <RadioGroup onChange={val => setValue("gender", val)}>
                    <Stack direction="column" gap={0}>
                      <Radio value="man">
                        <Text fontSize="sm" color="gray.700">
                          Homme
                        </Text>
                      </Radio>
                      <Radio value="woman">
                        <Text fontSize="sm" color="gray.700">
                          Femme
                        </Text>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Stack>
              <FormControl my={2} isRequired isInvalid={"password" in errors}>
                <FormLabel fontSize="sm" color="gray.700">
                  Mot de passe
                </FormLabel>
                <Input type="password" {...register("password")} />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Button
                  type="submit"
                  colorScheme="green"
                  isLoading={isSubmitting}
                >
                  Créer un compte
                </Button>
                <Text>ou</Text>
                <Button
                  variant="outline"
                  colorScheme="gray"
                  onClick={() => navigate("/auth/login")}
                >
                  Se connecter
                </Button>
              </Stack>
            </Stack>

            <Stack as={Box} direction="column" my={8}>
              <Text textAlign="center" fontSize="sm">
                Utiliser une autre méthode
              </Text>
              <Button
                variant="outline"
                colorScheme="facebook"
                leftIcon={<Icon as={IconBrandGoogle} />}
              >
                Se connecter avec Google
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Register;
