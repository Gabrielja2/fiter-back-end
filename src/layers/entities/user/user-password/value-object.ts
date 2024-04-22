import { InvalidUserPasswordError } from "./error";

export class UserPassword {

    private readonly userPassword: string;

    private constructor(userPassword: string) {
        this.userPassword = userPassword;
        Object.freeze(this);
    }

    public get value(): string {
        return this.userPassword;
    }

    static create(userPassword: string) {
        const isValidParam = this.validate(userPassword);
        if (!isValidParam) return new InvalidUserPasswordError();

        return new UserPassword(userPassword);
    }

    private static validate(userPassword: string): boolean {
        if (!userPassword) return false;

        const userPasswordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([0-9a-zA-Z])){8,}$/;

        if (!userPasswordRegEx.test(userPassword)) return false;

        return true;
    }
}