function flickSwitch(arr) {
    let f = true;
    return arr.map((i) => {
      if (i === "flick") {
        f = !f;
      }
      return f;
    });
  }