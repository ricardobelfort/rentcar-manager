import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { EmpresasListComponent } from './empresas/empresas-list/empresas-list.component';
import { FuncionariosListComponent } from './funcionarios/funcionarios-list/funcionarios-list.component';
import { LocacaoListComponent } from './locacao/locacao-list/locacao-list.component';
import { ManutencaoListComponent } from './manutencao/manutencao-list/manutencao-list.component';
import { PagamentosListComponent } from './pagamentos/pagamentos-list/pagamentos-list.component';
import { VeiculosListComponent } from './veiculos/veiculos-list/veiculos-list.component';

export const PRIVATE_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'clientes', component: ClientesListComponent },
      { path: 'empresas', component: EmpresasListComponent },
      { path: 'funcionarios', component: FuncionariosListComponent },
      { path: 'locacao', component: LocacaoListComponent },
      { path: 'manutencao', component: ManutencaoListComponent },
      { path: 'pagamentos', component: PagamentosListComponent },
      { path: 'veiculos', component: VeiculosListComponent },
    ],
  },
];
