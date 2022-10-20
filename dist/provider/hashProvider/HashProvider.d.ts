import IHashProvider from "./IHashProvider";
declare class HashProvider implements IHashProvider {
    generateHash(payload: string): Promise<string>;
    compareHash(payload: string, hashed: string): Promise<boolean>;
}
export default HashProvider;
