import { Injectable } from '@nestjs/common';
import { missions } from '../data/missions';

@Injectable()
export class MissionsService {
  private missions = missions;

  findAll(status?: 'Completed' | 'Active') {
    if (status) {
      return this.missions.filter((mission) => mission.status === status);
    }
    return this.missions;
  }
  findOne(id: string) {
    const mission = this.missions.find((mission) => mission.id === Number(id));
    return mission;
  }
}
