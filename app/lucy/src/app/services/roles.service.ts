import { Injectable } from '@angular/core';
import { ApiService, APIRequestMethod } from './api.service';
import { AppConstants } from '../constants';
import { ObjectValidatorService } from './object-validator.service';
import { Role, UserAccessType } from '../models/Role';

@Injectable({
  providedIn: 'root'
})

export class RolesService {

  private roles: Role[] | null = null;

  constructor(private api: ApiService, private objectValidator: ObjectValidatorService) { }

  async getRoles(): Promise<Role[] | null> {
    if (this.roles !== null) {
      return this.roles
    }
    const response = await this.api.request(APIRequestMethod.GET, AppConstants.API_refrenceData.roles, null);
    if (response.success) {
      if ((Array.isArray(response.response) && this.objectValidator.isRoleObject(response.response[0]))) {
        this.roles = response.response;
        return response.response
      } else {
        return null
      }
    } else {
      return null;
    }
  }

  async getDataEntryRole(): Promise<Role | null> {
    const allRoles = await this.getRoles();
    return allRoles !== null ? allRoles.find(i => i.code === "DAE") : null;
  }

  public roleToAccessType(role: Role): UserAccessType {
    switch (role.code) {
      case "ADM":
        return UserAccessType.Admin;
      case "DAV":
        return UserAccessType.DataViewer;
      case "DAE":
        return UserAccessType.DataEditor;
      case "SUP":
        return UserAccessType.SuperUser;
    }
  }

  private getDummyRoles(): Role[] {
    var roles: Role[] = [
      {
        createdAt: "2019-06-11T12:10:12.495Z",
        updateAt: "2019-06-11T12:10:12.495Z",
        role_code_id: 1,
        code: "ADM",
        role: "Admin",
        description: "Overall SEISM Access",
    },
    {
        createdAt: "2019-06-11T12:10:12.495Z",
        updateAt: "2019-06-11T12:10:12.495Z",
        role_code_id: 2,
        code: "DAV",
        role: "Data Viewer",
        description: "General data view access",
    },
    {
        createdAt: "2019-06-11T12:10:12.495Z",
        updateAt: "2019-06-11T12:10:12.495Z",
        role_code_id: 3,
        code: "DAE",
        role: "Data Editor",
        description: "General access",
    },
    {
        createdAt: "2019-06-11T12:10:12.495Z",
        updateAt: "2019-06-11T12:10:12.495Z",
        role_code_id: 4,
        code: "SUP",
        role: "Super User",
        description: "Lead admin for each of the taxonomic components",
    }
    ]
    return roles;
  } 
}