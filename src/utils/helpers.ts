export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  const regex = /^(\+?7|8)?9\d{9}$/;
  return regex.test(phoneNumber);
};
