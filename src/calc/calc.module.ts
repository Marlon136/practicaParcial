import { Module } from '@nestjs/common';
import { CalcService } from './calc.service';
import { CalcController } from './calc.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CalcController],
  providers: [CalcService],
  imports: [AuthModule],
})
export class CalcModule {}
