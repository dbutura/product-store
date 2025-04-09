export const showToast = (toast, success, message) => {
  toast({
    title: success ? "Success" : "Error",
    description: message,
    status: success ? "success" : "error",
    duration: 3000,
    isClosable: true,
  });
};
