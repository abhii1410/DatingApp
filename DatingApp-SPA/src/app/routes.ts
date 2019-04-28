import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListsComponent } from './members/memberLists/memberLists.component';
import { ListsComponent } from './Lists/Lists.component';
import { MessagesComponent } from './Messages/Messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver.';

export const appRoutes: Routes = [
{path: '', component: HomeComponent},
{
path: '',
runGuardsAndResolvers: 'always',
canActivate: [AuthGuard],
children: [
    {path: 'members', component: MemberListsComponent,
             resolve: {users: MemberListResolver}},
    {path: 'members/:id', component: MemberDetailComponent,
            resolve: {users: MemberDetailResolver}},
    {path: 'member/edit', component: MemberEditComponent,
    resolve: {users: MemberEditResolver}},
    {path: 'lists', component: ListsComponent},
    {path: 'messages', component: MessagesComponent},
]
},
{path: '**', redirectTo: '', pathMatch: 'full'},
];
