export class Model {
  url:string="";
  h2:string="";
  h3:string="";

  constructor(url: string, h2: string, h3: string) {
    this.url = url;
    this.h2 = h2;
    this.h3 = h3;
  }
}

export class question {
  h2:string="";
  p:string="";


  constructor(h2: string, p: string) {
    this.h2 = h2;
    this.p = p;
  }
}
