import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: String | null;
  imgSrc = "./assets/Daco.png";
  messages: String[] = [
    'ไม่ใช่ห่วงยาง แต่เป็นห่วงใย',
    'ที่เธอหายไป เพราะไม่มีใจหรือแค่กักตัว',
    'อยากร้ายเหมือนโควิด จะได้มีคนติดหลายๆ คน',
    'ช่วงนี้มีแต่คนใส่แมส ไม่เห็นมีคนใส่ใจเลย',
    'ต่อให้โลกไม่มีโควิด ก็คงไม่มีสิทธิ์ใกล้ชิดคุณ',
    'เศร้ากว่าการติดโควิด-19 คือการคิดผิดไปติดคนอย่างเธอ',
    'โควิดทำลายปอด แต่ทักแล้วไม่ตอบทำลายหัวใจ',

  ];

  private useMessage: String[] = [];

  constructor() {
    this.title = this.randomcaption();

  }

  randomcaption() {

    let randomindex: number;
    let newCaption: String;
    if (this.messages.length == this.useMessage.length) {
      return null;

    }

    do {
      randomindex = this.Random(this.messages.length);
      newCaption = this.messages[randomindex];
    } while (this.useMessage.includes(newCaption));
    this.useMessage.push(newCaption);
    return newCaption;
  }

  handleClickbutton() {
    this.title = this.randomcaption();

  }

  private Random(max: number) {
    return Math.floor(Math.random() * max)
  }

}
