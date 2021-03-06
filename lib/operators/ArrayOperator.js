import assert from "assert";
import BaseOperator from "./BaseOperator";

export default class ArrayOperator extends BaseOperator {

  constructor(decodeMethod) {

    assert(decodeMethod, "decodeMethod is a required argument");

    super(decodeMethod);

    this.names = ["$array"];
    this.dictFormat = true;
    this.defaults = {"of": null, "number": 10};
  }

  handler(options) {

    const parsedOptions = this.parseOptions(options);

    // decode number
    const number = this.decode(parsedOptions.number);

    // build array of 'of' elements, but don't evaluate them
    let returnValue = [];
    for (let index = 0; index < number; index++) {
      returnValue.push(parsedOptions.of);
    }
    return returnValue;
  }
}
