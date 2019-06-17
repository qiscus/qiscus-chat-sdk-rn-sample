
export default function p(promise) {
  return promise
    .then((res) => [null, res])
    .catch(err => [err])
}
