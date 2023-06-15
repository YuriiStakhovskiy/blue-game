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
  },
  signout: {
    text_1: "Don’t forgot to check out our huge selection of promotions!",
    text_2: "Are you sure you want to logout?",
    text_3: "Don’t forgot to check out our huge selection of casino and sports promotions before you leave!",
    button: "Log Out"
  },
  navBar: {
    casino: 'CASINO',
    sport: 'SPORT',
    my_vip_perks: 'My VIP Perks',
    more: 'More',
    live_support: 'Live support',
    menu_item_1: {
      promotions: 'Promotions',
      vip_club: 'VIP Club',
      affiliate: 'Affiliate',
      blog: 'Blog',
    },
    casino_sub_menu: {
      recently_played: 'Recently Played',
      favorites: 'Favorites',
      game_originals: 'Game Originals',
      slots: 'Slots',
      live_casino: 'Live Casino',
    },
    language: {
      title: 'Language',
      english: 'English',
      portuguese: 'Portuguese',
      espanola: 'Espanola',
    },
    sound_mode: {
      on: 'On',
      off: 'Off',
    }
  },
  rightBar: {
    dropdownItem: {
      casino: 'Casino',
      sport: 'Sport'
    },
    bottom: {
      yourMessage: "Your Message"
    }
  },
  appBar: {
    logo_text_1: "BLUE",
    logo_text_2: "GAME",
    id: "ID",
    account: "Account",
    deposit: "Deposit",
    bonuses: "Bonuses",
    game_history: "Game History",
    transactions: "Transactions",
    refer_friend: "Refer a friend",
    earn_money: "Earn Money",
    withdraw: "Withdraw",
    install: "Install",
    app: "APP",
    fairness: "Fairness",
    rewards: "Rewards",
    preferences: "Preferences",
    statistics: "Statistics",
    sign_out: "Sign Out",
    vip: {
      bronze: "Bronze",
    }
  },
  home: {
    search: "Search Games Or Providers",
    button: {
      lobby: "Lobby",
      popular: "Popular",
      slots: "Slots",
      live_casino: "Live Casino",
      blue_originals: "Blue Originals",
    },
    original_games: "Original Games",
    more: "Load more",
    principal: "Principal",
    game_providers: "GAME Providers",
    slots: "Slots",
    live_casino: "Live Casino",
    footer: {
      game: {
        title: "Game",
        menu_1: "Crash",
        menu_2: "Double",
        menu_3: "Mines",
        menu_4: "Dice"
      },
      helpful_links: {
        title: "Helpful Links",
        menu_1: "Fairness",
        menu_2: "VIP Club"
      },
      about_us: {
        title: "ABOUT US",
        menu_1: "Terms of Service",
        menu_2: "Privacy Policy",
        menu_3: "Bonus Terms",
        menu_4: "Welcome Bonus",
        menu_5: "Responsible Gambling",
      },
      footer_4: {
        text: "The blue.game website offers games with an adventure experience directly owned by Pistis Trade N.V., to be a  user of our site you must be 18 years or older. We are not responsible for violating your local laws regarding online gaming. Play responsibly and have fun at blue.game."
      },
      logo: {
        text_1: "Blue.game is operated by Pistis Trade N.V., company registration number 162576, with registered address at Zuikertuintjeweg Z/N (Zuikertuin Tower), Curaçao and is licensed and authorized by the Government of Curacao and operates under the Master License of Gaming Services Provider, N.V. #365/JAZ License Number: GLH-OCCHKTWxxxxxxxxxx.",
        text_2: "Gambling can be addictive. Please play responsibly. Blue.game only accepts customers over 18 years of age."
      },
      footer_6: {
        text: "© 2023 Blue.game All rights reserved."
      }
    }
  },  
  mobile_menu: {
    menu: "Menu",
    casino: "Casino",
    share: "SHARE",
    sport: "Sport",
    mail: "Mail"
  },  
  deposit_dialog: {
    deposit_currency: "Deposit Currency",
    choose_payment_method: "Choose a Payment Method",
    deposit_amount: "Deposit amount",
    amount: "Amount",
    validation: {
      text_1: "Enter the amount you want to deposit.",
      text_2: "Minimum 20, Maximum 100000."
    },
    check_text: "Not participating in promotional activities",
    other_text: "0.00% fee,R$20.00+R$20.00 bonus into your account",
    deposit_btn_text: "DEPOSIT",
    personal_information: {
      header_text: "Enter your Pix details",
      id_text: "ID Number(CPF)",
      first_name: "Fist Name",
      last_name: "Last Name",
      confirm_text: "Confirm",
      confirm_success_text: "Successfully submitted, need to modify please contact customer service",
      confirm_warning_text: "Please contact customer service to make changes"
    }
  },
  withdraw_dialog: {
    withdraw_currency: "Withdrawal Currency",
    withdraw_payment_method: "Withdraw to",
    withdraw_amount: "Available Balance: R$ 108.88",
    amount: "Amount",
    validation: {
      text_1: "Enter the amount you want to withdraw. ",
      text_2: "Minimum 149, Maximum 588.88.",
    },
    personal_information: {
      header_text: "Enter your Pix details",
      id_text: "ID Number(CPF)",
      first_name: "Fist Name",
      last_name: "Last Name",
      confirm_text: "Confirm",
      confirm_success_text: "Successfully submitted, need to modify please contact customer service",
      confirm_warning_text: "Please contact customer service to make changes"
    },
    text_1: "Withdrawal fee: 2.5%.",
    text_2: "Free monthly withdrawal amount: 100",
    text_3: "Withdrawal hours: 11:00 - 19:00.",
    text_4: "Payout time: from 5 minutes to 24 hours.",
    other_text: "2.5% fee,R$19.5 into your account",
    withdraw_btn_text: "WITHDRAW",
    withdraw_warning_text: "Excess of withdrawable amount",
  },
  mail_dialog: {
    header_text: "Personal Email"
  },
  affiliate: {
    tab: {
      text_1: "Invite",
      text_2: "Statistics",
      text_3: "Forms"
    },
    invite: {
      invite_partner: "INVITE A PARTNER",
      invited_user: "Invited Users",
      deposit_user: "Deposited Users",
      bonus_today: "Bonus Today",
      bonus_yesterday: "Yesterday's Bonus",
      monthly_revenu_goal: "Monthly revenue goals",
      more_people_text: " more people to invite before the goal is reached",
      premiums_text: "PREMIUMS ISSUED SO FAR",
      invitation_bonus: "Invitation Bonus",
      betting_commision: "Betting Commission",
      how_does_work: "HOW DOES THE INVITATION BONUS WORK?",
      how_does_content_1: "Each deposit user can receive at least ",
      how_does_content_2: " for each invitation. The more people you invite, the higher the invitation bonus for the corresponding level.",
      achivement_bonus: "INVITE ACHIEVEMENT BONUS",
      achivement_bonus_text_1: "When you invite a certain number of recharge users every day, you can unlock the corresponding [Invitation Achievement Reward].",
      agent_realization_text: "Agent Realization ",
      receive_btn_text: "Receive",
      commission_title_text: "HOW TO GET COMMISSION ON YOUR BETS",
      commission_content_text: "This will be your long-term income, and you will receive a different percentage commission each time a player you invite places a bet.",
      invite_text_1: "Bonus rules: All players at the 'Promoter' level receive a percentage of the platform advantage bonus for each bet.",
      invite_text_2: "The proportions of the 3 levels are as follows:",
      invite_text_3_1: "- Level 1: Get ",
      invite_text_3_2: " platform advantage",
      invite_text_4_1: "- Level 2: Get ",
      invite_text_4_2: " platform advantage",
      invite_text_5_1: "- Level 3: Get ",
      invite_text_5_2: " platform advantage",
      invite_text_6: "INCOME CALCULATOR",
      invite_text_7: "Invite ",
      invite_text_8: " active users Expected annual income to be earned",
      invite_text_9: "Are you a blogger with a large audience and many followers? We offer you a partner program with a special referral bonus.",
      invite_text_10: "Please contact our manager to discuss the terms.",
      invite_text_11: "https://wa.me/message/3E5IOHH5J2BCL1",
      invite_text_12: "Important: Only users who have passed the requirements and have been approved by their manager can participate in the program.",
      help_text_1: "The estimated value is derived from the average of all the guest users' earnings within the platform. Your earnings consist of 2 parts, the bonus for inviting Deposited Users, the commission for discounts on the bets of subordinate users, where the value of the lower level user's betting bonus depends on the value of his bets from the lower level user, the more his accumulated betting value, the higher his earnings.",
      help_text_2: "Betting commissions will give you commission income every day. The more level 1 depositors you invite or indirectly invite level 2-3 depositors, the more they bet on games, the more commissions you earn!",
      bonus_dialog: {
        text_1: "The number of invited deposit users is accumulated within 24 hours starting at 00:00 every day. For example, if your number of valid invitations reaches 50, this means that you will receive achievement bonuses in three gradients,",
        text_2: "Cumulative Deposit Users",
        text_3: "Bonus"
      }
    },
    statistics: {
      total_profit_text: "TOTAL PROFIT",
      mobile_profit_title: "PREMIUMS ISSUED SO FAR",
      text_1: "You receive a commission for every bet you invite users to make, win or lose.",
      text_2: "So all you have to do is improve your playing skills, think about how to win the game, and share it with everyone to help more people win with your method.",
      text_3: "We want all players to have fun at BETFIERY, whether it's the fun of winning bets or the game itself!",
      tab: {
        text_1: "PROFIT TODAY",
        text_2: "PROFIT THIS WEEK",
        text_3: "PROFIT THIS MONTH",
        today: {
          profit_today_text: "PROFIT TODAY",
        },
        week: {
          profit_this_week_text: "PROFIT THIS WEEK"
        },
        month: {
          profit_this_month_text: "PROFIT THIS MONTH"
        },
        profit_tab_text_1: "Your profit will consist of two parts, namely [Invitation Bonus] [Betting Commission].",
        profit_tab_text_2: "Betting Commission:",
        profit_tab_text_3: "This will be your main income and you will receive a different percentage of each bet you invite players to place for commission.",
        profit_tab_text_4: "Invitation Bonus:",
        profit_tab_text_5: "The user that you invite to deposit for the first time, you will receive a cash bonus of ",
      }
    },
    forms: {
      table: {
        time: "Time",
        user: "User",
        bonus: "Bonus",
      }
    }
  },
  bonus: {
    title_text: "Your Account balance and bonuses",
    total_text: "Total",
    withdraw_text: "Withdrawal Amount"
  }
};