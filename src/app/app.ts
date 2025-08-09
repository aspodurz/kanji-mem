import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import datas from './data/entries.json';
import { Elements, Entry } from './data/entry';




@Component({
  selector: 'app-root',
  imports: [MatButtonModule,MatExpansionModule,MatInputModule,ReactiveFormsModule,RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kanji-mem');
  //245=>325 last checked id
  protected readonly defaultMaxId: number = 245+1;
  data: Elements = (datas as Elements);
  maxIdFormControl = new FormControl(this.defaultMaxId, [Validators.required, Validators.min(0), Validators.max(this.data.elements.length), Validators.pattern('^[\\d]+\\.{0,1}[\\d]*$')]);
  entry: Entry;
  
  constructor(){
    this.entry=this.data.elements[this.getRandomInt(this.getMaxId())];
  }

  nextItem() {
    this.entry=this.data.elements[this.getRandomInt(this.getMaxId())];
  }

  getMaxId(): number {
    let len:number;
    if(this.maxIdFormControl.value!=null){
      len=this.maxIdFormControl.value;
    }else{
      len=this.defaultMaxId;
    }
    return len;
  }

  getRandomInt(max: number) : number {
    return Math.floor(Math.random() * max);
  }



}
