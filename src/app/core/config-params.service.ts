import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigParams } from '../shared/models/config-params';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  configurarParametros(config: ConfigParams): HttpParams{
    let httParams = new HttpParams();
    if(config.pagina){
      httParams = httParams.set('_page',config.pagina.toString())

    }
    if(config.limite){
      httParams = httParams.set('_limit',config.limite.toString())
    }

    if(config.pesquisa){
      httParams = httParams.set('q',config.pesquisa)
    }
    if(config.campo){
      httParams = httParams.set(config.campo.tipo,config.campo.valor.toString())
    }
    httParams = httParams.set('_sort','id')
    httParams = httParams.set('_order','desc')
    return httParams;
  }
}
