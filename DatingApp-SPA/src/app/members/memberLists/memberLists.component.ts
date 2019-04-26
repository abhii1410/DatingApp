import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Users } from '../../_models/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-memberLists',
  templateUrl: './memberLists.component.html',
  styleUrls: ['./memberLists.component.css']
})
export class MemberListsComponent implements OnInit {

  users: Users[];
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  // loadUsers() {
  //   this.userService.getUsers().subscribe((users: Users[]) => {
  //     this.users = users;
  //   }, error => {
  //     this.alertify.error(error);
  //   }
  //   );
  // }

}
