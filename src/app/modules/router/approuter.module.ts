import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "../../components/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "../../components/register/register.component";
import {WelcomeComponent} from "../../components/welcome/welcome.component";
import {HomeComponent} from "../../components/home/home.component";
import {AuthGuard} from "../../guards/auth.guard";
import {UserComponent} from "../../components/user/user.component";
import {PostsComponent} from "../../components/posts/posts.component";
import {PostComponent} from "../../components/post/post.component";
import {PersonalPostsComponent} from "../../components/personal-posts/personal-posts.component";

const appRoutes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "", component: WelcomeComponent},
    {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
    {path: "posts", component: PostsComponent, canActivate: []},
    {path: "post/:id", component: PostComponent, canActivate: []},
    {path: "posts/personal", component: PersonalPostsComponent, canActivate: [AuthGuard]},
    {path: "user", component: UserComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    {path: "**", redirectTo: ""}
];

let base = document.querySelector("#base");

let useHash = false;
if (base) {
    useHash = true;
}

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: useHash})
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRouterModule {
}
