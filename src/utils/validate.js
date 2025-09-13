export const checkValidData = (email, password, fname) => {

    const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(fname);

    if (!isEmailValid) return "Email ID is not valid"
    /*
    Password Pass Criteria
    at least one uppercase letter, lowercase letter
    at least one digit 0-9
    at least one special character [@$!%*?&]
    min length 8, no upper limit set!
    */
    if (!isPasswordValid) return "Password is not valid"
    if (!isNameValid) return "Name is not valid"

    return null;

}