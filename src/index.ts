import NeuralNetwork from "./neuralNetwork";
import generateRandomInputs from "./utils/generateRandomInputs";

const randomInput = generateRandomInputs();

const networks = [new NeuralNetwork(), new NeuralNetwork()];

networks.forEach((network) => {
  network.trainNetwork();
  console.log(network.getResults(randomInput));
});
