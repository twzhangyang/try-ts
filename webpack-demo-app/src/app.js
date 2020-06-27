const alertService = new AlertService();
const componentService = new ComponentService();
const run = (alert, component) => {
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

run(alertService, componentService);
