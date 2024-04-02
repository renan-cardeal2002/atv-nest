import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestService } from './services/request/request.service';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './common/auth/logger.middleware';
import { CarsModule } from './cars/cars.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/store-project'),
    AuthModule,
    UsersModule,
    HttpModule,
    CarsModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, RequestService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.POST });
  }
}
