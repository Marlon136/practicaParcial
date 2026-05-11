import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { FinanceController } from './finance.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [FinanceController],
  providers: [FinanceService],
  imports: [AuthModule],
})
export class FinanceModule {}
