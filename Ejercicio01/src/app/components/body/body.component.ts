import { Component } from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})


export class BodyComponent {

    frase: any = {
        mensaje: 'Esto es una Prueba',
        autor: 'Edilson'
    }

    mostrar:boolean=true;

    personajes : string[]=['Batman', 'Super man', 'Spiderman'];

}