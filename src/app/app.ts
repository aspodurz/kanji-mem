import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import datas from './data/entries.json'
import { Elements, Entry } from './data/entry';


@Component({
  selector: 'app-root',
  imports: [MatButtonModule,MatExpansionModule,RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kanji-mem');

  data: Elements = (datas as Elements);
  entry: Entry;
  len: number;

  constructor(){
    this.len=this.data.elements.length;
    this.entry=this.data.elements[this.getRandomInt(this.len)];
  }

  nextItem() {
    this.entry=this.data.elements[this.getRandomInt(this.len)];
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }


}
