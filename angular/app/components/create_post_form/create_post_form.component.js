class CreatePostFormController {
    constructor(API, ToastService) {


        'ngInject';
        this.API = API;
        this.ToastService = ToastService;
        //
    }


    submit() {
        if (this.name && this.name) {
            var data = {
                name: this.name,
                topic: this.topic,
            };

            this.API.all('posts').post(data).then((response) => {
                debugger
                this.ToastService.show('Post added successfully');

                this.name = '';
                this.topic = '';
            });
        }
        else {

            this.ToastService.show('Name & Topic are required');
        }
    }

    $onInit() {
    }
}

export const CreatePostFormComponent = {
    templateUrl: './views/app/components/create_post_form/create_post_form.component.html',
    controller: CreatePostFormController,
    controllerAs: 'vm',
    bindings: {}
};
