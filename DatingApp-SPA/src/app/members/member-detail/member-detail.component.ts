import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/_models/users';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
user: Users;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
  constructor(private userService: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['users'];
    });

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsMargin: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryOptions = this.getImages();
  }
getImages() {
  console.log(this.user.photo);
  const imageUrls = [] ;
  if (this.user != null) {
  for (let i = 0; i < this.user.photo.length; i++) {
imageUrls.push({
  small: this.user.photo[i].url,
  medium: this.user.photo[i].url,
  big: this.user.photo[i].url,
  description: this.user.photo[i].description

});
  }}

  return imageUrls;
}


}
