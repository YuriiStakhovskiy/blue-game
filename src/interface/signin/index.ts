export interface SigninRequestData {
  account: string
  password: number
}
export interface authRequestData {
}
export type GetSigninResponseData = ApiResponseData<{
  token: string
}>