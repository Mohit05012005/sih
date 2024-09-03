const fs = require('fs');
const tf = require('@tensorflow/tfjs');

// Load the dataset from the JSON file
const loadDataset = () => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

  const features = data.features;
  const labels = data.labels;

  return { features, labels };
};

const { features, labels } = loadDataset();
console.log(features);





// const fs = require('fs');
// const tf = require('@tensorflow/tfjs');

// // Load the dataset from the JSON file
// const loadDataset = () => {
//   const data = JSON.parse(fs.readFileSync('expanded_pii_dataset_with_additional_types.json', 'utf8'));

//   const features = data.features;
//   const labels = data.labels;

//   // Example preprocessing (tokenization, vectorization can be added here)
//   // For demonstration, we just convert to Tensor
//   const xs = tf.tensor(features);
//   const ys = tf.tensor(labels);

//   return { xs, ys };
// };

// // Load and use the dataset
// const { xs, ys } = loadDataset();
// console.log(xs);
// console.log(ys);
