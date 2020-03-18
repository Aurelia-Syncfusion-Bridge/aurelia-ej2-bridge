export class JsonStringifyValueConverter {
  toView(value: any) {
    return JSON.stringify(value);
  }
  fromView(value) {
    return JSON.parse(value);
  }
}
