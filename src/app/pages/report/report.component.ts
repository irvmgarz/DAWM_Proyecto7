import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
    /* LISTA CON LOS ATRIBUTOS DE LA INTERFAZ */
    displayedColumns: string[] = ['id','nombre_usuario','correo_electronico','contrasena'];
    //Atributo con el tipo de dato de la interfaz
    public data : DatosInter[] = [];
    //Inyección de dependencia del servicio
    constructor(private dataProvider: DatosProvedorService) { }
  
    //Ejecución de la petición y suscripción de la respuesta
    ngOnInit() {
      this.dataProvider.getResponse().subscribe((response) => { 
        this.data = (response as DatosInter[]); 
        console.log(this.data);
      })
    }
}
