import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DigitalProductResolverBase } from "./base/digitalProduct.resolver.base";
import { DigitalProduct } from "./base/DigitalProduct";
import { DigitalProductService } from "./digitalProduct.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DigitalProduct)
export class DigitalProductResolver extends DigitalProductResolverBase {
  constructor(
    protected readonly service: DigitalProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
