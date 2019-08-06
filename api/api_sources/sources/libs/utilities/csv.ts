//
// CSV Handler class
//
// Copyright © 2019 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Pushan Mitra on 2019-07-04.
/**
 * Imports
 */
import * as assert from 'assert';
import * as csv from 'csvtojson';
import { ObjectLiteral } from 'typeorm';


export class CSV<T extends ObjectLiteral> {
    private _data: T[];
    private _headers: string[] = [];
    public filePath: string;
    constructor(filePath: string) {
        this.filePath = filePath;
    }

    async load(): Promise<T[]> {
        assert(this.filePath, `No File path for csv in ${this.filePath}`);
        // Loading data from file
        this._data = await csv().fromFile(this.filePath) || [];
        // Reading header
        if (this._data.length > 0) {
            const item = this._data[0];
            this._headers = Object.keys(item);
        }
        return this._data;
    }

    public get json(): T[] {
        return this._data;
    }

    public get headers(): string[] {
        return this._headers;
    }
}

// --------------------------------------------------------------------