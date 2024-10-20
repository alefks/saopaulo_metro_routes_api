import { v4 as uuidv4 } from "uuid";
import { UuidGenerator } from "../../domain/usecases/generate-uuid";

export class UuidGeneratorAdapter implements UuidGenerator {
  generate(): string {
    return uuidv4();
  }
}
