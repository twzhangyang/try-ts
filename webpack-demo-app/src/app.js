import { parseInputs } from './app/utils/parse-inputs';
import { alertService } from './app/alert-service';

export const run = (alert, component) => {
  alertService.hideErrors();

  component.onclick(() => {
    alertService.hideErrors();
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
