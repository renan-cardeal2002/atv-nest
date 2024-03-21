import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CogModule } from './cog/cog.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CogModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
