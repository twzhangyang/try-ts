export class StringBuilder {
  constructor(private value: string = '') {
  }

  public append(text: string): this {
    this.value += text;
    return this;
  }

  public appendLine(line: string): this {
    this.value += line + '\n';
    return this;
  }

  public result(): string {
    return this.value;
  }


const builder = new StringBuilder();
builder.appendLine('header').append('Label:').result();
