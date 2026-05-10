import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BankModule } from './bank/bank.module';
import { FinanceModule } from './finance/finance.module';
import { CalcModule } from './calc/calc.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, CalcModule, FinanceModule, BankModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
