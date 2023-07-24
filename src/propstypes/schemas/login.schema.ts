import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup.string().required("Utilisateur obligatoire"),
  password: yup.string().required("Mot de passe obligatoire"),
});

export type loginType = yup.InferType<typeof loginSchema>;
