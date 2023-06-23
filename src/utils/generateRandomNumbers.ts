export default () => {
  const random = [];

  for (let index = 0; index < 10; index++) {
    random.push([Math.random(), Math.random()]);
  }

  return random;
}
