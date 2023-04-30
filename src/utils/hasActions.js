export const hasActions = (actions) => {
  let result = false;
  if (actions?.buttons?.length > 0) {
    result = true;
  }
  return result;
};
