import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DigitalProductServiceBase } from "./base/digitalProduct.service.base";

@Injectable()
export class DigitalProductService extends DigitalProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
