import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Alerta } from '../../models/alerta';

@Component({
  selector: 'dio-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})


export class AlertaComponent implements OnInit{
  alerta = {
    titulo: "Sucesso",
    descricao: "Seu registro foi cadastrado com sucesso!",
    btnSucesso: "Ok",
    btnCancelar: "Cancelar",
    corBtnSuccess: "accent",
    corBtnCancelar: "warn",
    possuiBtnCancelar: true 
  } as Alerta


  constructor(
    public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    if(this.data){
      this.alerta.titulo = this.data.titulo || this.alerta.titulo;
      this.alerta.descricao = this.data.descricao || this.alerta.descricao;
      this.alerta.btnSucesso = this.data.btnSucesso || this.alerta.btnSucesso;
      this.alerta.btnCancelar = this.data.btnCancelar || this.alerta.btnCancelar;
      this.alerta.corBtnSuccess = this.data.corBtnSuccess || this.alerta.corBtnSuccess;
      this.alerta.corBtnCancelar = this.data.corBtnCancelar || this.alerta.corBtnCancelar;
      this.alerta.possuiBtnCancelar = this.data.possuiBtnCancelar || this.alerta.possuiBtnCancelar;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
