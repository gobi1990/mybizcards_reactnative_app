export const validateEmail = (email: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    return '';
  }
  if (email.length <= 0) {
    return 'Email is required!';
  }
  return 'Enter a valid email address';
};

export const validatePhone = (phone: string): string => {
  const phoneRegex = /^[0-9]{10}$/;

  if (phoneRegex.test(phone) || phone.length > 8) {
    return '';
  }

  if (phone.length > 0 && phone.length < 8) {
    return 'Phone number should be more than 7 characters!';
  }
  return 'Enter a valid phone number';
};

export const validateUrl = (url: string): string => {
  const urlRegex =
    /^(https?:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/;

  if (url.length > 0) {
    if (urlRegex.test(url)) {
      return '';
    } else {
      return 'Enter a valid URL';
    }
  }
  return '';
};

export const validateInputText = (text: string): string => {
  if (text.length > 0) {
    return '';
  }
  return 'This field is required!';
};
