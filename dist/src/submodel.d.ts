import { Configuration } from "./configuration";
import { BaseAPI, FetchArgs, FetchAPI } from "./api";
/**
 *
 * @export
 * @interface AdministrativeInformation
 */
interface AdministrativeInformation {
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
 * @interface BasicEvent
 */
export interface BasicEvent extends Event {
    /**
     *
     * @type {Reference}
     * @memberof BasicEvent
     */
    observed: Reference;
}
/**
 *
 * @export
 * @interface Blob
 */
export interface Blob extends SubmodelElement {
    /**
     *
     * @type {string}
     * @memberof Blob
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof Blob
     */
    mimeType: string;
}
/**
 *
 * @export
 * @interface Capability
 */
export interface Capability extends SubmodelElement {
}
/**
 *
 * @export
 * @interface Constraint
 */
export interface Constraint {
    /**
     *
     * @type {ModelType}
     * @memberof Constraint
     */
    modelType: ModelType;
}
/**
 *
 * @export
 * @interface DataSpecificationContent
 */
interface DataSpecificationContent {
}
/**
 *
 * @export
 * @interface EmbeddedDataSpecification
 */
interface EmbeddedDataSpecification {
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
 * @interface Entity
 */
export interface Entity extends SubmodelElement {
    /**
     *
     * @type {Array<SubmodelElement>}
     * @memberof Entity
     */
    statements?: Array<SubmodelElement>;
    /**
     *
     * @type {EntityType}
     * @memberof Entity
     */
    entityType: EntityType;
    /**
     *
     * @type {Reference}
     * @memberof Entity
     */
    asset?: Reference;
}
/**
 *
 * @export
 * @enum {string}
 */
export declare enum EntityType {
    CoManagedEntity,
    SelfManagedEntity
}
/**
 *
 * @export
 * @interface Event
 */
export interface Event extends SubmodelElement {
}
/**
 *
 * @export
 * @interface HasSemantics
 */
export interface HasSemantics {
    /**
     *
     * @type {Reference}
     * @memberof HasSemantics
     */
    semanticId?: Reference;
}
/**
 *
 * @export
 * @interface Identifiable
 */
interface Identifiable extends Referable {
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
interface Identifier {
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
 * @interface InvocationRequest
 */
export interface InvocationRequest {
    /**
     *
     * @type {string}
     * @memberof InvocationRequest
     */
    requestId?: string;
    /**
     *
     * @type {Array<OperationVariable>}
     * @memberof InvocationRequest
     */
    inoutputArguments?: Array<OperationVariable>;
    /**
     *
     * @type {Array<OperationVariable>}
     * @memberof InvocationRequest
     */
    inputArguments?: Array<OperationVariable>;
    /**
     *
     * @type {number}
     * @memberof InvocationRequest
     */
    timeout?: number;
}
/**
 *
 * @export
 * @interface InvocationResponse
 */
export interface InvocationResponse {
    /**
     *
     * @type {string}
     * @memberof InvocationResponse
     */
    requestId?: string;
    /**
     *
     * @type {Array<OperationVariable>}
     * @memberof InvocationResponse
     */
    inoutputArguments?: Array<OperationVariable>;
    /**
     *
     * @type {Array<OperationVariable>}
     * @memberof InvocationResponse
     */
    outputArguments?: Array<OperationVariable>;
    /**
     *
     * @type {Result}
     * @memberof InvocationResponse
     */
    operationResult?: Result;
    /**
     *
     * @type {string}
     * @memberof InvocationResponse
     */
    executionState?: InvocationResponse.ExecutionStateEnum;
}
/**
 * @export
 * @namespace InvocationResponse
 */
export declare namespace InvocationResponse {
    /**
     * @export
     * @enum {string}
     */
    enum ExecutionStateEnum {
        Initiated,
        Running,
        Completed,
        Canceled,
        Failed,
        Timeout
    }
}
/**
 *
 * @export
 * @interface Key
 */
interface Key {
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
declare enum KeyElements {
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
declare enum KeyType {
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
interface LangString {
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
 * @interface Message
 */
interface Message {
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
declare namespace Message {
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
 * @interface ModelFile
 */
export interface ModelFile extends SubmodelElement {
    /**
     *
     * @type {string}
     * @memberof ModelFile
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof ModelFile
     */
    mimeType: string;
}
/**
 *
 * @export
 * @interface ModelType
 */
interface ModelType {
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
declare enum ModelTypes {
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
 * @enum {string}
 */
export declare enum ModelingKind {
    Template,
    Instance
}
/**
 *
 * @export
 * @interface MultiLanguageProperty
 */
export interface MultiLanguageProperty extends SubmodelElement {
    /**
     *
     * @type {Array<LangString>}
     * @memberof MultiLanguageProperty
     */
    value?: Array<LangString>;
    /**
     *
     * @type {Reference}
     * @memberof MultiLanguageProperty
     */
    valueId?: Reference;
}
/**
 *
 * @export
 * @interface Operation
 */
export interface Operation extends SubmodelElement {
    /**
     *
     * @type {Array<OperationVariable>}
     * @memberof Operation
     */
    inputVariable?: Array<OperationVariable>;
    /**
     *
     * @type {Array<OperationVariable>}
     * @memberof Operation
     */
    outputVariable?: Array<OperationVariable>;
    /**
     *
     * @type {Array<OperationVariable>}
     * @memberof Operation
     */
    inoutputVariable?: Array<OperationVariable>;
}
/**
 *
 * @export
 * @interface OperationVariable
 */
export interface OperationVariable {
    /**
     *
     * @type {Blob | any | Capability | Entity | Event | BasicEvent | MultiLanguageProperty | Operation | Property | Range | ReferenceElement | RelationshipElement | SubmodelElementCollection}
     * @memberof OperationVariable
     */
    value: Blob | any | Capability | Entity | Event | BasicEvent | MultiLanguageProperty | Operation | Property | Range | ReferenceElement | RelationshipElement | SubmodelElementCollection;
}
/**
 *
 * @export
 * @interface Property
 */
export interface Property extends SubmodelElement {
    /**
     *
     * @type {string}
     * @memberof Property
     */
    value?: string;
    /**
     *
     * @type {Reference}
     * @memberof Property
     */
    valueId?: Reference;
    /**
     *
     * @type {string}
     * @memberof Property
     */
    valueType?: Property.ValueTypeEnum;
}
/**
 * @export
 * @namespace Property
 */
export declare namespace Property {
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
        Time,
        MultiLanguageProperty
    }
}
/**
 *
 * @export
 * @interface Qualifiable
 */
export interface Qualifiable {
    /**
     *
     * @type {Array<Constraint>}
     * @memberof Qualifiable
     */
    qualifiers?: Array<Constraint>;
}
/**
 *
 * @export
 * @interface Range
 */
export interface Range extends SubmodelElement {
    /**
     *
     * @type {string}
     * @memberof Range
     */
    valueType: Range.ValueTypeEnum;
    /**
     *
     * @type {string}
     * @memberof Range
     */
    min: string;
    /**
     *
     * @type {string}
     * @memberof Range
     */
    max: string;
}
/**
 * @export
 * @namespace Range
 */
export declare namespace Range {
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
 * @interface Referable
 */
interface Referable {
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
interface Reference {
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
 * @interface ReferenceElement
 */
export interface ReferenceElement extends SubmodelElement {
    /**
     *
     * @type {Reference}
     * @memberof ReferenceElement
     */
    value?: Reference;
}
/**
 *
 * @export
 * @interface RelationshipElement
 */
export interface RelationshipElement extends SubmodelElement {
    /**
     *
     * @type {Reference}
     * @memberof RelationshipElement
     */
    first: Reference;
    /**
     *
     * @type {Reference}
     * @memberof RelationshipElement
     */
    second: Reference;
}
/**
 *
 * @export
 * @interface Result
 */
interface Result {
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
 * @interface Submodel
 */
export interface Submodel extends Identifiable {
    /**
     *
     * @type {Array<EmbeddedDataSpecification>}
     * @memberof Submodel
     */
    embeddedDataSpecifications?: Array<EmbeddedDataSpecification>;
    /**
     *
     * @type {Array<Constraint>}
     * @memberof Submodel
     */
    qualifiers?: Array<Constraint>;
    /**
     *
     * @type {Reference}
     * @memberof Submodel
     */
    semanticId?: Reference;
    /**
     *
     * @type {ModelingKind}
     * @memberof Submodel
     */
    kind?: ModelingKind;
    /**
     *
     * @type {Array<SubmodelElement>}
     * @memberof Submodel
     */
    submodelElements?: Array<SubmodelElement>;
}
/**
 *
 * @export
 * @interface SubmodelElement
 */
export interface SubmodelElement extends Referable {
    /**
     *
     * @type {Array<EmbeddedDataSpecification>}
     * @memberof SubmodelElement
     */
    embeddedDataSpecifications?: Array<EmbeddedDataSpecification>;
    /**
     *
     * @type {Reference}
     * @memberof SubmodelElement
     */
    semanticId?: Reference;
    /**
     *
     * @type {Array<Constraint>}
     * @memberof SubmodelElement
     */
    qualifiers?: Array<Constraint>;
    /**
     *
     * @type {ModelingKind}
     * @memberof SubmodelElement
     */
    kind?: ModelingKind;
}
/**
 *
 * @export
 * @interface SubmodelElementCollection
 */
export interface SubmodelElementCollection extends SubmodelElement {
    /**
     *
     * @type {Array<Blob | any | Capability | Entity | Event | BasicEvent | MultiLanguageProperty | Operation | Property | Range | ReferenceElement | RelationshipElement | SubmodelElementCollection>}
     * @memberof SubmodelElementCollection
     */
    value?: Array<Blob | any | Capability | Entity | Event | BasicEvent | MultiLanguageProperty | Operation | Property | Range | ReferenceElement | RelationshipElement | SubmodelElementCollection>;
    /**
     *
     * @type {boolean}
     * @memberof SubmodelElementCollection
     */
    allowDuplicates?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SubmodelElementCollection
     */
    ordered?: boolean;
}
/**
 * SubmodelApi - fetch parameter creator
 * @export
 */
export declare const SubmodelApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Deletes a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSubmodelElementByIdShort(seIdShortPath: string, options?: any): FetchArgs;
    /**
     *
     * @summary Retrieves the result of an asynchronously started operation
     * @param {string} idShortPathToOperation The IdShort path to the Operation
     * @param {string} requestId The request id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInvocationResultByIdShort(idShortPathToOperation: string, requestId: string, options?: any): FetchArgs;
    /**
     *
     * @summary Retrieves the entire Submodel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodel(options?: any): FetchArgs;
    /**
     *
     * @summary Retrieves a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelElementByIdShort(seIdShortPath: string, options?: any): FetchArgs;
    /**
     *
     * @summary Retrieves the value of a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelElementValueByIdShort(seIdShortPath: string, options?: any): FetchArgs;
    /**
     *
     * @summary Retrieves all Submodel-Elements from the Submodel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelElements(options?: any): FetchArgs;
    /**
     *
     * @summary Retrieves the minimized version of a Submodel, i.e. only the values of SubmodelElements are serialized and returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelValues(options?: any): FetchArgs;
    /**
     *
     * @summary Invokes a specific operation from the Submodel synchronously or asynchronously
     * @param {string} idShortPathToOperation The IdShort path to the Operation
     * @param {InvocationRequest} [body] The parameterized request object for the invocation
     * @param {boolean} [async] Determines whether the execution of the operation is asynchronous (true) or not (false)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    invokeOperationByIdShort(idShortPathToOperation: string, body?: InvocationRequest, async?: boolean, options?: any): FetchArgs;
    /**
     *
     * @summary Creates or updates a Submodel-Element at the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {SubmodelElement} [body] The Submodel-Element object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putSubmodelElement(seIdShortPath: string, body?: SubmodelElement, options?: any): FetchArgs;
    /**
     *
     * @summary Updates the Submodel-Element's value
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {any} [body] The new value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putSubmodelElementValueByIdShort(seIdShortPath: string, body?: any, options?: any): FetchArgs;
};
/**
 * SubmodelApi - functional programming interface
 * @export
 */
export declare const SubmodelApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Deletes a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSubmodelElementByIdShort(seIdShortPath: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Result>;
    /**
     *
     * @summary Retrieves the result of an asynchronously started operation
     * @param {string} idShortPathToOperation The IdShort path to the Operation
     * @param {string} requestId The request id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInvocationResultByIdShort(idShortPathToOperation: string, requestId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InvocationResponse>;
    /**
     *
     * @summary Retrieves the entire Submodel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodel(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Submodel>;
    /**
     *
     * @summary Retrieves a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelElementByIdShort(seIdShortPath: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SubmodelElement>;
    /**
     *
     * @summary Retrieves the value of a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelElementValueByIdShort(seIdShortPath: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    /**
     *
     * @summary Retrieves all Submodel-Elements from the Submodel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelElements(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<SubmodelElement>>;
    /**
     *
     * @summary Retrieves the minimized version of a Submodel, i.e. only the values of SubmodelElements are serialized and returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelValues(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     *
     * @summary Invokes a specific operation from the Submodel synchronously or asynchronously
     * @param {string} idShortPathToOperation The IdShort path to the Operation
     * @param {InvocationRequest} [body] The parameterized request object for the invocation
     * @param {boolean} [async] Determines whether the execution of the operation is asynchronous (true) or not (false)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    invokeOperationByIdShort(idShortPathToOperation: string, body?: InvocationRequest, async?: boolean, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InvocationResponse>;
    /**
     *
     * @summary Creates or updates a Submodel-Element at the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {SubmodelElement} [body] The Submodel-Element object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putSubmodelElement(seIdShortPath: string, body?: SubmodelElement, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SubmodelElement>;
    /**
     *
     * @summary Updates the Submodel-Element's value
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {any} [body] The new value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putSubmodelElementValueByIdShort(seIdShortPath: string, body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
};
/**
 * SubmodelApi - factory interface
 * @export
 */
export declare const SubmodelApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Deletes a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSubmodelElementByIdShort(seIdShortPath: string, options?: any): Promise<Result>;
    /**
     *
     * @summary Retrieves the result of an asynchronously started operation
     * @param {string} idShortPathToOperation The IdShort path to the Operation
     * @param {string} requestId The request id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInvocationResultByIdShort(idShortPathToOperation: string, requestId: string, options?: any): Promise<InvocationResponse>;
    /**
     *
     * @summary Retrieves the entire Submodel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodel(options?: any): Promise<Submodel>;
    /**
     *
     * @summary Retrieves a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelElementByIdShort(seIdShortPath: string, options?: any): Promise<SubmodelElement>;
    /**
     *
     * @summary Retrieves the value of a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelElementValueByIdShort(seIdShortPath: string, options?: any): Promise<any>;
    /**
     *
     * @summary Retrieves all Submodel-Elements from the Submodel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelElements(options?: any): Promise<SubmodelElement[]>;
    /**
     *
     * @summary Retrieves the minimized version of a Submodel, i.e. only the values of SubmodelElements are serialized and returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubmodelValues(options?: any): Promise<Response>;
    /**
     *
     * @summary Invokes a specific operation from the Submodel synchronously or asynchronously
     * @param {string} idShortPathToOperation The IdShort path to the Operation
     * @param {InvocationRequest} [body] The parameterized request object for the invocation
     * @param {boolean} [async] Determines whether the execution of the operation is asynchronous (true) or not (false)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    invokeOperationByIdShort(idShortPathToOperation: string, body?: InvocationRequest, async?: boolean, options?: any): Promise<InvocationResponse>;
    /**
     *
     * @summary Creates or updates a Submodel-Element at the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {SubmodelElement} [body] The Submodel-Element object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putSubmodelElement(seIdShortPath: string, body?: SubmodelElement, options?: any): Promise<SubmodelElement>;
    /**
     *
     * @summary Updates the Submodel-Element's value
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {any} [body] The new value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putSubmodelElementValueByIdShort(seIdShortPath: string, body?: any, options?: any): Promise<Response>;
};
/**
 * SubmodelApi - object-oriented interface
 * @export
 * @class SubmodelApi
 * @extends {BaseAPI}
 */
export declare class SubmodelApi extends BaseAPI {
    /**
     *
     * @summary Deletes a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    deleteSubmodelElementByIdShort(seIdShortPath: string, options?: any): Promise<Result>;
    /**
     *
     * @summary Retrieves the result of an asynchronously started operation
     * @param {string} idShortPathToOperation The IdShort path to the Operation
     * @param {string} requestId The request id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    getInvocationResultByIdShort(idShortPathToOperation: string, requestId: string, options?: any): Promise<InvocationResponse>;
    /**
     *
     * @summary Retrieves the entire Submodel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    getSubmodel(options?: any): Promise<Submodel>;
    /**
     *
     * @summary Retrieves a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    getSubmodelElementByIdShort(seIdShortPath: string, options?: any): Promise<SubmodelElement>;
    /**
     *
     * @summary Retrieves the value of a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    getSubmodelElementValueByIdShort(seIdShortPath: string, options?: any): Promise<any>;
    /**
     *
     * @summary Retrieves all Submodel-Elements from the Submodel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    getSubmodelElements(options?: any): Promise<SubmodelElement[]>;
    /**
     *
     * @summary Retrieves the minimized version of a Submodel, i.e. only the values of SubmodelElements are serialized and returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    getSubmodelValues(options?: any): Promise<Response>;
    /**
     *
     * @summary Invokes a specific operation from the Submodel synchronously or asynchronously
     * @param {string} idShortPathToOperation The IdShort path to the Operation
     * @param {InvocationRequest} [body] The parameterized request object for the invocation
     * @param {boolean} [async] Determines whether the execution of the operation is asynchronous (true) or not (false)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    invokeOperationByIdShort(idShortPathToOperation: string, body?: InvocationRequest, async?: boolean, options?: any): Promise<InvocationResponse>;
    /**
     *
     * @summary Creates or updates a Submodel-Element at the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {SubmodelElement} [body] The Submodel-Element object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    putSubmodelElement(seIdShortPath: string, body?: SubmodelElement, options?: any): Promise<SubmodelElement>;
    /**
     *
     * @summary Updates the Submodel-Element's value
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {any} [body] The new value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    putSubmodelElementValueByIdShort(seIdShortPath: string, body?: any, options?: any): Promise<Response>;
}
export {};
