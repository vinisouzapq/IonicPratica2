import * as core from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@core.Component({
    selector: 'app-adicionar-posts',
    templateUrl: './adicionar-posts.page.html',
    styleUrls: ['./adicionar-posts.page.scss'],
})
export class AdicionarPostsPage implements core.OnInit {


    constructor() {
    }

    ngOnInit() {
    }

    forms = {
        userId: '',
        id: '',
        title: '',
        body: ''
}

    logForm(form) {
        console.log(form.value);
    }
}
