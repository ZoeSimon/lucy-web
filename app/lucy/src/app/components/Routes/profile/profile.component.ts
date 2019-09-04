import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { StringConstants } from 'src/app/constants/string-constants';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/constants';
import { UserAccessType } from 'src/app/models/Role';
import { AlertService } from 'src/app/services/alert.service';
import { RouterService } from 'src/app/services/router.service';
import { LoadingService } from 'src/app/services/loading.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  private userAccessType: UserAccessType;

  public get requestDataEntryAccessMessage(): string {
    return StringConstants.databaseAccess_requestDataEntryAccess_Message;
  }

  public get requestDataEntryAccessTitle(): string {
    return StringConstants.databaseAccess_requestDataEntryAccess_Title;
  }

  public get showRequestDataEntryAccessMessage(): boolean {
    if (!this.userAccessType) {
      return false;
    }
    if ( this.roleService.canCreate(this.userAccessType)) {
      return false;
    } else {
      return this.userService.showRequestDataEntryAccessMessage();
    }
  }

  public userRoleAndOrganization = ``;
  public accessTypeMessage = ``;
  public userFullName = ``;
  public userInitials = ``;

  constructor(private userService: UserService, private router: RouterService, private alertService: AlertService, private loadingService: LoadingService, private roleService: RolesService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadingService.add();
    this.userService.getFullName().then((value) => {
      this.userFullName = value;
      this.loadingService.remove();
    });

    this.loadingService.add();
    this.userService.getInitials().then((value) => {
      this.userInitials = value;
      this.loadingService.remove();
    });

    this.loadingService.add();
    this.userService.getAccess().then((value) => {
      this.userAccessType = value;
      switch (value) {
        case UserAccessType.DataEditor:
          this.accessTypeMessage = StringConstants.databaseAccess_DataEntry_Badge;
          break;
        case UserAccessType.DataViewer:
          this.accessTypeMessage = StringConstants.databaseAccess_View_Badge;
          break;
        case UserAccessType.Admin:
          this.accessTypeMessage = StringConstants.databaseAccess_Admin_Badge;
          break;
      }
      this.loadingService.remove();
    });

    this.loadingService.add();
    this.userService.getOranizarionAndRole().then((value) => {
      this.userRoleAndOrganization = value;
      this.loadingService.remove();
    });

    // Redirect to user info page if basic information isnt filled
    this.loadingService.add();
    this.userService.basicInformationExists().then((exists) => {
      this.loadingService.remove();
      if (!exists) {
        this.navigateToUserInfo();
      }
    });
  }

  /**
   * Uses UserService -> setShowRequestDataEntryAccessMessage()
   * to create a cookie to save the user preference.
   */
  public hideRequestDataEntryAccessMessage() {
    this.userService.setShowRequestDataEntryAccessMessage(false);
  }

  // TODO:
  public requestDataEntryAccess() {
    const success = this.userService.submitDataEntryRequest(`Let me in please.`);
    if (success) {
      this.alertService.show( `Success`, `Your Data Entry Access request has been sent.`, null);
      console.log(`Request sent`);
    } else {
      this.alertService.show(`Failed`, `Could not create request.`, null);
      console.log(`Request failed`);
    }
  }

  public navigateToUserInfo() {
    this.router.navigateTo(AppRoutes.UserInfo);
  }
}