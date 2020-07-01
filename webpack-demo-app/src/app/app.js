import { parseInputs } from './utils/parse-inputs';
import { inputsAreValid } from './utils/inputs-are-valid';

export const run = (alert, component) => {
  alert.hideErrors();

  component.onclick(() => {
    alert.hideErrors();
    const inputs = component.getInputs();
    const parsedInputs = parseInputs(inputs);
    if (inputsAreValid(parsedInputs)) {
      const [numA, numB] = parsedInputs;
      component.setResult(numA + numB);
    } else {
      component.setResult("");
      alert.handleAdditionError(inputs, parsedInputs);
    }
  });
};
