export function validateEmail(email) {
  const regex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
  return regex.test(email)
}

export function validateUserErrors(error) {
  const { code } = error

  switch (code) {
    case 'auth/wrong-password': {
      return 'La contraseña no es correcta.'
    }

    case 'auth/user-not-found': {
      return 'No se encontró ninguna cuenta con este correo electrónico.'
    }

    case 'auth/invalid-password': {
      return 'La contraseña tiene que ser de al menos 6 caracteres.'
    }

    case 'auth/email-already-in-use': {
      return 'Ya existe una cuenta con el correo electrónico proporcionado.'
    }

    case 'auth/invalid-email': {
      return 'El correo electrónico no es válido.'
    }

    default:
      return 'Hubo un error al intentar acceder/crear la cuenta.'
  }
}
