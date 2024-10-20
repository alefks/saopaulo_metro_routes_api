export class PhoneInUseError extends Error {
  constructor() {
    super("The received phone number is already in use");
    this.name = "PhoneInUseError";
  }
}
