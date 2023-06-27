export interface GetUserInfo {
    id: string
    avatar: any
    nickName: string
    email: string,
    password: string,
    area: string,
    phoneNumber: string,
    verified: boolean
}
export type GetUserInfoResponseData = {
    code: number
    data: GetUserInfo
    message: string
}