export default function login_validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
        errors.password = "Password is required";
    }else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "Password must be between 8 and 20 characters";
    }else if(values.password.includes(" ")){
        errors.password = "Password must not contain spaces";
    }

    return errors;
}

export function registerValidate(values){
    const errors = {};

    if (!values.username) {
        errors.username = "Username is required";
    }else if(values.username.includes(" ")){
        errors.username = "Username must not contain spaces";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8 || values.password.length > 20) {
      errors.password = "Password must be between 8 and 20 characters";
    } else if (values.password.includes(" ")) {
      errors.password = "Password must not contain spaces";
    }

    if (!values.cpassword) {
        errors.cpassword = "Confirm password is required";
    }else if (values.cpassword !== values.password) {
        errors.cpassword = "Passwords do not match";
    }else if(values.cpassword.includes(" ")){
        errors.cpassword = "Confirm password must not contain spaces";
    }
    return errors;
}