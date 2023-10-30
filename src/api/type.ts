export type Review = {
    reviewerId: string;
    reviewerNickname: string;
    reviewerScore: number;
    reviewerText?: string;
}

export type UserDto = {
    password: string;
    balance: number;
    sellingStatus: boolean;
    nickname: string;
    faculty: string;
    degree: number;
    age: number;
    gender: string;
    previewPicture: string;
    supplementPictures: string[];
    price: number;
    lineId: string;
    description: string;
    incomingRequests: string[];
    averageScore: number;
    reviews: Review[];
}

export type FilterUserDto = {
    nickname: string | undefined;
    faculty: string | undefined;
    degree: number | undefined;
    age: number | undefined;
    gender: string | undefined;
}

export type ReviewDto = {
    studentId: string;
    picture: string;
    nickname: string;
    score: number;
    text: string;
}

export type FindMeDto = {
    _id: string;
    studentId: string;
    balance: number;
    sellingStatus: boolean;
    nickname: string;
    faculty: string;
    degree: number;
    age: number;
    gender: string;
    purchaseHistories: PurchaseHistory[];
    previewPicture: string;
    supplementPictures: string[];
    price: number;
    lineId: string;
    sold: number;
    description: string;
    incomingRequests: IncomingRequest[];
    sentRequests: SentRequest[];
    averageScore: number;
    reviews: Review[];
}

export type PurchaseHistory = {
    _id: string,
    userId: string,
    studentId: string,
    picture: string,
    nickname: string,
    price: number,
    date: string
}

export type IncomingRequest = {
    _id: String,
    userId: string,
    studentId: string,
    picture: string,
    nickname: string,
    age: number,
    gender: string
}

export type SentRequest = {
    _id: string,
    userId: string,
    studentId: string,
    picture: string,
    nickname: string,
    price: number,
    status: string,
    lineId: string
}