module.exports = {
    tweets: [
        {
            interaction: "YSY A retwitteó",
            account: "Duko",
            user: "@dukissj",
            profile_picture: "https://pbs.twimg.com/profile_images/1156090553244823552/N_Ps_43D_200x200.jpg",
            tweet: "Toy ke goteo",
            comments: "160",
            retweets: "3.9 K",
            likes: "14,4 K",
            time: "20 min",
            share: function pepe() {
                alert("share!")
            },
            id: function id() {
                return '_' + Math.random().toString(36).substr(2, 9);
            }
        },
        {
            interaction: "YSY A retwitteó",
            account: "TONY. MODO DIABLO",
            user: "@NeoPistea_",
            profile_picture: "https://pbs.twimg.com/profile_images/1148780152777781248/05m0-8CJ_200x200.jpg",
            tweet: "Test 1",
            comments: "160",
            retweets: "3.9 K",
            likes: "14,4 K",
            time: "20 min",
            share: function pepe() {
                alert("share!")
            },
            id: function id() {
                return '_' + Math.random().toString(36).substr(2, 9);
            }
        },
        {
            interaction: "",
            account: "YSY A",
            user: "@ysy__a",
            profile_picture: "https://pbs.twimg.com/profile_images/1158855492665577479/T6nP2Wrl_200x200.jpg",
            tweet: "Test 2",
            comments: "160",
            retweets: "3.9 K",
            likes: "14,4 K",
            time: "20 min",
            share: function share() {
                alert("share!")
            },
            id: function id() {
                return '_' + Math.random().toString(36).substr(2, 9);
            }
        }        
    ],
    menuArray: [
        {
          className: "sidebar__box__button",
          description: "",
          src: "",
          imgClassname: "fab fa-twitter sidebar__box__button__icon sidebar__box__button__icon--twitter"
        },
        {
          className: "sidebar__box__button sidebar__box__button--active",
          description: "Inicio",
          src: "",
          imgClassname: "fas fa-home sidebar__box__button__icon"
        },
        {
          className: "sidebar__box__button",
          description: "Explorar",
          src: "",
          imgClassname: "fas fa-hashtag sidebar__box__button__icon"
        },
        {
          className: "sidebar__box__button",
          description: "Notificaciones",
          src: "",
          imgClassname: "far fa-bell sidebar__box__button__icon"
        },
        {
          className: "sidebar__box__button",
          description: "Mensajes",
          src: "",
          imgClassname: "far fa-envelope sidebar__box__button__icon"
        },
        {
          className: "sidebar__box__button",
          description: "Guardados",
          src: "",
          imgClassname: "far fa-bookmark sidebar__box__button__icon"
        },
        {
          className: "sidebar__box__button",
          description: "Listas",
          src: "",
          imgClassname: "far fa-list-alt sidebar__box__button__icon"
        },
        {
          className: "sidebar__box__button",
          description: "Perfil",
          src: "https://pbs.twimg.com/profile_images/1158855492665577479/T6nP2Wrl_200x200.jpg",
          imgClassname: "sidebar__box__button__icon sidebar__box__button__icon--profile"
        },
        {
          className: "sidebar__box__button",
          description: "Más opciones",
          src: "",
          imgClassname: "fas fa-ellipsis-h sidebar__box__button__icon"
        },
        {
          className: "sidebar__box__button sidebar__box__button--twit",
          description: "Twittear",
          src: "",
          imgClassname: ""
        }
      ]
};