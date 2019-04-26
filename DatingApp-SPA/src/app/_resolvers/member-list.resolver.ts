import {Injectable} from '@angular/core';
import {Users} from '../_models/users';
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberListResolver implements Resolve<Users[]> {
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Users[]> {
        return this.userService.getUsers().pipe(
            catchError(error => {
                this.alertify.message('Problem retreving data');
                this.router.navigate(['\home']);
                return of(null);
            })
        );
    }
}
