import { langType } from "./lang-base";

export const lang: langType = {
  main: {
    signupButton: "Register",
    loginButton: "Login",
  },
  login: {
    formPage: {
      header: {
        titleLine1: "Sign in to", 
        titleLine2: "your account",
      },
      button: "Sign in",
      forgetPassword: "Forgot Password?",
      donthaveAccount: "Don't have an account yet?",
      createOne: "Create one now!",
    },
    forgotPasswordPage: {
      title: 'Forgot Password ?',
      submit: 'Submit',
      notification: "We've sent you an email with instructions to reset your password",
    },
  },
  signup: {
    formPage: {
      header: {
        titleLine1: " Register at ",
        titleLine2: " BLUE.GAME ",
      },
      emailAddress: "Email Address",
      password: "Password",
      validation: {
        email: {
          title: "Please fill in this field",
          title2: "Please enter a validate email",
        },
        password: {
          items: [
            "8-30 Characters in length",
            "Contains one upper and one lowercase character",
            "Contains a number",
            "Contains Special Code",
          ]
        },
      },
      promoCode: "Referral/Promo Code(Optional)",
      agree: {
        prefix: "I agree to the ",
        bold: "User Agreement & confirm ",
        suffix: "I am at least 18 years old",
      },
      alreadyAccount: "Already have an account? ",
      signIn: "Sign in",
      button: "SIGN UP",
      divider: "OR",
    },
    confirmCancelPage: {
      title: "Are you sure you want to cancel your registration?",
      description: "€200 in deposit bonuses awaits you.",
      continue: "Continue",
      cancel: "Yes, I Want to Cancel",
    },
    alreadyRegisterPage: {
      title: "Looks like you've already registered, sign in now?",
      confirm: "Confirm",
      cancel: "Cancel",
    },
    displayNamePage: {
      title: "Enter a display name",
      username: "Username",
      validation: {
        username: {
          title: "This is the name others will see on Blue.game",
          items: [
            "2-20 characters in length",
            "Nickname must not be like your email",
          ]
        }
      },
      submit: "Submit",
    },
  }
};