#!/usr/bin/env ts-node
function createTabs(n: number): string {
  return '----'.repeat(n);
}
class Person {
  public children: Person[] = [];       // Person[]只是声明,=才是赋值
  constructor(public name) {}
  addChild(child: Person): void {       // void表示没有返回值
    this.children.push(child);
  }
  introduceFamily(n?: number): void {   // ?表示参数可有可无
    n = n || 0;                         // 传的参数为n，不传则为1
    console.log(`${createTabs(n)}${this.name}`);
    this.children.forEach(person => {
      person.introduceFamily(n + 1);
    });}}
const grandPa = new Person('王麻子');const person1 = new Person('王麻');const person2 = new Person('王子');
const child11 = new Person('王毛');const child12 = new Person('王水');
const child21 = new Person('王荣耀');const child22 = new Person('王农药');

grandPa.addChild(person1);grandPa.addChild(person2);
person1.addChild(child11);person1.addChild(child12);
person2.addChild(child21);person2.addChild(child22);

grandPa.introduceFamily();