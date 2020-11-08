import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
	}

	@Get('memo')
  getMemo(): string {
    return JSON.stringify(["메모1", "메모2", "메모3"])
  }
}
