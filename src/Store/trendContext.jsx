import React, { useState, createContext } from 'react';

export const TrendContext = createContext();

export const TrendProvider = (props) => {
  const [trend, setTrend] = useState([
    {
      position: 1,
      hashtag: "#BuenJueves",
      tweets: "6.158",
      isTrend: true
    },
    {
      position: 2,
      hashtag: "#citii",
      tweets: "",
      isTrend: true
    },
    {
      position: 3,
      hashtag: "#HartosDeMacri",
      tweets: "1.990",
      isTrend: true
    },
    {
      position: 4,
      hashtag: "Birmajer",
      tweets: "16,2 mil",
      isTrend: true,
      isNews: true,
      country: "Argentina",
      description: "El escritor Marcelo Birmajer denuncia haber sido agredido...",
      url: "https://pbs.twimg.com/profile_images/1113629235082608641/fkvxiwJk_400x400.png"
    },
    {
      position: 5,
      hashtag: "#FelizJueves",
      tweets: "29,8 mil",
      isTrend: true
    },
    {
      position: 6,
      hashtag: "Astroworld",
      tweets: "",
      isTrend: false
    },
    {
      position: 7,
      hashtag: "#Tengo30",
      tweets: "",
      isTrend: true
    },
    {
      position: 8,
      hashtag: "Like Boss RMX",
      tweets: "",
      isTrend: true
    },
    {
      position: 9,
      hashtag: "#Goteo",
      tweets: "",
      isTrend: false
    },
    {
      position: 10,
      hashtag: "Quavo",
      tweets: "",
      isTrend: false
    }
  ]);
  return (
    <TrendContext.Provider value={[trend, setTrend]}>
      {props.children}
    </TrendContext.Provider>
  );
}