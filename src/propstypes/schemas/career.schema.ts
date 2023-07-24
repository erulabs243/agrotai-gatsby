import * as yup from "yup";

export const careerRequestSchema = yup.object({
  firstName: yup.string().required("Le nom est obligatoire"),
  lastName: yup.string().required("Le postnom est obligatoire"),
  gender: yup.string().required("Veuillez sélectionner votre sexe"),
  phone: yup.string().required("Le numero de téléphone est obligatoire"),
  message: yup.string().required("Laissez une petite note"),
  email: yup
    .string()
    .required("Adresse e-mail obligatoir")
    .email("Adresse e-mail invalide"),
});

export type careerRequestType = yup.InferType<typeof careerRequestSchema>;
