//Event Macro Definition
export namespace NETWORK {
  //Login Related News
  export class LOGIN {
    static LOGIN: string = '/account/login' //Login
    static REGISTER: string = '/account/register' //Registration
  }

  //Business logic after entering the home page
  export class HOME_PAGE {}

  //Listening events sent actively
  export class UNSOLICITED {}
}
