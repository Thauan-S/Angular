import { Pipe, PipeTransform } from '@angular/core';
import { UserStatus } from '../enums/user-status';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {
//TEM PIPE PRA LIDAR COM   O UNSUBSCRIBE DO OBSERVABLE TBM, MUITO INTERESSANTE pra não ter que
//Criar isso manualmente no ng ondestroy
  transform(value:string , ...args: unknown[]): string {
    //aqui eu posso usar ifs  e por aí vai
    // if(numero ==1) return "ativo"  
    // Ou ao invéz de criar ifs eu posso criar um objeto 
    // const userStatusDescription:{[key:number]:string}={// posso criar uma interface pra o tipo desse obj
    //   [UserStatus.ativo]:"Ativo",
    //   [UserStatus.inativo]:"inativo"
    // }
    // return userStatusDescription[1] // aqui eu passaria o value  , se fosse number
  return  value.toUpperCase();
  }

}
