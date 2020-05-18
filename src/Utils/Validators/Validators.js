export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(10);
export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const required = value => (value  ? undefined : 'Required');