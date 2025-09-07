import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-change-detection',
  imports: [FormsModule],
  templateUrl: './change-detection.html',
  styleUrl: './change-detection.css'
})
export class ChangeDetection {

  constructor(private _cdRef:ChangeDetectorRef){
  }
  //nem sempre eu preciso disso , o two way data binding é melhor para isso 
  changeDetection():void {
this._cdRef.detectChanges();
}
atualizar(input: HTMLInputElement):void { // note a importância de usar a tipagem correta
  input.value="atualizado"
}
}
