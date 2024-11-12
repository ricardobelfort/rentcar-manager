import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterMatchMode, MessageService, PrimeNGConfig } from 'primeng/api';
import { definePreset } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';
import { ToastModule } from 'primeng/toast';

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{gray.50}',
      100: '{gray.100}',
      200: '{gray.200}',
      300: '{gray.300}',
      400: '{gray.400}',
      500: '{gray.500}',
      600: '{gray.600}',
      700: '{gray.700}',
      800: '{gray.800}',
      900: '{gray.900}',
      950: '{gray.950}',
    },
  },
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService],
})
export class AppComponent {
  primeNgConfig = inject(PrimeNGConfig);

  constructor() {
    this.primeNgConfig.theme.set({
      preset: Noir,
      options: {
        darkModeSelector: '.dark-mode',
      },
    });
  }

  ngOnInit() {
    this.primeNgConfig.ripple.set(true);

    this.primeNgConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };

    this.primeNgConfig.filterMatchModeOptions = {
      text: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.NOT_CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
      ],
      numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
      ],
      date: [
        FilterMatchMode.DATE_IS,
        FilterMatchMode.DATE_IS_NOT,
        FilterMatchMode.DATE_BEFORE,
        FilterMatchMode.DATE_AFTER,
      ],
    };
  }
}
