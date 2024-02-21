import * as url from "url";
import * as isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";
import { BaseAPI, RequiredError, FetchArgs, FetchAPI, BASE_PATH } from "./api";
/**
 * 
 * @export
 * @interface AdministrativeInformation
 */
export interface AdministrativeInformation {
    /**
     * 
     * @type {string}
     * @memberof AdministrativeInformation
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof AdministrativeInformation
     */
    revision?: string;
}
/**
 * 
 * @export
 * @interface Asset
 */
export interface Asset extends Identifiable {
    /**
     * 
     * @type {Array<EmbeddedDataSpecification>}
     * @memberof Asset
     */
    embeddedDataSpecifications?: Array<EmbeddedDataSpecification>;
    /**
     * 
     * @type {AssetKind}
     * @memberof Asset
     */
    kind: AssetKind;
    /**
     * 
     * @type {Reference}
     * @memberof Asset
     */
    assetIdentificationModel?: Reference;
    /**
     * 
     * @type {Reference}
     * @memberof Asset
     */
    billOfMaterial?: Reference;
}
/**
 * 
 * @export
 * @interface AssetAdministrationShellDescriptor
 */
export interface AssetAdministrationShellDescriptor {
    /**
     * 
     * @type {string}
     * @memberof AssetAdministrationShellDescriptor
     */
    idShort?: string;
    /**
     * 
     * @type {Identifier}
     * @memberof AssetAdministrationShellDescriptor
     */
    identification?: Identifier;
    /**
     * 
     * @type {AdministrativeInformation}
     * @memberof AssetAdministrationShellDescriptor
     */
    administration?: AdministrativeInformation;
    /**
     * 
     * @type {Array<LangString>}
     * @memberof AssetAdministrationShellDescriptor
     */
    description?: Array<LangString>;
    /**
     * 
     * @type {Asset}
     * @memberof AssetAdministrationShellDescriptor
     */
    asset?: Asset;
    /**
     * 
     * @type {Array<Endpoint>}
     * @memberof AssetAdministrationShellDescriptor
     */
    endpoints?: Array<Endpoint>;
    /**
     * 
     * @type {Array<SubmodelDescriptor>}
     * @memberof AssetAdministrationShellDescriptor
     */
    submodels?: Array<SubmodelDescriptor>;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum AssetKind {
    Type = <any>'Type',
    Instance = <any>'Instance'
}
/**
 * 
 * @export
 * @interface DataSpecificationContent
 */
export interface DataSpecificationContent {
}
/**
 * 
 * @export
 * @interface DataSpecificationIEC61360Content
 */
export interface DataSpecificationIEC61360Content extends ValueObject {
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationIEC61360Content
     */
    dataType?: string;
    /**
     * 
     * @type {Array<LangString>}
     * @memberof DataSpecificationIEC61360Content
     */
    definition?: Array<LangString>;
    /**
     * 
     * @type {Array<LangString>}
     * @memberof DataSpecificationIEC61360Content
     */
    preferredName: Array<LangString>;
    /**
     * 
     * @type {Array<LangString>}
     * @memberof DataSpecificationIEC61360Content
     */
    shortName?: Array<LangString>;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationIEC61360Content
     */
    sourceOfDefinition?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationIEC61360Content
     */
    symbol?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationIEC61360Content
     */
    unit?: string;
    /**
     * 
     * @type {Reference}
     * @memberof DataSpecificationIEC61360Content
     */
    unitId?: Reference;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationIEC61360Content
     */
    valueFormat?: string;
    /**
     * 
     * @type {ValueList}
     * @memberof DataSpecificationIEC61360Content
     */
    valueList?: ValueList;
    /**
     * 
     * @type {Array<LevelType>}
     * @memberof DataSpecificationIEC61360Content
     */
    levelType?: Array<LevelType>;
}

/**
 * @export
 * @namespace DataSpecificationIEC61360Content
 */
export namespace DataSpecificationIEC61360Content {
}
/**
 * 
 * @export
 * @interface DataSpecificationPhysicalUnitContent
 */
export interface DataSpecificationPhysicalUnitContent {
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    unitName: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    unitSymbol: string;
    /**
     * 
     * @type {Array<LangString>}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    definition: Array<LangString>;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    siNotation?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    siName?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    dinNotation?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    eceName?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    eceCode?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    nistName?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    sourceOfDefinition?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    conversionFactor?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    registrationAuthorityId?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSpecificationPhysicalUnitContent
     */
    supplier?: string;
}
/**
 * 
 * @export
 * @interface EmbeddedDataSpecification
 */
export interface EmbeddedDataSpecification {
    /**
     * 
     * @type {Reference}
     * @memberof EmbeddedDataSpecification
     */
    dataSpecification: Reference;
    /**
     * 
     * @type {DataSpecificationContent}
     * @memberof EmbeddedDataSpecification
     */
    dataSpecificationContent: DataSpecificationContent;
}
/**
 * 
 * @export
 * @interface Endpoint
 */
export interface Endpoint {
    /**
     * 
     * @type {string}
     * @memberof Endpoint
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof Endpoint
     */
    type?: string;
    /**
     * 
     * @type {any}
     * @memberof Endpoint
     */
    parameters?: any;
}
/**
 * 
 * @export
 * @interface HasDataSpecification
 */
export interface HasDataSpecification {
    /**
     * 
     * @type {Array<EmbeddedDataSpecification>}
     * @memberof HasDataSpecification
     */
    embeddedDataSpecifications?: Array<EmbeddedDataSpecification>;
}
/**
 * 
 * @export
 * @interface Identifiable
 */
export interface Identifiable extends Referable {
    /**
     * 
     * @type {Identifier}
     * @memberof Identifiable
     */
    identification: Identifier;
    /**
     * 
     * @type {AdministrativeInformation}
     * @memberof Identifiable
     */
    administration?: AdministrativeInformation;
}
/**
 * 
 * @export
 * @interface Identifier
 */
export interface Identifier {
    /**
     * 
     * @type {string}
     * @memberof Identifier
     */
    id: string;
    /**
     * 
     * @type {KeyType}
     * @memberof Identifier
     */
    idType: KeyType;
}
/**
 * 
 * @export
 * @interface Key
 */
export interface Key {
    /**
     * 
     * @type {KeyElements}
     * @memberof Key
     */
    type: KeyElements;
    /**
     * 
     * @type {KeyType}
     * @memberof Key
     */
    idType: KeyType;
    /**
     * 
     * @type {string}
     * @memberof Key
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof Key
     */
    local: boolean;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum KeyElements {
    Asset = <any>'Asset',
    AssetAdministrationShell = <any>'AssetAdministrationShell',
    ConceptDescription = <any>'ConceptDescription',
    Submodel = <any>'Submodel',
    AccessPermissionRule = <any>'AccessPermissionRule',
    AnnotatedRelationshipElement = <any>'AnnotatedRelationshipElement',
    BasicEvent = <any>'BasicEvent',
    Blob = <any>'Blob',
    Capability = <any>'Capability',
    ConceptDictionary = <any>'ConceptDictionary',
    DataElement = <any>'DataElement',
    File = <any>'File',
    Entity = <any>'Entity',
    Event = <any>'Event',
    MultiLanguageProperty = <any>'MultiLanguageProperty',
    Operation = <any>'Operation',
    Property = <any>'Property',
    Range = <any>'Range',
    ReferenceElement = <any>'ReferenceElement',
    RelationshipElement = <any>'RelationshipElement',
    SubmodelElement = <any>'SubmodelElement',
    SubmodelElementCollection = <any>'SubmodelElementCollection',
    View = <any>'View',
    GlobalReference = <any>'GlobalReference',
    FragmentReference = <any>'FragmentReference'
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum KeyType {
    Custom = <any>'Custom',
    IRDI = <any>'IRDI',
    IRI = <any>'IRI',
    IdShort = <any>'IdShort',
    FragmentId = <any>'FragmentId'
}
/**
 * 
 * @export
 * @interface LangString
 */
export interface LangString {
    /**
     * 
     * @type {string}
     * @memberof LangString
     */
    language: string;
    /**
     * 
     * @type {string}
     * @memberof LangString
     */
    text: string;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum LevelType {
    Min = <any>'Min',
    Max = <any>'Max',
    Nom = <any>'Nom',
    Typ = <any>'Typ'
}
/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    messageType?: Message.MessageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    text?: string;
}

/**
 * @export
 * @namespace Message
 */
export namespace Message {
    /**
     * @export
     * @enum {string}
     */
    export enum MessageTypeEnum {
        Unspecified = <any>'Unspecified',
        Debug = <any>'Debug',
        Information = <any>'Information',
        Warning = <any>'Warning',
        Error = <any>'Error',
        Fatal = <any>'Fatal',
        Exception = <any>'Exception'
    }
}
/**
 * 
 * @export
 * @interface ModelType
 */
export interface ModelType {
    /**
     * 
     * @type {ModelTypes}
     * @memberof ModelType
     */
    name: ModelTypes;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum ModelTypes {
    Asset = <any>'Asset',
    AssetAdministrationShell = <any>'AssetAdministrationShell',
    ConceptDescription = <any>'ConceptDescription',
    Submodel = <any>'Submodel',
    AccessPermissionRule = <any>'AccessPermissionRule',
    AnnotatedRelationshipElement = <any>'AnnotatedRelationshipElement',
    BasicEvent = <any>'BasicEvent',
    Blob = <any>'Blob',
    Capability = <any>'Capability',
    ConceptDictionary = <any>'ConceptDictionary',
    DataElement = <any>'DataElement',
    File = <any>'File',
    Entity = <any>'Entity',
    Event = <any>'Event',
    MultiLanguageProperty = <any>'MultiLanguageProperty',
    Operation = <any>'Operation',
    Property = <any>'Property',
    Range = <any>'Range',
    ReferenceElement = <any>'ReferenceElement',
    RelationshipElement = <any>'RelationshipElement',
    SubmodelElement = <any>'SubmodelElement',
    SubmodelElementCollection = <any>'SubmodelElementCollection',
    View = <any>'View',
    GlobalReference = <any>'GlobalReference',
    FragmentReference = <any>'FragmentReference',
    Constraint = <any>'Constraint',
    Formula = <any>'Formula',
    Qualifier = <any>'Qualifier'
}
/**
 * 
 * @export
 * @interface Referable
 */
export interface Referable {
    /**
     * 
     * @type {string}
     * @memberof Referable
     */
    idShort: string;
    /**
     * 
     * @type {string}
     * @memberof Referable
     */
    category?: string;
    /**
     * 
     * @type {Array<LangString>}
     * @memberof Referable
     */
    description?: Array<LangString>;
    /**
     * 
     * @type {Reference}
     * @memberof Referable
     */
    parent?: Reference;
    /**
     * 
     * @type {ModelType}
     * @memberof Referable
     */
    modelType: ModelType;
}
/**
 * 
 * @export
 * @interface Reference
 */
export interface Reference {
    /**
     * 
     * @type {Array<Key>}
     * @memberof Reference
     */
    keys: Array<Key>;
}
/**
 * 
 * @export
 * @interface Result
 */
export interface Result {
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    entityType?: string;
    /**
     * 
     * @type {any}
     * @memberof Result
     */
    entity?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    success?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    isException?: boolean;
    /**
     * 
     * @type {Array<Message>}
     * @memberof Result
     */
    messages?: Array<Message>;
}
/**
 * 
 * @export
 * @interface SubmodelDescriptor
 */
export interface SubmodelDescriptor {
    /**
     * 
     * @type {string}
     * @memberof SubmodelDescriptor
     */
    idShort?: string;
    /**
     * 
     * @type {Identifier}
     * @memberof SubmodelDescriptor
     */
    identification?: Identifier;
    /**
     * 
     * @type {AdministrativeInformation}
     * @memberof SubmodelDescriptor
     */
    administration?: AdministrativeInformation;
    /**
     * 
     * @type {Array<LangString>}
     * @memberof SubmodelDescriptor
     */
    description?: Array<LangString>;
    /**
     * 
     * @type {Reference}
     * @memberof SubmodelDescriptor
     */
    semanticId?: Reference;
    /**
     * 
     * @type {Array<Endpoint>}
     * @memberof SubmodelDescriptor
     */
    endpoints?: Array<Endpoint>;
}
/**
 * 
 * @export
 * @interface ValueList
 */
export interface ValueList {
    /**
     * 
     * @type {Array<ValueReferencePairType>}
     * @memberof ValueList
     */
    valueReferencePairTypes: Array<ValueReferencePairType>;
}
/**
 * 
 * @export
 * @interface ValueObject
 */
export interface ValueObject {
    /**
     * 
     * @type {string}
     * @memberof ValueObject
     */
    value?: string;
    /**
     * 
     * @type {Reference}
     * @memberof ValueObject
     */
    valueId?: Reference;
    /**
     * 
     * @type {string}
     * @memberof ValueObject
     */
    valueType?: ValueObject.ValueTypeEnum;
}

/**
 * @export
 * @namespace ValueObject
 */
export namespace ValueObject {
    /**
     * @export
     * @enum {string}
     */
    export enum ValueTypeEnum {
        AnyUri = <any>'anyUri',
        Base64Binary = <any>'base64Binary',
        Boolean = <any>'boolean',
        Date = <any>'date',
        DateTime = <any>'dateTime',
        DateTimeStamp = <any>'dateTimeStamp',
        Decimal = <any>'decimal',
        Integer = <any>'integer',
        Long = <any>'long',
        Int = <any>'int',
        Short = <any>'short',
        Byte = <any>'byte',
        NonNegativeInteger = <any>'nonNegativeInteger',
        PositiveInteger = <any>'positiveInteger',
        UnsignedLong = <any>'unsignedLong',
        UnsignedInt = <any>'unsignedInt',
        UnsignedShort = <any>'unsignedShort',
        UnsignedByte = <any>'unsignedByte',
        NonPositiveInteger = <any>'nonPositiveInteger',
        NegativeInteger = <any>'negativeInteger',
        Double = <any>'double',
        Duration = <any>'duration',
        DayTimeDuration = <any>'dayTimeDuration',
        YearMonthDuration = <any>'yearMonthDuration',
        Float = <any>'float',
        GDay = <any>'gDay',
        GMonth = <any>'gMonth',
        GMonthDay = <any>'gMonthDay',
        GYear = <any>'gYear',
        GYearMonth = <any>'gYearMonth',
        HexBinary = <any>'hexBinary',
        NOTATION = <any>'NOTATION',
        QName = <any>'QName',
        String = <any>'string',
        NormalizedString = <any>'normalizedString',
        Token = <any>'token',
        Language = <any>'language',
        Name = <any>'Name',
        NCName = <any>'NCName',
        ENTITY = <any>'ENTITY',
        ID = <any>'ID',
        IDREF = <any>'IDREF',
        NMTOKEN = <any>'NMTOKEN',
        Time = <any>'time'
    }
}
/**
 * 
 * @export
 * @interface ValueReferencePairType
 */
export interface ValueReferencePairType extends ValueObject {
}

/**
 * @export
 * @namespace ValueReferencePairType
 */
export namespace ValueReferencePairType {
}
/**
 * AssetAdministrationShellRegistryApi - fetch parameter creator
 * @export
 */
export const AssetAdministrationShellRegistryApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Unregisters the Submodel from a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {string} submodelId The Submodel&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options: any = {}): FetchArgs {
            // verify required parameter 'aasId' is not null or undefined
            if (aasId === null || aasId === undefined) {
                throw new RequiredError('aasId', 'Required parameter aasId was null or undefined when calling deleteSubmodelDescriptorFromAssetAdministrationShell.');
            }
            // verify required parameter 'submodelId' is not null or undefined
            if (submodelId === null || submodelId === undefined) {
                throw new RequiredError('submodelId', 'Required parameter submodelId was null or undefined when calling deleteSubmodelDescriptorFromAssetAdministrationShell.');
            }
            const localVarPath = `/api/v1/registry/{aasId}/submodels/{submodelId}`
                .replace(`{${"aasId"}}`, encodeURIComponent(String(aasId)))
                .replace(`{${"submodelId"}}`, encodeURIComponent(String(submodelId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves all registered Asset Administration Shells within system (e.g. Station, Line, Plant, Area, etc.) defined by the Registry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllAssetAdministrationShellDescriptors(options: any = {}): FetchArgs {
            const localVarPath = `/api/v1/registry`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves all Submodel registrations from a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId: string, options: any = {}): FetchArgs {
            // verify required parameter 'aasId' is not null or undefined
            if (aasId === null || aasId === undefined) {
                throw new RequiredError('aasId', 'Required parameter aasId was null or undefined when calling getAllSubmodelDescriptorsFromAssetAdministrationShell.');
            }
            const localVarPath = `/api/v1/registry/{aasId}/submodels`
                .replace(`{${"aasId"}}`, encodeURIComponent(String(aasId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves a specific Asset Administration Shell registration
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssetAdministrationShellDescriptor(aasId: string, options: any = {}): FetchArgs {
            // verify required parameter 'aasId' is not null or undefined
            if (aasId === null || aasId === undefined) {
                throw new RequiredError('aasId', 'Required parameter aasId was null or undefined when calling getAssetAdministrationShellDescriptor.');
            }
            const localVarPath = `/api/v1/registry/{aasId}`
                .replace(`{${"aasId"}}`, encodeURIComponent(String(aasId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves the Submodel registration from a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {string} submodelId The Submodel&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options: any = {}): FetchArgs {
            // verify required parameter 'aasId' is not null or undefined
            if (aasId === null || aasId === undefined) {
                throw new RequiredError('aasId', 'Required parameter aasId was null or undefined when calling getSubmodelDescriptorFromAssetAdministrationShell.');
            }
            // verify required parameter 'submodelId' is not null or undefined
            if (submodelId === null || submodelId === undefined) {
                throw new RequiredError('submodelId', 'Required parameter submodelId was null or undefined when calling getSubmodelDescriptorFromAssetAdministrationShell.');
            }
            const localVarPath = `/api/v1/registry/{aasId}/submodels/{submodelId}`
                .replace(`{${"aasId"}}`, encodeURIComponent(String(aasId)))
                .replace(`{${"submodelId"}}`, encodeURIComponent(String(submodelId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates a new or updates an existing Asset Administration Shell registration at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {AssetAdministrationShellDescriptor} [body] The Asset Administration Shell Descriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerAssetAdministrationShell(aasId: string, body?: AssetAdministrationShellDescriptor, options: any = {}): FetchArgs {
            // verify required parameter 'aasId' is not null or undefined
            if (aasId === null || aasId === undefined) {
                throw new RequiredError('aasId', 'Required parameter aasId was null or undefined when calling registerAssetAdministrationShell.');
            }
            const localVarPath = `/api/v1/registry/{aasId}`
                .replace(`{${"aasId"}}`, encodeURIComponent(String(aasId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"AssetAdministrationShellDescriptor" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates a new or updates an existing Submodel registration at a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {string} submodelId The Submodel&#x27;s unique id
         * @param {SubmodelDescriptor} [body] The Submodel Descriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerSubmodelAtAssetAdministrationShell(aasId: string, submodelId: string, body?: SubmodelDescriptor, options: any = {}): FetchArgs {
            // verify required parameter 'aasId' is not null or undefined
            if (aasId === null || aasId === undefined) {
                throw new RequiredError('aasId', 'Required parameter aasId was null or undefined when calling registerSubmodelAtAssetAdministrationShell.');
            }
            // verify required parameter 'submodelId' is not null or undefined
            if (submodelId === null || submodelId === undefined) {
                throw new RequiredError('submodelId', 'Required parameter submodelId was null or undefined when calling registerSubmodelAtAssetAdministrationShell.');
            }
            const localVarPath = `/api/v1/registry/{aasId}/submodels/{submodelId}`
                .replace(`{${"aasId"}}`, encodeURIComponent(String(aasId)))
                .replace(`{${"submodelId"}}`, encodeURIComponent(String(submodelId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"SubmodelDescriptor" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes the Asset Administration Shell registration from the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unregisterAssetAdministrationShell(aasId: string, options: any = {}): FetchArgs {
            // verify required parameter 'aasId' is not null or undefined
            if (aasId === null || aasId === undefined) {
                throw new RequiredError('aasId', 'Required parameter aasId was null or undefined when calling unregisterAssetAdministrationShell.');
            }
            const localVarPath = `/api/v1/registry/{aasId}`
                .replace(`{${"aasId"}}`, encodeURIComponent(String(aasId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AssetAdministrationShellRegistryApi - functional programming interface
 * @export
 */
export const AssetAdministrationShellRegistryApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Unregisters the Submodel from a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {string} submodelId The Submodel&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = AssetAdministrationShellRegistryApiFetchParamCreator(configuration).deleteSubmodelDescriptorFromAssetAdministrationShell(aasId, submodelId, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Retrieves all registered Asset Administration Shells within system (e.g. Station, Line, Plant, Area, etc.) defined by the Registry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllAssetAdministrationShellDescriptors(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<AssetAdministrationShellDescriptor>> {
            const localVarFetchArgs = AssetAdministrationShellRegistryApiFetchParamCreator(configuration).getAllAssetAdministrationShellDescriptors(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Retrieves all Submodel registrations from a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<SubmodelDescriptor>> {
            const localVarFetchArgs = AssetAdministrationShellRegistryApiFetchParamCreator(configuration).getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Retrieves a specific Asset Administration Shell registration
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssetAdministrationShellDescriptor(aasId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AssetAdministrationShellDescriptor> {
            const localVarFetchArgs = AssetAdministrationShellRegistryApiFetchParamCreator(configuration).getAssetAdministrationShellDescriptor(aasId, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Retrieves the Submodel registration from a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {string} submodelId The Submodel&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SubmodelDescriptor> {
            const localVarFetchArgs = AssetAdministrationShellRegistryApiFetchParamCreator(configuration).getSubmodelDescriptorFromAssetAdministrationShell(aasId, submodelId, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Creates a new or updates an existing Asset Administration Shell registration at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {AssetAdministrationShellDescriptor} [body] The Asset Administration Shell Descriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerAssetAdministrationShell(aasId: string, body?: AssetAdministrationShellDescriptor, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = AssetAdministrationShellRegistryApiFetchParamCreator(configuration).registerAssetAdministrationShell(aasId, body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Creates a new or updates an existing Submodel registration at a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {string} submodelId The Submodel&#x27;s unique id
         * @param {SubmodelDescriptor} [body] The Submodel Descriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerSubmodelAtAssetAdministrationShell(aasId: string, submodelId: string, body?: SubmodelDescriptor, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SubmodelDescriptor> {
            const localVarFetchArgs = AssetAdministrationShellRegistryApiFetchParamCreator(configuration).registerSubmodelAtAssetAdministrationShell(aasId, submodelId, body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Deletes the Asset Administration Shell registration from the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unregisterAssetAdministrationShell(aasId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = AssetAdministrationShellRegistryApiFetchParamCreator(configuration).unregisterAssetAdministrationShell(aasId, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * AssetAdministrationShellRegistryApi - factory interface
 * @export
 */
export const AssetAdministrationShellRegistryApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Unregisters the Submodel from a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {string} submodelId The Submodel&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any) {
            return AssetAdministrationShellRegistryApiFp(configuration).deleteSubmodelDescriptorFromAssetAdministrationShell(aasId, submodelId, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Retrieves all registered Asset Administration Shells within system (e.g. Station, Line, Plant, Area, etc.) defined by the Registry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllAssetAdministrationShellDescriptors(options?: any) {
            return AssetAdministrationShellRegistryApiFp(configuration).getAllAssetAdministrationShellDescriptors(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Retrieves all Submodel registrations from a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId: string, options?: any) {
            return AssetAdministrationShellRegistryApiFp(configuration).getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Retrieves a specific Asset Administration Shell registration
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssetAdministrationShellDescriptor(aasId: string, options?: any) {
            return AssetAdministrationShellRegistryApiFp(configuration).getAssetAdministrationShellDescriptor(aasId, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Retrieves the Submodel registration from a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {string} submodelId The Submodel&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any) {
            return AssetAdministrationShellRegistryApiFp(configuration).getSubmodelDescriptorFromAssetAdministrationShell(aasId, submodelId, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Creates a new or updates an existing Asset Administration Shell registration at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {AssetAdministrationShellDescriptor} [body] The Asset Administration Shell Descriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerAssetAdministrationShell(aasId: string, body?: AssetAdministrationShellDescriptor, options?: any) {
            return AssetAdministrationShellRegistryApiFp(configuration).registerAssetAdministrationShell(aasId, body, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Creates a new or updates an existing Submodel registration at a specific Asset Administration Shell registered at the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {string} submodelId The Submodel&#x27;s unique id
         * @param {SubmodelDescriptor} [body] The Submodel Descriptor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerSubmodelAtAssetAdministrationShell(aasId: string, submodelId: string, body?: SubmodelDescriptor, options?: any) {
            return AssetAdministrationShellRegistryApiFp(configuration).registerSubmodelAtAssetAdministrationShell(aasId, submodelId, body, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Deletes the Asset Administration Shell registration from the Registry
         * @param {string} aasId The Asset Administration Shell&#x27;s unique id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unregisterAssetAdministrationShell(aasId: string, options?: any) {
            return AssetAdministrationShellRegistryApiFp(configuration).unregisterAssetAdministrationShell(aasId, options)(fetch, basePath);
        },
    };
};

/**
 * AssetAdministrationShellRegistryApi - object-oriented interface
 * @export
 * @class AssetAdministrationShellRegistryApi
 * @extends {BaseAPI}
 */
export class AssetAdministrationShellRegistryApi extends BaseAPI {
    /**
     * 
     * @summary Unregisters the Submodel from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    public deleteSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any) {
        return AssetAdministrationShellRegistryApiFp(this.configuration).deleteSubmodelDescriptorFromAssetAdministrationShell(aasId, submodelId, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Retrieves all registered Asset Administration Shells within system (e.g. Station, Line, Plant, Area, etc.) defined by the Registry
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    public getAllAssetAdministrationShellDescriptors(options?: any) {
        return AssetAdministrationShellRegistryApiFp(this.configuration).getAllAssetAdministrationShellDescriptors(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Retrieves all Submodel registrations from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    public getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId: string, options?: any) {
        return AssetAdministrationShellRegistryApiFp(this.configuration).getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Retrieves a specific Asset Administration Shell registration
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    public getAssetAdministrationShellDescriptor(aasId: string, options?: any) {
        return AssetAdministrationShellRegistryApiFp(this.configuration).getAssetAdministrationShellDescriptor(aasId, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Retrieves the Submodel registration from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    public getSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any) {
        return AssetAdministrationShellRegistryApiFp(this.configuration).getSubmodelDescriptorFromAssetAdministrationShell(aasId, submodelId, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Creates a new or updates an existing Asset Administration Shell registration at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {AssetAdministrationShellDescriptor} [body] The Asset Administration Shell Descriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    public registerAssetAdministrationShell(aasId: string, body?: AssetAdministrationShellDescriptor, options?: any) {
        return AssetAdministrationShellRegistryApiFp(this.configuration).registerAssetAdministrationShell(aasId, body, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Creates a new or updates an existing Submodel registration at a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {SubmodelDescriptor} [body] The Submodel Descriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    public registerSubmodelAtAssetAdministrationShell(aasId: string, submodelId: string, body?: SubmodelDescriptor, options?: any) {
        return AssetAdministrationShellRegistryApiFp(this.configuration).registerSubmodelAtAssetAdministrationShell(aasId, submodelId, body, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Deletes the Asset Administration Shell registration from the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    public unregisterAssetAdministrationShell(aasId: string, options?: any) {
        return AssetAdministrationShellRegistryApiFp(this.configuration).unregisterAssetAdministrationShell(aasId, options)(this.fetch, this.basePath);
    }

}
