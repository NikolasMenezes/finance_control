export function getNameInitials(name) {
  const splited = name.split(" ");

  const firstNameInitial = splited[0][0];
  let lastNameInitial;

  if (splited.length > 1) {
    lastNameInitial = splited[splited.length - 1][0];
    return firstNameInitial + lastNameInitial;
  }

  return firstNameInitial;
}
