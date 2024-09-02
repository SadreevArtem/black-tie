import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import * as winston from 'winston';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigFactory } from './config/database-config.factory';
import { TelegrafConfigService } from './config/telegramm.factory';
import { TelegrafModule } from 'nestjs-telegraf';
import { WinstonModule } from 'nest-winston';
import { TelegrammModule } from './telegramm/telegramm.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { MastersModule } from './masters/masters.module';
import { ProgramsModule } from './programs/programs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'uploads'), // Путь к папке с файлами
    //   serveRoot: '/uploads', // Путь в URL
    //   serveStaticOptions: {
    //     index: false, // Отключает автоматический поиск index.html
    //   },
    // }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigFactory,
    }),
    TelegrafModule.forRootAsync({
      useClass: TelegrafConfigService,
    }),
    WinstonModule.forRoot({
      levels: {
        critical_error: 0,
        error: 1,
        special_warning: 2,
        another_log_level: 3,
        info: 4,
      },
      transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
      ],
    }),
    CacheModule.register({ ttl: 5, max: 10, isGlobal: true }),
    TelegrammModule,
    UsersModule,
    AuthModule,
    OrdersModule,
    MastersModule,
    ProgramsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
