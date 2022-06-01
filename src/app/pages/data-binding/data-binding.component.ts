import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'José Mario';
  imageUrl = 'https://picsum.photos/300/300'
  imageDesc = 'essa é a imagem';
  buttonText = 'Clique aqui';
  textRed = 'textred';
  bgColor = 'green';
  fontSize = '20px';
  widthImg = 600;
  textInput = '';
  number = 0;
  destroy = false


  constructor() { }

  ngOnInit(): void {
  }

  clicou(value: any) {
    console.log('clicou aqui', value);
    
    
  }
  clicouNoFilho(text: any) {
    console.log(text)
  }

  incrementa(){
    this.number ++
  }

  destroiComponente(){
    this.destroy = true;
  }

}
