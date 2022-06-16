import * as yup from "yup";

//Name Validator (let's only disallow digits for now, for international name friendliness)
const nameValidation = /^\D+$/;

//Phone Validator (I found this one on https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup)
const phoneValidation = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

//Formik Validation
export const validationSchema = yup.object().shape({
    country: yup
    .string()
    .required('Bitte wählen Sie ein Land aus'),
    
    interest: yup
    .string()
    .required('Bitte wählen Sie einen Grund zur Interesse aus'),

    title: yup
    .string()
    .required('Bitte wählen Sie eine Anrede aus'),

    name: yup
    .string()
    .min(2, 'Vorname zu kurz: mindestens 2 Zeichen')
    .max(50, 'Vorname zu lang: maximal 50 Zeichen')
    .matches(nameValidation, 'Bitte geben Sie Ihren Vornamen an')
    .required('Bitte geben Sie Ihren Vornamen an'),

    surname: yup
    .string()
    .min(2, 'Nachname zu kurz: mindestens 2 Zeichen')
    .max(100, 'Nachname zu lang: maximal 100 Zeichen')
    .matches(nameValidation, 'Bitte geben Sie Ihren Nachnamen an')
    .required('Bitte geben Sie Ihren Nachnamen an'),

    email: yup
    .string()
    .email('Bitte geben Sie eine gültige E-Mail Adresse an')
    .required('Bitte geben Sie eine E-Mail Adresse an'),

    phone: yup
    .string()
    .matches(phoneValidation, 'Bitte geben Sie eine gültige Rufnummer an')
});