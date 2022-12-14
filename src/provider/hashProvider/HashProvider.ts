import IHashProvider from "./IHashProvider";
import { hash, compare } from "bcryptjs";

class HashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 10);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default HashProvider;
