import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { RequestService } from './services/request/request.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly requestService: RequestService,
  ) {}

  @Get('status')
  getStatus(): string {
    return this.appService.getStatus();
  }

  @Get('mensagem/:msg')
  async getMensagem(@Param() param?): Promise<string> {
    const rota = `https://crudcrud.com/api/5b6e54a8b81844629d2ea6eca6ad9c14/mensagem/`;
    const data = { mensagem: param.msg };
    var param1;

    try {
      const id = await this.requestService.post(rota, data).toPromise();
      param1 = id.data._id;
    } catch (error) {}

    try {
      var mensagem = await this.requestService
        .get(`${rota}${param1}`)
        .toPromise();
    } catch (error) {
      console.log('Error get');
    }

    return `Mensagem: ${mensagem.data.mensagem}`;
  }
}
