export interface SigninRequestData {
  account: string
  password: string
}
export interface authRequestData {
}
export type GetSigninResponseData = ApiResponseData<{
  token: string
}>