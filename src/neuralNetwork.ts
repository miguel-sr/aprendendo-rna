import { Layer, Network } from "synaptic";

const inputLayer = new Layer(2);
const hiddenLayer = new Layer(3);
const outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer,
});

enum Emotions {
  Sad = 0,
  Neutral = 0.5,
  Happy = 1,
}

const learningRate = 0.3;

class NeuralNetwork {
  getResults(inputs: number[][]): object[] {
    const results: object[] = [];

    inputs.forEach((input) => {
      const output = myNetwork.activate(input)[0];
      switch (parseFloat(output.toFixed(1))) {
        case 0.0:
          results.push({ Sad: output });
          break;

        case 0.5:
          results.push({ Neutral: output });
          break;

        case 1.0:
          results.push({ Happy: output });
          break;
      }
    });

    return results;
  }

  public trainNetwork() {
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
  }
}

export default NeuralNetwork;
