class PostsController {
    constructor(API, ToastService) {
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
    }

    $onInit() {

        this.API.all('posts').get('').then((response) => {

            this.posts = response.data.posts;
            console.log(this.posts);

            var CurrentDate = moment();


            var len = this.posts.length;
            for (var i = 0; i < len; i += 1) {

                var created_at = this.posts[i].created_at;
                var now = moment(new Date()); //todays date
                var end = moment(created_at); // another date
                var duration = moment.duration(now.diff(end));
                var days = duration.asDays();
                // console.log("days", days)

                this.posts[i]['durationTime'] = duration;
                console.log(duration);
                // console.log(this.posts[i]);


                // var ms = moment(updated_at, "DD/MM/YYYY HH:mm:ss").diff(moment(CurrentDate, "DD/MM/YYYY HH:mm:ss"));
                // var durationTime = moment.duration(ms);


            }
            // console.log(this.posts[0]);
            // this.ToastService.show('Post added successfully');
        });
    }

    // getAllPosts() {
    //
    //
    // }


}

export const PostsComponent = {
    templateUrl: './views/app/components/posts/posts.component.html',
    controller: PostsController,
    controllerAs: 'vm',
    bindings: {}
};
