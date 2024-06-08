import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DigitalProductService } from "./digitalProduct.service";
import { DigitalProductControllerBase } from "./base/digitalProduct.controller.base";

@swagger.ApiTags("digitalProducts")
@common.Controller("digitalProducts")
export class DigitalProductController extends DigitalProductControllerBase {
  constructor(
    protected readonly service: DigitalProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
