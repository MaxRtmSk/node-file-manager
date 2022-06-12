export const parseProcessArgv = () => {
  const user_input_args = process.argv.slice(2);

  const result = user_input_args.reduce((previousValue, currentValue) => {
    if (currentValue && currentValue.startsWith("--")) {
      const [key_arg, value] = currentValue.slice(2).split("=");
      previousValue[key_arg] = value;
    }
    return previousValue;
  }, {});

  return result;
};
