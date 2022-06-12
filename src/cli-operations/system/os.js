export const os = async (user_input, cli_config) => {
  try {
    console.log("user_input", user_input);
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
