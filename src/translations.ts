import { FormField } from '@oryd/kratos-client';

const translations = {
  password: {
    title: 'Contraseña',
    position: 2,
  },
  'traits.email': {
    title: 'Correo Electrónico',
    position: 1,
  },
  'traits.name.first': {
    title: 'Nombre',
    position: 2,
  },
  'traits.name.last': {
    title: 'Apellido',
    position: 3,
  },
  'traits.website': {
    title: 'Website',
    position: 4,
  },
  identifier: {
    title: 'Correo Electrónico',
    position: 0,
  },
  to_verify: {
    title: 'Tu Correo Electrónico',
    position: 0,
  },
};

type Translations = typeof translations;

export const getTitle = (key: string): string =>
  key in translations ? translations[key as keyof Translations].title : key;

export const getPosition = (field: FormField) =>
  field.name && field.name in translations
    ? translations[field.name as keyof Translations].position
    : Infinity;

// This helper function translates the html input type to the corresponding partial name.
export const toFormInputPartialName = (type: string) => {
  switch (type) {
    case 'hidden':
      return 'form_input_hidden';
    case 'password':
      return 'form_input_password';
    case 'submit':
      return 'form_field_button';
    default:
      return 'form_input_default';
  }
};
