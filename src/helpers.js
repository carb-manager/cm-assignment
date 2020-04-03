module.exports = {
    convertMinsToHrsMins: (mins) => {
      let h = Math.floor(mins / 60);
      let m = mins % 60;
      let formattedDuration = (h > 0) ? `${h}h `: `` ;
      formattedDuration +=(m > 0) ? `${m}m `: ``;
      return formattedDuration;
    }
}