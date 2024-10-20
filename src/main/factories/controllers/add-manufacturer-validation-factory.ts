import { EmailValidatorAdapter } from "../../../infra/validators/email-validator-adapter";
import { Validation } from "../../../presentation/protocols";
import { EmailValidation } from "../../../validation/validators/email-validation";
import { RequiredFieldValidation } from "../../../validation/validators/required-field-validation";
import { ValidationComposite } from "../../../validation/validators/validation-composite";

export const makeAddManufacturerValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of [
    "name",
    "phone",
    "email",
    "adress",
    "street",
    "number",
    "city",
    "state",
    "zip_code",
    "website",
  ]) {
    validations.push(new RequiredFieldValidation(field));
  }

  validations.push(new EmailValidation("email", new EmailValidatorAdapter()));

  return new ValidationComposite(validations);
};
