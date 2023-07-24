import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Textarea,
  FormHelperText,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FormHeading } from "@components/particles";
import { yupResolver } from "@hookform/resolvers/yup";
import Layout from "@layouts/layout";
import {
  careerRequestSchema,
  careerRequestType,
} from "@propstypes/schemas/career.schema";
import axios from "axios";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { PageProps, graphql } from "gatsby";
import React from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { SERVER_HOST } from "../../consts";

type ResultType = {
  strapiCareer: {
    strapi_id: number;
    career: string;
    description: string;
    isAvailable: boolean;
    updatedAt: string;
    requirements: {
      data: {
        requirements: string;
      };
    };
    cover: {
      localFile: {
        childImageSharp: {
          fixed: {
            src: string;
          };
        };
      };
    };
  };
};

const Career: React.FC<PageProps<ResultType>> = ({ data }) => {
  const career = data.strapiCareer;
  const [formError, setFormError] = React.useState<string>("");
  const [formSuccess, setFormSuccess] = React.useState<boolean>(false);
  const [formLoading, setFormLoading] = React.useState<boolean>(false);

  const initialValues: careerRequestType = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(careerRequestSchema),
  });

  const formSubmit = async (values: careerRequestType) => {
    setFormLoading(true);

    //TODO check phone number
    try {
      const res = await axios.post(
        `${SERVER_HOST}/api/career-requests`,
        {
          data: {
            career: career.strapi_id,
            fullName: values.firstName + " " + values.lastName,
            gender: values.gender,
            email: values.email,
            phone: values.phone,
            message: values.message,
          },
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      //TODO send email to admin
      if (res) {
        reset();
        setFormSuccess(true);
        setFormLoading(false);
      } else {
        setFormError(
          "Impossible d'envoyer votre requête. Veuillez vérifier votre connexion internet et réessayer plus tard",
        );
        setFormLoading(false);
      }
    } catch (err) {
      console.error(err.toJSON());
      setFormError("Veuillez réessayer plus tard");
      setFormLoading(false);
    }
  };

  const newTheme = {
    h1: props => {
      const { children } = props;
      return (
        <Text mb={2} fontSize="2xl" fontWeight="bold">
          {children}
        </Text>
      );
    },
    h2: props => {
      const { children } = props;
      return (
        <Text mb={2} fontSize="lg" fontWeight="bold">
          {children}
        </Text>
      );
    },
    img: props => {
      const { src, alt } = props;
      return (
        <Image
          src={src}
          alt={alt}
          rounded="lg"
          w={{ base: "90vw", lg: "4xl" }}
          h={{ base: 64, lg: 96 }}
          mr={{ base: 8, lg: "auto" }}
          my={8}
        />
      );
    },
  };

  return (
    <Layout>
      <Box
        my={{ base: 8, lg: 20 }}
        w={{ base: "full", lg: "4xl" }}
        mx={{ base: 6, lg: "auto" }}
      >
        <Stack direction="column" gap={{ base: 8, lg: 20 }}>
          <Heading size="2xl" textAlign="center">
            Rejoindre l'équipe
          </Heading>
          <Heading size="xl" textAlign="center">
            {career.career}
          </Heading>
        </Stack>
        <Stack direction="column" gap={8} mt={{ base: 8, lg: 12 }}>
          <Stack direction="column">
            <Text fontSize="2xl" fontWeight="bold">
              Description
            </Text>
            <Text fontSize="lg" color="gray.700">
              {career.description}
            </Text>
          </Stack>
          <Stack direction="column">
            <Text fontSize="2xl" fontWeight="bold">
              Détails
            </Text>
            <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
              {career.requirements.data.requirements}
            </ReactMarkdown>
          </Stack>
        </Stack>

        {/* Request form */}
        <Stack
          direction="column"
          py={8}
          px={{ base: 8, lg: 20 }}
          rounded="lg"
          bg="gray.100"
          my={8}
          shadow="lg"
        >
          <FormHeading
            heading="Postuler"
            subheading="Remplissez le formulaire pour postuler"
          />

          {formSuccess && (
            <Alert
              rounded="lg"
              flexDirection="column"
              status="success"
              variant="subtle"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              py={8}
              my={4}
              borderWidth={1}
              borderColor="green.700"
            >
              <AlertIcon boxSize={8} mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Requête envoyée
              </AlertTitle>
              <AlertDescription maxW={{ base: "75vw", lg: "sm" }}>
                Merci de nous avoir laissé votre candidature. Nous reviendrons
                vers vous le plus vite possible.
              </AlertDescription>
            </Alert>
          )}

          {formError && (
            <Alert my={2} status="error">
              <AlertIcon />
              {formError}
            </Alert>
          )}

          <form onSubmit={handleSubmit(formSubmit)}>
            <Stack direction="row" gap={8} my={2}>
              <Stack direction="column" flex={2}>
                <FormControl
                  my={2}
                  isRequired
                  isInvalid={"firstName" in errors}
                >
                  <FormLabel fontSize="sm" color="gray.700" htmlFor="firstName">
                    Nom
                  </FormLabel>
                  <Input type="text" {...register("firstName")} />
                  <FormErrorMessage>
                    {errors.firstName?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl my={2} isRequired isInvalid={"lastName" in errors}>
                  <FormLabel fontSize="sm" color="gray.700" htmlFor="lastName">
                    Post-nom
                  </FormLabel>
                  <Input type="text" {...register("lastName")} />
                  <FormErrorMessage>
                    {errors.lastName?.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
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
            <Stack direction="row" gap={8} my={2}>
              <FormControl my={2} isInvalid={"email" in errors}>
                <FormLabel fontSize="sm" color="gray.700" htmlFor="email">
                  Adresse e-mail
                </FormLabel>
                <Input type="email" {...register("email")} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl my={2} isInvalid={"phone" in errors} isRequired>
                <FormLabel fontSize="sm" color="gray.700" htmlFor="phone">
                  Numero de téléphone
                </FormLabel>
                <Input type="tel" {...register("phone")} />
              </FormControl>
            </Stack>
            <FormControl my={2} isInvalid={"message" in errors} isRequired>
              <FormLabel fontSize="sm" color="gray.700" htmlFor="message">
                Message
              </FormLabel>
              <Textarea {...register("message")} />
              <FormHelperText>
                Une petite note à propos de vous et de vos motivations
              </FormHelperText>
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>
            <Button
              alignSelf="flex-start"
              colorScheme="green"
              my={2}
              type="submit"
              isLoading={formLoading}
            >
              Postuler
            </Button>
          </form>
        </Stack>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query CareerData($id: Int) {
    strapiCareer(strapi_id: { eq: $id }) {
      strapi_id
      career
      description
      isAvailable
      updatedAt
      requirements {
        data {
          requirements
        }
      }
      cover {
        localFile {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`;

export default Career;
