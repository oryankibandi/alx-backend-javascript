export default function signUpUser(firstName, lastName) {
  const obj = {
    firstName: firstName,
    lastName: lastName,
  };
  return Promise.resolve(obj);
}
