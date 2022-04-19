import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState([
{
      name: "Duko",
      account: "@DukiSSJ",
      url: "https://pbs.twimg.com/profile_images/1156090553244823552/N_Ps_43D_200x200.jpg"
    },
    {
      name: "TONY. MODO DIABLO",
      account: "@NeoPistea_",
      url: "https://pbs.twimg.com/profile_images/1148780152777781248/05m0-8CJ_200x200.jpg"
    },
    {
      name: "Cazzu",
      account: "@cazzuoficial",
      url: "https://pbs.twimg.com/profile_images/1134473887842996224/7IJCUSdH_200x200.jpg"
    },
    {
      name: "YSY A",
      account: "@ysy__a",
      url: "https://pbs.twimg.com/profile_images/1158855492665577479/T6nP2Wrl_200x200.jpg"
    },
    {
      name: "#TENGO30",
      account: "@kheayf",
      url: "https://pbs.twimg.com/profile_images/1174053171125207046/uTvbBbHi_200x200.jpg"
    },
    {
      name: "KAYDY CAIN",
      account: "@kaydyCain",
      url: "https://pbs.twimg.com/profile_images/1177216430158299136/UoHslSn7_200x200.jpg"
    },
    {
      name: "TRAVIS SCOTT",
      account: "@trvisXX",
      url: "https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ_200x200.jpg"
    },
    {
      name: "Kendrick Lamar",
      account: "@kendricklamar",
      url: "https://pbs.twimg.com/profile_images/1103764272654442496/wcNdeqop_200x200.jpg"
    },
    {
      name: "QuavoYRN",
      account: "@QuavoStuntin",
      url: "https://pbs.twimg.com/profile_images/1050163559496212480/ZL5bAgDp_200x200.jpg"
    },
    {
      name: "C•R•O BARDERO$",
      account: "@MDBxCRO",
      url: "https://pbs.twimg.com/profile_images/1159662520199782400/Rjc8PWxY_200x200.jpg"
    }
    ]);
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}