import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Simulacro {
  nombre: string;
  lugar: string;
  dia: string;
  horaInicio: string;
  horaFinal: string;
  semestre: string[];
  guardado: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  simulacros: Simulacro[] = [];
  opcionesSemestre: string[] = ['Semestre 1', 'Semestre 2', 'Semestre 3'];

  agregarSimulacro(): void {
    const nuevoSimulacro: Simulacro = {
      nombre: '',
      lugar: '',
      dia: '', 
      horaInicio: '',
      horaFinal: '',
      semestre: [],
      guardado: false
    };

    this.simulacros.push(nuevoSimulacro);
  }

  guardarSimulacro(simulacro: Simulacro): void {
    if (!simulacro.guardado) {

        simulacro.guardado = true;
        
        for (let i = 0; i < simulacro.semestre.length; i++) {
            simulacro.semestre[i] = simulacro.semestre[i].toLowerCase();
        }

        // Mostrar alerta de confirmación de guardado
        alert('Simulacro guardado correctamente.');
        console.log('Simulacro guardado:', simulacro);
    }
  }

  editarSimulacro(simulacro: Simulacro): void {
    if (simulacro.guardado) {

        simulacro.guardado = false;
        alert('Puedes editar el simulacro ahora.');
    }
  }

  eliminarSimulacro(index: number): void {
    this.simulacros.splice(index, 1);
  }

}
