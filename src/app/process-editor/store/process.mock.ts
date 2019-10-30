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

import { Process, ServicesParameterMappings, PROCESS } from 'ama-sdk';

const deepFreeze = require('deep-freeze-strict');

export const mappings: ServicesParameterMappings = {
    'taskId': {
        inputs: {
            'input-param': 'terrifying-variable'
        },
        outputs: {
            'output-param': 'beautiful-variable'
        }
    }
};

export const mockProcess: Process = deepFreeze({
    type: PROCESS,
    id: 'id1',
    name: 'Process 1',
    createdAt: new Date(),
    createdByUser: {
        id: 'idd',
        displayName: 'Test'
    },
    modifiedAt: new Date(),
    modifiedByUser: {
        id: 'idd',
        displayName: 'Test'
    },
    description: '',
    version: '',
    extensions: {
        properties: [{name: '', type: '', required: false, value: ''}],
        mappings
    }
});

export const validateError: any = JSON.stringify({
    error: 'Bad Request',
    message: 'Parse Error',
    path: '/modeling-service/v1/models/3fcbcd81-7d83-4fa6-b31d-1db580b116ea/validate',
    status: 400,
    timestamp: '2019-09-18T12:37:30.055+0000'
});
