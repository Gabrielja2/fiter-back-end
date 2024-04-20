export class UserModel {
    constructor(
        public readonly id: string,
        public email: string,
        public password: string,
        public balanceId?: string,
        public tickets?: string[]
    ) { }
}