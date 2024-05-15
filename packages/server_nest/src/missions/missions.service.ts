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
    const mission = this.missions.find((mission) => mission.id === +id);
    return mission;
  }
  update(
    id: string,
    { name, description }: { name: string; description: string },
  ) {
    const missionToUpdate = this.missions.map((e) => e.id).indexOf(+id);
    this.missions[missionToUpdate] = {
      ...this.missions[missionToUpdate],
      name,
      description,
    };

    return this.missions[missionToUpdate];
  }
}
