import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy 
{
  @Input() number = 10;

  constructor() { 
    console.log('chamou o construtor')
  }
  ngOnChanges(): void {
    console.log('chamou o on changes')
  }

  ngOnInit(): void {
    console.log('chamou o o on init')
  }
  ngDoCheck(): void {
    
    console.log('chamou o Do Check')
  }

  ngAfterContentInit(): void {
    
  
    console.log('chamou o Content Init')
  }

  ngAfterContentChecked(): void {
    console.log('chamou o Content Checked')
  }

  ngAfterViewInit(): void {
    console.log('chamou o View Init')
  }

  ngAfterViewChecked(): void {
    console.log('chamou o View Checked')
  }

  ngOnDestroy(): void {
    console.log('chamou o On Destroy')
  }
   
}
