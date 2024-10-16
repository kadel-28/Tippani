export const validateEmail = (email) => {
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //checking for a valid email
    return regex.test(email);
}