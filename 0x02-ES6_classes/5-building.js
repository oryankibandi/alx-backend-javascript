const decorator = (prototypeClass) => {
  let fns = Reflect.ownKeys(prototypeClass).filter((i) => i !== "constructor");
  console.log("fns:", fns);
};

class Building {
  constructor(sqft) {
    decorator(Object.getPrototypeOf(this));
    const proto = Object.getPrototypeOf(this);
    const superProto = Building.prototype;
    const missing = Object.getOwnPropertyNames(superProto).find((name) => {
      typeof superProto[name] === "function" && !proto.hasOwnProperty(name);
    });

    console.log("prop: ", Object.getOwnPropertyNames(superProto));
    console.log("proto: ", Object.getOwnPropertyNames(proto));
    console.log("protoDescriptor: ", Object.getOwnPropertyDescriptors(proto));

    if (missing)
      throw new Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(squarefoot) {
    this._sqft = squarefoot;
  }
}

module.exports = Building;
