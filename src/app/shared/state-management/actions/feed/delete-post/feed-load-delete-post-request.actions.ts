import { CustomAction } from "../../custom.actions";
import { FeedMessageEnum } from "../feed-message.enum";
import { createAction } from "@ngrx/store";


export class FeedDeletePostRequestAction implements CustomAction<string> {
    readonly type: string = FeedMessageEnum.LOAD_FEED_DELETE_POST_REQUEST;

    constructor(public payload?: string) { }
    createAction(): any {
        return createAction(this.type);
    }
}