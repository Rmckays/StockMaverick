export interface IUser {
    username: string;
    displayName: string;
    token: string;
    cashAmount: number;
    image? : string;
}

export interface IUserFormValues {
    email: string;
    password: string;
    cashAmount?: number;
    displayName?: string;
    username?: string;
}