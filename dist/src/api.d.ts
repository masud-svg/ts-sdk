/**
 * BaSyx Registry HTTP REST-API
 * The full OpenAPI 3.0.1 specification of the BaSyx Registry HTTP REST-API
 *
 * OpenAPI spec version: v1
 * Contact: constantin.ziesche@bosch.com
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */
/// <reference path="../../src/custom.d.ts" />
import { Configuration } from "./configuration";
export declare const BASE_PATH: string;
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}
/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration?: Configuration;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: string;
    constructor(field: string, msg?: string);
}
