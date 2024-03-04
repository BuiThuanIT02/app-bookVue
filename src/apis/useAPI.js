import instance from ".";
export const getAllBook = async () => {
  return instance.get("/Book");
};
