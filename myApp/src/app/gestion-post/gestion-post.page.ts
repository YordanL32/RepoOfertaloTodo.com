import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-post',
  templateUrl: './gestion-post.page.html',
  styleUrls: ['./gestion-post.page.scss'],
})
export class GestionPostPage implements OnInit {

  constructor() { 
       

  }

  ngOnInit() {
    
  }
metodoYordan(){
  let publicacion ={
    nombre: 'Computadora',
    precio: '2000',
    categoria: 'PC'
  };
  console.log(publicacion.nombre)
}
}
