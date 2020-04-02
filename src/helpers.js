module.exports = {
    convertMinsToHrsMins: (mins) => {
      let h = Math.floor(mins / 60);
      let m = mins % 60;
      return (h > 0) ? `${h}h `: `` + (m > 0) ? `${m}m `: ``;
    }
}