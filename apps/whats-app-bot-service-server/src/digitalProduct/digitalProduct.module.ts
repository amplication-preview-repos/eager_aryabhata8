import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DigitalProductModuleBase } from "./base/digitalProduct.module.base";
import { DigitalProductService } from "./digitalProduct.service";
import { DigitalProductController } from "./digitalProduct.controller";
import { DigitalProductResolver } from "./digitalProduct.resolver";

@Module({
  imports: [DigitalProductModuleBase, forwardRef(() => AuthModule)],
  controllers: [DigitalProductController],
  providers: [DigitalProductService, DigitalProductResolver],
  exports: [DigitalProductService],
})
export class DigitalProductModule {}
