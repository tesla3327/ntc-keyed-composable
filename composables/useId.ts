/**
 * This is a naive implementation of useId just to illustrate.
 */
export default (key: string) => {
  let id = key;

  if (id.startsWith('$')) {
    // Remove the $ from the key
    id = id.slice(1);

    // Make sure it starts with a letter and not a number
    id = 'a' + id;
  }

  return id;
};
