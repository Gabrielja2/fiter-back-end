import {
    UserEmail,
    UserPassword,
    InvalidUserEmailError,
    InvalidUserPasswordError,
} from "@/layers/entities";

export class User {

    private constructor(
        public email: UserEmail,
        public password: UserPassword,
    ) {
        this.email = email;
        this.password = password;
        Object.freeze(this);
    }

    static create(
        email: string,
        password: string,
    ): User | InvalidUserEmailError | InvalidUserPasswordError {
        const emailOrError = UserEmail.create(email);
        if (emailOrError instanceof Error) return emailOrError;

        const passwordOrError = UserPassword.create(password);
        if (passwordOrError instanceof Error) return passwordOrError;

        return new User(emailOrError, passwordOrError);
    }
}