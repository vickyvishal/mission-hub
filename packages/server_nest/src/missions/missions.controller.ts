import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MissionsService } from './missions.service';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionService: MissionsService) {}
  @Get()
  findAll(@Query('status') status?: 'Active' | 'Completed') {
    return this.missionService.findAll();
  }

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Get(':id') //GET /missions/:id
  findOne(@Param('id') id: string) {
    return this.missionService.findOne(id);
  }

  @Post()
  create(@Body() mission: {}) {
    return mission;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() { name, description }: { name: string; description: string },
  ) {
    return this.missionService.update(id, { name, description });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
