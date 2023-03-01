import { createAction } from '@ngrx/store';
import { CustomAction } from '../../custom.actions';
import { TeamMessageEnum } from '../team-message.enum';

export class TeamLoadUpdateErrorImg implements CustomAction<string> {
  readonly type: string = TeamMessageEnum.LOAD_TEAM_UPDATE_IMG_ERROR;

  constructor(public payload?: string) {}
  createAction(): any {
    return createAction(this.type);
  }
}
