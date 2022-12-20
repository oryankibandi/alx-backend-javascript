import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const promises = [];
  const results = [];

  promises.push(signUpUser(firstName, lastName));
  promises.push(uploadPhoto(fileName));

  return Promise.allSettled(promises).then((results) => {
    results.forEach((result) => results.push({ status: result.status, value: result.value }))
  });  
}
