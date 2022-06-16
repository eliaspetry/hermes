//import JSON with countries
import countries from "../../../public/countries/countries.json";

//Text fields
type textField = {
    name: "name" | "surname" | "email" | "phone" | "company" | "position",
    label: string,
    required: boolean
};

const textFields: textField[] = [
    {name: "name", label: "Vorname", required: true},
    {name: "surname", label: "Nachname", required: true},
    {name: "email", label: "E-Mail", required: true},
    {name: "phone", label: "Telefonnummer", required: false},
    {name: "company", label: "Unternehmen", required: false},
    {name: "position", label: "Berufsbezeichnung", required: false}
];

//Select fields
type selectField = {
    name: "country" | "interest" | "title",
    label: string,
    required: boolean,
    options: {
        label: string,
        value: string
    }[]
};

const selectFields: selectField[] = [
    {
        name: "country",
        label: "Land",
        required: true,
        options: [...countries.map(country => ({"label": country.name, "value": String(country.id)}))]
    },
    {
        name: "interest",
        label: "Interesse",
        required: true,
        options: [
            {label: "Serviceleistungen in der Stadt", value: "0"},
            {label: "Serviceleistungen auf dem Land", value: "1"},
            {label: "Alles rund um die eCommerce Welt", value: "2"}
        ]
    },
    {
        name: "title",
        label: "Anrede",
        required: true,
        options: [
            {label: "Herr", value: "0"},
            {label: "Frau", value: "1"},
            {label: "Ich bevorzuge keine Anrede", value: "2"}
        ]
    },
];

export { textFields, selectFields };