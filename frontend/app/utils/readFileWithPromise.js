const readFileWithPromise = (file) => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.onload = resolve;
  fileReader.onerror = reject;
  fileReader.readAsText(file, 'UTF-8');
});

export default readFileWithPromise;
