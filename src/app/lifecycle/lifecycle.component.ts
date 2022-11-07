import { AfterContentChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
 selector: 'app-lifecycle',
 templateUrl: './lifecycle.component.html',
 styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked {

 @Input()
 name: any;
  constructor() {
   console.log("Im the constructor");
 }
 ngOnInit(): void {
   console.log("Im from ngonInit");
 }

 ngOnChanges(changes: SimpleChanges): void {
   console.log("Im from ngonChanges");
 }

 ngDoCheck(): void {
   console.log("DOCheck");
 }

 ngAfterContentChecked(): void {
   console.log("ngAfterContentChecked");
 }




}
