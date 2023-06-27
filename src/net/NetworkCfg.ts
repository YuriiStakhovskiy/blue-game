//Event Macro Definition
export namespace NETWORK {
  //Login Related News
  export class LOGIN {
    static LOGIN: string = '/login' //Login
    static REGISTER: string = '/register' //Registration
  }

  //Business logic after entering the home page
  export class HOME_PAGE {
    static USER_INFO = '/user/info'; // user profile
    static USER_CHANGE = '/user/change'; // user update
  }

  //Listening events sent actively
  export class UNSOLICITED {}
}
