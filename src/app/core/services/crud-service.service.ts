import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService<T> {
  private http = inject(HttpClient);
  /**
   * Obtem uma lista de itens
   * @param endpoint - URL da API
   */
  getAll(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(endpoint);
  }

  /**
   * Obtem um item por ID
   * @param endpoint - URL da API
   * @param id - ID do item
   */
  getById(endpoint: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${endpoint}/${id}`);
  }

  /**
   * Cria um novo item
   * @param endpoint - URL da API
   * @param item - Objeto a ser criado
   */
  create(endpoint: string, item: T): Observable<T> {
    return this.http.post<T>(endpoint, item);
  }

  /**
   * Atualiza um item existente
   * @param endpoint - URL da API
   * @param id - ID do item a ser atualizado
   * @param item - Objeto atualizado
   */
  update(endpoint: string, id: number | string, item: T): Observable<T> {
    return this.http.put<T>(`${endpoint}/${id}`, item);
  }

  /**
   * Exclui um item por ID
   * @param endpoint - URL da API
   * @param id - ID do item a ser excluído
   */
  delete(endpoint: string, id: number | string): Observable<void> {
    return this.http.delete<void>(`${endpoint}/${id}`);
  }
}
