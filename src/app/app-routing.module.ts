import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesResolver } from './services/resolvers/clientes.resolver';
import { ResolverComponent } from './users/resolver/resolver.component';

const routes: Routes = [
  { path:'resolver', resolve: 
    { resolver : ClientesResolver },
    component : ResolverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
