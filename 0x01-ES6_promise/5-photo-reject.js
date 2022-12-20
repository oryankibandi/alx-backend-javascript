export default function uploadPhoto(filename) {
  const prom = new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });

  return prom;
}
