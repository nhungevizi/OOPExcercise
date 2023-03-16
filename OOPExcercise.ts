// 1: Hello world
  const helloWorld = "Hello world!"
  console.log(helloWorld);
  
  // 2: OOP
  interface ISubject {
      score15min: number;
      score45min: number;
      scoreFinal: number;
  
      average(): number;
  }
  
  abstract class Subject implements ISubject {
      score15min: number;
      score45min: number;
      scoreFinal: number;
  
      constructor(score15min: number, score45min: number, scoreFinal: number) {
          this.score15min = score15min;
          this.score45min = score45min;
          this.scoreFinal = scoreFinal;
      }
  
      average(): number {
          return (this.score15min + this.score45min * 2 + this.scoreFinal * 5) / 8;
      }
  
      protected getRank() : String{
          const calculatedAverage = this.average();
          if (calculatedAverage >= 9) {
              return "Excellent";
          }
  
          if (calculatedAverage >= 8) {
              return "Good";
          }
  
          if (calculatedAverage >= 6.5) {
              return "Rather";
          }
  
          if (calculatedAverage >= 4.5) {
              return "Medium";
          }
  
          return "Weak";
      }
  
      public getConclude() {
          return `You got ${this.getRank()} in your subject!`;
      }
  }
  
  class MathSubject extends Subject {
      score90min: number;
  
      constructor(score15min: number, score45min: number, score90min: number, scoreFinal: number) {
          super(score15min, score45min, scoreFinal)
      }
  
      average(): number {
          return (this.score15min + this.score45min * 2 + this.score90min * 3 + this.scoreFinal * 5) / 11;
      }
  
      public getConclude(): string {
          return `You got [${this.getRank()}] in your Math!`;
      }
  }
  
  class ITSubject extends Subject {
      public getConclude(): string {
          return `You got [${this.getRank()}] in your IT!`;
      }
  }
  
  const math = new MathSubject(9, 10, 8, 8.5);
  const it = new ITSubject(8, 9, 6);
  
  const subjects: Subject[] = [math, it];
  // Log conclude
  subjects.forEach(subjects => {
      console.log(subjects.getConclude());
  });
  