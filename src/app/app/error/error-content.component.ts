 /*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AmaState } from 'ama-sdk';
import { LogoutAction } from '../../store/actions/app.actions';

@Component({
    selector: 'ama-error-content',
    templateUrl: './error-content.component.html',
    styleUrls: ['./error-content.component.scss']
})
export class ErrorContentComponent {
    errorCode = '403';
    constructor(private store: Store<AmaState>) {}

    onUserChange() {
        this.store.dispatch(new LogoutAction());
    }
}