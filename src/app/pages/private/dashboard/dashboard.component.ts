import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    RouterOutlet,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  items: MenuItem[] | undefined;

  private router = inject(Router);

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/dashboard']);
        },
      },
      {
        label: 'Cadastros',
        icon: 'pi pi-plus',
        items: [
          {
            label: 'Clientes',
            icon: 'pi pi-users',
            command: () => {
              this.router.navigate(['/dashboard/clientes']);
            },
          },
          {
            label: 'Empresas',
            icon: 'pi pi-building',
            command: () => {
              this.router.navigate(['/dashboard/empresas']);
            },
          },
          {
            label: 'Funcionários',
            icon: 'pi pi-users',
            command: () => {
              this.router.navigate(['/dashboard/funcionarios']);
            },
          },
          {
            label: 'Locação',
            icon: 'pi pi-tag',
            command: () => {
              this.router.navigate(['/dashboard/locacao']);
            },
          },
          {
            label: 'Manutenção',
            icon: 'pi pi-wrench',
            command: () => {
              this.router.navigate(['/dashboard/manutencao']);
            },
          },
          {
            label: 'Pagamentos',
            icon: 'pi pi-dollar',
            command: () => {
              this.router.navigate(['/dashboard/pagamentos']);
            },
          },
          {
            label: 'Veículos',
            icon: 'pi pi-car',
            command: () => {
              this.router.navigate(['/dashboard/veiculos']);
            },
          },
        ],
      },
    ];
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigate(['login']);
  }
}
