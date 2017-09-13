import {User} from "./User";

export class Post {
    id?: number;
    public name: string;
    public preamble: string;
    public body: string;
    public created_at?: string = "";
    public user?: User = new User;
    public available: boolean;
    public created?: string = null;
    public image_url?: string;
    public deleted_at?: string;
    public user_id?: number = null;
    public published?: string;
    public tagged?: any = [];
}
