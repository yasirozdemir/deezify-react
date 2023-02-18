export const url = "https://striveschool-api.herokuapp.com/api/deezer/";

export const secToMinSec = (s, mORs) => {
  const min = Math.floor((s % 3600) / 60);
  const sec = Math.floor((s % 3600) % 60);
  switch (mORs) {
    case "m":
      return min;
    case "s":
      return sec;
    default:
      return;
  }
};
