export type langType = {
  main: {
    signupButton: string,
    loginButton: string,
  },
  login: {
    formPage: {
      header: {
        titleLine1: string, 
        titleLine2: string,
      },
      button: string,
      forgetPassword: string,
      donthaveAccount: string,
      createOne: string,
    },
    forgotPasswordPage: {
      title: string,
      submit: string,
      notification: string,
    },
  }
  signup: {
    formPage: {
      header: {
        titleLine1: string,
        titleLine2: string,
      },
      emailAddress: string,
      password: string,
      validation: {
        email: {
          title: string,
          title2: string,
        },
        password: {
          items: [
            string,
            string,
            string,
            string,
          ]
        },
      },
      promoCode: string,
      agree: {
        prefix: string,
        bold: string,
        suffix: string,
      },
      alreadyAccount: string,
      signIn: string,
      button: string,
      divider: string,
    },
    confirmCancelPage: {
      title: string,
      description: string,
      continue: string,
      cancel: string,
    },
    alreadyRegisterPage: {
      title: string,
      confirm: string,
      cancel: string,
    },
    displayNamePage: {
      title: string,
      username: string,
      validation: {
        username: {
          title: string,
          items: [
            string,
            string,
          ]
        }
      },
      submit: string,
    },
  },
  signout: {
    text_1: string
    text_2: string
    text_3: string
    button: string
  }
  navBar: {
    casino: string,
    sport: string,
    my_vip_perks: string,
    more: string,
    live_support: string,
    menu_item_1: {
      promotions: string,
      vip_club: string,
      affiliate: string,
      blog: string,
    },
    casino_sub_menu: {
      recently_played: string,
      favorites: string,
      game_originals: string,
      slots: string,
      live_casino: string,
    },
    language: {
      title: string,
      english: string,
      portuguese: string,
      espanola: string,
    },
    sound_mode: {
      on: string,
      off: string,
    }
  }
  rightBar: {
    dropdownItem: {
      casino: string,
      sport: string
    }
    bottom: {
      yourMessage: string
    }
  }
  appBar: {
    logo_text_1: string
    logo_text_2: string
    id: string
    account: string
    deposit: string
    bonuses: string
    game_history: string
    transactions: string
    refer_friend: string
    earn_money: string
    withdraw: string
    install: string
    app: string
    fairness: string
    rewards: string
    preferences: string
    statistics: string
    sign_out: string
    vip: {
      bronze: string,      
    }
  }
  home: {
    search: string
    button: {
      lobby: string
      popular: string
      slots: string
      live_casino: string
      blue_originals: string
    }
    original_games: string
    more: string
    principal: string
    game_providers: string
    slots: string
    live_casino: string
    footer: {
      game: {
        title: string
        menu_1: string
        menu_2: string
        menu_3: string
        menu_4: string
      }
      helpful_links: {
        title: string
        menu_1: string
        menu_2: string
      }
      about_us: {
        title: string
        menu_1: string
        menu_2: string
        menu_3: string
        menu_4: string
        menu_5: string
      }
      footer_4: {
        text: string
      }
      logo: {
        text_1: string
        text_2: string
      }
      footer_6: {
        text: string
      }
    }
  }
  mobile_menu: {
    menu: string
    casino: string
    share: string
    sport: string
    mail: string
  }
  deposit_dialog: {
    deposit_currency: string
    choose_payment_method: string
    deposit_amount: string
    amount: string
    validation: {
      text_1: string
      text_2: string
    }
    check_text: string
    other_text: string
    deposit_btn_text: string
    personal_information: {
      header_text: string
      id_text: string
      first_name: string
      last_name: string
      confirm_text: string
      confirm_success_text: string
      confirm_warning_text: string
    }
  }
  withdraw_dialog: {
    withdraw_currency: string
    withdraw_payment_method: string
    withdraw_amount: string
    amount: string
    validation: {
      text_1: string
      text_2: string
    }
    personal_information: {
      header_text: string
      id_text: string
      first_name: string
      last_name: string
      confirm_text: string
      confirm_success_text: string
      confirm_warning_text: string
    }
    text_1: string
    text_2: string
    text_3: string
    text_4: string
    other_text: string
    withdraw_btn_text: string
    withdraw_warning_text: string
  }
  mail_dialog: {
    header_text: string
  }
  affiliate: {
    tab: {
      text_1: string
      text_2: string
      text_3: string
    }
    invite: {
      invite_partner: string
      invited_user: string
      deposit_user: string
      bonus_today: string
      bonus_yesterday: string
      monthly_revenu_goal: string
      more_people_text: string
      premiums_text: string
      invitation_bonus: string
      betting_commision: string
      how_does_work: string
      how_does_content_1: string
      how_does_content_2: string
      achivement_bonus: string
      achivement_bonus_text_1: string
      agent_realization_text: string
      receive_btn_text: string
      commission_title_text: string
      commission_content_text: string
      invite_text_1: string
      invite_text_2: string
      invite_text_3_1: string
      invite_text_3_2: string
      invite_text_4_1: string
      invite_text_4_2: string
      invite_text_5_1: string
      invite_text_5_2: string
      invite_text_6: string
      invite_text_7: string
      invite_text_8: string
      invite_text_9: string
      invite_text_10: string
      invite_text_11: string
      invite_text_12: string
    }
  }
};