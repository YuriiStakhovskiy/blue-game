export interface SignupRequestData {
    account: string
    password: string
    referral_code: string
    browser: string
    device: string
    model: string
    brand: string
    imei: string
}

export type GetSignupResponseData = ApiResponseData<{
    token: string
}>