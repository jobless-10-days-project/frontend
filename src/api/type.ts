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