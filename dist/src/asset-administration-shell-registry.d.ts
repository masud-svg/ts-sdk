import { Configuration } from "./configuration";
import { BaseAPI, FetchArgs, FetchAPI } from "./api";
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
export declare enum AssetKind {
    Type,
    Instance
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
export declare namespace DataSpecificationIEC61360Content {
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
export declare enum KeyElements {
    Asset,
    AssetAdministrationShell,
    ConceptDescription,
    Submodel,
    AccessPermissionRule,
    AnnotatedRelationshipElement,
    BasicEvent,
    Blob,
    Capability,
    ConceptDictionary,
    DataElement,
    File,
    Entity,
    Event,
    MultiLanguageProperty,
    Operation,
    Property,
    Range,
    ReferenceElement,
    RelationshipElement,
    SubmodelElement,
    SubmodelElementCollection,
    View,
    GlobalReference,
    FragmentReference
}
/**
 *
 * @export
 * @enum {string}
 */
export declare enum KeyType {
    Custom,
    IRDI,
    IRI,
    IdShort,
    FragmentId
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
export declare enum LevelType {
    Min,
    Max,
    Nom,
    Typ
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
export declare namespace Message {
    /**
     * @export
     * @enum {string}
     */
    enum MessageTypeEnum {
        Unspecified,
        Debug,
        Information,
        Warning,
        Error,
        Fatal,
        Exception
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
export declare enum ModelTypes {
    Asset,
    AssetAdministrationShell,
    ConceptDescription,
    Submodel,
    AccessPermissionRule,
    AnnotatedRelationshipElement,
    BasicEvent,
    Blob,
    Capability,
    ConceptDictionary,
    DataElement,
    File,
    Entity,
    Event,
    MultiLanguageProperty,
    Operation,
    Property,
    Range,
    ReferenceElement,
    RelationshipElement,
    SubmodelElement,
    SubmodelElementCollection,
    View,
    GlobalReference,
    FragmentReference,
    Constraint,
    Formula,
    Qualifier
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
export declare namespace ValueObject {
    /**
     * @export
     * @enum {string}
     */
    enum ValueTypeEnum {
        AnyUri,
        Base64Binary,
        Boolean,
        Date,
        DateTime,
        DateTimeStamp,
        Decimal,
        Integer,
        Long,
        Int,
        Short,
        Byte,
        NonNegativeInteger,
        PositiveInteger,
        UnsignedLong,
        UnsignedInt,
        UnsignedShort,
        UnsignedByte,
        NonPositiveInteger,
        NegativeInteger,
        Double,
        Duration,
        DayTimeDuration,
        YearMonthDuration,
        Float,
        GDay,
        GMonth,
        GMonthDay,
        GYear,
        GYearMonth,
        HexBinary,
        NOTATION,
        QName,
        String,
        NormalizedString,
        Token,
        Language,
        Name,
        NCName,
        ENTITY,
        ID,
        IDREF,
        NMTOKEN,
        Time
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
export declare namespace ValueReferencePairType {
}
/**
 * AssetAdministrationShellRegistryApi - fetch parameter creator
 * @export
 */
export declare const AssetAdministrationShellRegistryApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Unregisters the Submodel from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any): FetchArgs;
    /**
     *
     * @summary Retrieves all registered Asset Administration Shells within system (e.g. Station, Line, Plant, Area, etc.) defined by the Registry
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllAssetAdministrationShellDescriptors(options?: any): FetchArgs;
    /**
     *
     * @summary Retrieves all Submodel registrations from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId: string, options?: any): FetchArgs;
    /**
     *
     * @summary Retrieves a specific Asset Administration Shell registration
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAssetAdministrationShellDescriptor(aasId: string, options?: any): FetchArgs;
    /**
     *
     * @summary Retrieves the Submodel registration from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any): FetchArgs;
    /**
     *
     * @summary Creates a new or updates an existing Asset Administration Shell registration at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {AssetAdministrationShellDescriptor} [body] The Asset Administration Shell Descriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerAssetAdministrationShell(aasId: string, body?: AssetAdministrationShellDescriptor, options?: any): FetchArgs;
    /**
     *
     * @summary Creates a new or updates an existing Submodel registration at a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {SubmodelDescriptor} [body] The Submodel Descriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerSubmodelAtAssetAdministrationShell(aasId: string, submodelId: string, body?: SubmodelDescriptor, options?: any): FetchArgs;
    /**
     *
     * @summary Deletes the Asset Administration Shell registration from the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unregisterAssetAdministrationShell(aasId: string, options?: any): FetchArgs;
};
/**
 * AssetAdministrationShellRegistryApi - functional programming interface
 * @export
 */
export declare const AssetAdministrationShellRegistryApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Unregisters the Submodel from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary Retrieves all registered Asset Administration Shells within system (e.g. Station, Line, Plant, Area, etc.) defined by the Registry
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllAssetAdministrationShellDescriptors(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<AssetAdministrationShellDescriptor>>;
    /**
     *
     * @summary Retrieves all Submodel registrations from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<SubmodelDescriptor>>;
    /**
     *
     * @summary Retrieves a specific Asset Administration Shell registration
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAssetAdministrationShellDescriptor(aasId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AssetAdministrationShellDescriptor>;
    /**
     *
     * @summary Retrieves the Submodel registration from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SubmodelDescriptor>;
    /**
     *
     * @summary Creates a new or updates an existing Asset Administration Shell registration at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {AssetAdministrationShellDescriptor} [body] The Asset Administration Shell Descriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerAssetAdministrationShell(aasId: string, body?: AssetAdministrationShellDescriptor, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary Creates a new or updates an existing Submodel registration at a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {SubmodelDescriptor} [body] The Submodel Descriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerSubmodelAtAssetAdministrationShell(aasId: string, submodelId: string, body?: SubmodelDescriptor, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SubmodelDescriptor>;
    /**
     *
     * @summary Deletes the Asset Administration Shell registration from the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unregisterAssetAdministrationShell(aasId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
};
/**
 * AssetAdministrationShellRegistryApi - factory interface
 * @export
 */
export declare const AssetAdministrationShellRegistryApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Unregisters the Submodel from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any): Promise<Response>;
    /**
     *
     * @summary Retrieves all registered Asset Administration Shells within system (e.g. Station, Line, Plant, Area, etc.) defined by the Registry
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllAssetAdministrationShellDescriptors(options?: any): Promise<AssetAdministrationShellDescriptor[]>;
    /**
     *
     * @summary Retrieves all Submodel registrations from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId: string, options?: any): Promise<SubmodelDescriptor[]>;
    /**
     *
     * @summary Retrieves a specific Asset Administration Shell registration
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAssetAdministrationShellDescriptor(aasId: string, options?: any): Promise<AssetAdministrationShellDescriptor>;
    /**
     *
     * @summary Retrieves the Submodel registration from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any): Promise<SubmodelDescriptor>;
    /**
     *
     * @summary Creates a new or updates an existing Asset Administration Shell registration at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {AssetAdministrationShellDescriptor} [body] The Asset Administration Shell Descriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerAssetAdministrationShell(aasId: string, body?: AssetAdministrationShellDescriptor, options?: any): Promise<Response>;
    /**
     *
     * @summary Creates a new or updates an existing Submodel registration at a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {SubmodelDescriptor} [body] The Submodel Descriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerSubmodelAtAssetAdministrationShell(aasId: string, submodelId: string, body?: SubmodelDescriptor, options?: any): Promise<SubmodelDescriptor>;
    /**
     *
     * @summary Deletes the Asset Administration Shell registration from the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unregisterAssetAdministrationShell(aasId: string, options?: any): Promise<Response>;
};
/**
 * AssetAdministrationShellRegistryApi - object-oriented interface
 * @export
 * @class AssetAdministrationShellRegistryApi
 * @extends {BaseAPI}
 */
export declare class AssetAdministrationShellRegistryApi extends BaseAPI {
    /**
     *
     * @summary Unregisters the Submodel from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    deleteSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any): Promise<Response>;
    /**
     *
     * @summary Retrieves all registered Asset Administration Shells within system (e.g. Station, Line, Plant, Area, etc.) defined by the Registry
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    getAllAssetAdministrationShellDescriptors(options?: any): Promise<AssetAdministrationShellDescriptor[]>;
    /**
     *
     * @summary Retrieves all Submodel registrations from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    getAllSubmodelDescriptorsFromAssetAdministrationShell(aasId: string, options?: any): Promise<SubmodelDescriptor[]>;
    /**
     *
     * @summary Retrieves a specific Asset Administration Shell registration
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    getAssetAdministrationShellDescriptor(aasId: string, options?: any): Promise<AssetAdministrationShellDescriptor>;
    /**
     *
     * @summary Retrieves the Submodel registration from a specific Asset Administration Shell registered at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {string} submodelId The Submodel&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    getSubmodelDescriptorFromAssetAdministrationShell(aasId: string, submodelId: string, options?: any): Promise<SubmodelDescriptor>;
    /**
     *
     * @summary Creates a new or updates an existing Asset Administration Shell registration at the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {AssetAdministrationShellDescriptor} [body] The Asset Administration Shell Descriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    registerAssetAdministrationShell(aasId: string, body?: AssetAdministrationShellDescriptor, options?: any): Promise<Response>;
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
    registerSubmodelAtAssetAdministrationShell(aasId: string, submodelId: string, body?: SubmodelDescriptor, options?: any): Promise<SubmodelDescriptor>;
    /**
     *
     * @summary Deletes the Asset Administration Shell registration from the Registry
     * @param {string} aasId The Asset Administration Shell&#x27;s unique id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetAdministrationShellRegistryApi
     */
    unregisterAssetAdministrationShell(aasId: string, options?: any): Promise<Response>;
}
