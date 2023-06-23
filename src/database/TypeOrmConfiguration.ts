import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmConfiguration {
  constructor(private config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      database: this.config.get<string>('database.name'),
      host: this.config.get<string>('database.host'),
      port: this.config.get<null>('database.port'),
      username: this.config.get<string>('database.user'),
      password: this.config.get<string>('database.password'),
      synchronize: true,
    };
  }
}
