import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Veiculo } from '@app/core/interfaces/veiculo';
import { CrudService } from '@app/core/services/crud-service.service';
import { environment } from '@env/environment';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-veiculos-list',
  standalone: true,
  imports: [CommonModule, CardModule, TableModule],
  templateUrl: './veiculos-list.component.html',
  styleUrl: './veiculos-list.component.scss'
})
export class VeiculosListComponent {
  private apiUrl = environment.apiUrl;
  private http = inject(CrudService<Veiculo>)
  veiculos$ = this.http.getAll(`${this.apiUrl}/veiculos`);
}
