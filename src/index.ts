import generateRandomNumbers from "./utils/generateRandomNumbers";
import myNetwork from "./neuralNetwork";

enum Emotions {
  Sad = 0,
  Neutral = 0.5,
  Happy = 1,
}

const learningRate = 0.3;

for (let i = 0; i < 20000; i++) {
  // 0,0 => 0
  myNetwork.activate([Emotions.Sad, Emotions.Sad]);
  myNetwork.propagate(learningRate, [Emotions.Sad]);
  // 0,1 => 0.5
  myNetwork.activate([Emotions.Sad, Emotions.Happy]);
  myNetwork.propagate(learningRate, [Emotions.Neutral]);
  // 0,1 => 0.5
  myNetwork.activate([Emotions.Happy, Emotions.Sad]);
  myNetwork.propagate(learningRate, [Emotions.Neutral]);
  // 1,1 => 1
  myNetwork.activate([Emotions.Happy, Emotions.Happy]);
  myNetwork.propagate(learningRate, [Emotions.Happy]);
}

const randomNumbers = generateRandomNumbers();

randomNumbers.forEach((param) => {
  const output = myNetwork.activate(param)[0];

  switch (parseFloat(output.toFixed(1))) {
    case 0.0:
      console.log({ Sad: output });
      break;

    case 0.5:
      console.log({ Neutral: output });
      break;

    case 1.0:
      console.log({ Happy: output });
      break;
  }
});
