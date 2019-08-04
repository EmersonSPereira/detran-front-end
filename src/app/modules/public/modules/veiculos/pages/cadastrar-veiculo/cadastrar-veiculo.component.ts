import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculoService } from '../../services/veiculo.service';


@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.css']
})
export class CadastrarVeiculoComponent implements OnInit {
  formVeiculo: FormGroup;

  sucesso:boolean = false;
  erro:boolean = false;

  constructor(private fb: FormBuilder, private veiculoService: VeiculoService) { }

  ngOnInit() {
    this.criarFormVeiculo();
  }

  criarFormVeiculo() {
    this.formVeiculo = this.fb.group({

      nome: [null, Validators.compose([Validators.required])],
      marca: [null, Validators.compose([Validators.required])],
      cor: [null, Validators.compose([Validators.required])],
      renavan: [null, Validators.compose([Validators.required])],
      ano: [null, Validators.compose([Validators.required])],
      proprietario: this.fb.group({
        id: [null],
        cpfCnpj: [null, Validators.compose([Validators.required])],
        rg: [null, Validators.compose([Validators.required])],
        cnh: [null, Validators.compose([Validators.required])],
        nome: [null, Validators.compose([Validators.required])],
        endereco: this.fb.group({
          rua: [null, Validators.compose([Validators.required])],
          numero: [null, Validators.compose([Validators.required])],
          bairro: [null, Validators.compose([Validators.required])],
          cidade: [null, Validators.compose([Validators.required])],
          estado: [null, Validators.compose([Validators.required])]

        })
      })



    });
  }


  submit() {
    if(this.formVeiculo.valid){
      this.veiculoService.cadastrarVeiculo(this.formValue).subscribe(
        res  => {
          this.sucesso = true
          this.formVeiculo.reset()
        } ,
         err  => {
           this.erro = true
         } );


    }else{
      this.erro = true
    }
  }

  get formValue() {
    return this.formVeiculo.value;
  }
  get nome() {
    return this.formVeiculo.get('nome');
  }
  get marca() {
    return this.formVeiculo.get('marca');
  }
  get cor() {
    return this.formVeiculo.get('cor');
  }
  get renavan() {
    return this.formVeiculo.get('renavan');
  }
  get ano() {
    return this.formVeiculo.get('ano');
  }

  get proprietario(){
    return this.formVeiculo.get('proprietario')
  }

  get cpfProprietario(){
    return this.proprietario.get('cpfCnpj')
  }

  get rg(){
    return this.proprietario.get('rg')
  }
  get cnh(){
    return this.proprietario.get('cnh')
  }

  get nomeProprietario(){
    return this.proprietario.get('nome')
  }

  get endereco(){
    return this.proprietario.get('endereco')
  }

  get rua(){
    return this.endereco.get('rua')
  }

  get bairro(){
    return this.endereco.get('bairro')
  }

  get numero(){
    return this.endereco.get('numero')
  }

  get estado(){
    return this.endereco.get('estado')
  }

  get cidade(){
    return this.endereco.get('cidade')
  }

  fecharAlerta(){
    this.sucesso = false;
    this.erro = false;
  }

}
