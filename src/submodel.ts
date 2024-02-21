import * as url from "url";
import * as isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";
import { BaseAPI, RequiredError, FetchArgs, FetchAPI, BASE_PATH } from "./api";
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
 * @interface DataSpecificationIEC61360Content
 */
interface DataSpecificationIEC61360Content extends ValueObject {
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
namespace DataSpecificationIEC61360Content {
}
/**
 * 
 * @export
 * @interface DataSpecificationPhysicalUnitContent
 */
interface DataSpecificationPhysicalUnitContent {
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
export enum EntityType {
    CoManagedEntity = <any>'CoManagedEntity',
    SelfManagedEntity = <any>'SelfManagedEntity'
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
 * @interface HasDataSpecification
 */
interface HasDataSpecification {
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
export namespace InvocationResponse {
    /**
     * @export
     * @enum {string}
     */
    export enum ExecutionStateEnum {
        Initiated = <any>'Initiated',
        Running = <any>'Running',
        Completed = <any>'Completed',
        Canceled = <any>'Canceled',
        Failed = <any>'Failed',
        Timeout = <any>'Timeout'
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
enum KeyElements {
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
enum KeyType {
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
 * @enum {string}
 */
enum LevelType {
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
namespace Message {
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
enum ModelTypes {
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
 * @enum {string}
 */
export enum ModelingKind {
    Template = <any>'Template',
    Instance = <any>'Instance'
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
export namespace Property {
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
        Time = <any>'time',
        MultiLanguageProperty = <any>'string'
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
export namespace Range {
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
 * 
 * @export
 * @interface ValueList
 */
interface ValueList {
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
interface ValueObject {
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
namespace ValueObject {
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
interface ValueReferencePairType extends ValueObject {
}

/**
 * @export
 * @namespace ValueReferencePairType
 */
namespace ValueReferencePairType {
}
/**
 * SubmodelApi - fetch parameter creator
 * @export
 */
export const SubmodelApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes a specific Submodel-Element from the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubmodelElementByIdShort(seIdShortPath: string, options: any = {}): FetchArgs {
            // verify required parameter 'seIdShortPath' is not null or undefined
            if (seIdShortPath === null || seIdShortPath === undefined) {
                throw new RequiredError('seIdShortPath', 'Required parameter seIdShortPath was null or undefined when calling deleteSubmodelElementByIdShort.');
            }
            const localVarPath = `/submodel/submodelElements/{seIdShortPath}`
                .replace(`{${"seIdShortPath"}}`, encodeURIComponent(String(seIdShortPath)));
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
         * @summary Retrieves the result of an asynchronously started operation
         * @param {string} idShortPathToOperation The IdShort path to the Operation
         * @param {string} requestId The request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvocationResultByIdShort(idShortPathToOperation: string, requestId: string, options: any = {}): FetchArgs {
            // verify required parameter 'idShortPathToOperation' is not null or undefined
            if (idShortPathToOperation === null || idShortPathToOperation === undefined) {
                throw new RequiredError('idShortPathToOperation', 'Required parameter idShortPathToOperation was null or undefined when calling getInvocationResultByIdShort.');
            }
            // verify required parameter 'requestId' is not null or undefined
            if (requestId === null || requestId === undefined) {
                throw new RequiredError('requestId', 'Required parameter requestId was null or undefined when calling getInvocationResultByIdShort.');
            }
            const localVarPath = `/submodel/submodelElements/{idShortPathToOperation}/invocationList/{requestId}`
                .replace(`{${"idShortPathToOperation"}}`, encodeURIComponent(String(idShortPathToOperation)))
                .replace(`{${"requestId"}}`, encodeURIComponent(String(requestId)));
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
         * @summary Retrieves the entire Submodel
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodel(options: any = {}): FetchArgs {
            const localVarPath = `/submodel`;
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
         * @summary Retrieves a specific Submodel-Element from the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelElementByIdShort(seIdShortPath: string, options: any = {}): FetchArgs {
            // verify required parameter 'seIdShortPath' is not null or undefined
            if (seIdShortPath === null || seIdShortPath === undefined) {
                throw new RequiredError('seIdShortPath', 'Required parameter seIdShortPath was null or undefined when calling getSubmodelElementByIdShort.');
            }
            // const localVarPath = `/submodel/submodelElements/{seIdShortPath}`
            // .replace(`{${"seIdShortPath"}}`, encodeURIComponent(String(seIdShortPath)));
            // uri encodes each idShort
            //const seIdShortPathUriEncoded = seIdShortPath.split('/').map(element => {
            //   return encodeURIComponent(element);
            // }).reduce((accu, elem) => {
            // return accu + elem  + '/';
            // }, "")
            const localVarPath = `/submodel/submodelElements/{seIdShortPath}`
                .replace(`{${"seIdShortPath"}}`, seIdShortPath);
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
         * @summary Retrieves the value of a specific Submodel-Element from the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelElementValueByIdShort(seIdShortPath: string, options: any = {}): FetchArgs {
            // verify required parameter 'seIdShortPath' is not null or undefined
            if (seIdShortPath === null || seIdShortPath === undefined) {
                throw new RequiredError('seIdShortPath', 'Required parameter seIdShortPath was null or undefined when calling getSubmodelElementValueByIdShort.');
            }
            // const localVarPath = `/submodel/submodelElements/{seIdShortPath}/value`
            //     .replace(`{${"seIdShortPath"}}`, encodeURIComponent(String(seIdShortPath)));

            // uri encodes each idShort
            //const seIdShortPathUriEncoded = seIdShortPath.split('/').map(element => {
            //   return encodeURIComponent(element);
            // }).reduce((accu, elem) => {
            // return accu + elem  + '/';
            // }, "")
            const localVarPath = `/submodel/submodelElements/{seIdShortPath}/value`
                .replace(`{${"seIdShortPath"}}`, seIdShortPath); // allow nested elements paths to be set
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
         * @summary Retrieves all Submodel-Elements from the Submodel
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelElements(options: any = {}): FetchArgs {
            const localVarPath = `/submodel/submodelElements`;
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
         * @summary Retrieves the minimized version of a Submodel, i.e. only the values of SubmodelElements are serialized and returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelValues(options: any = {}): FetchArgs {
            const localVarPath = `/submodel/values`;
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
         * @summary Invokes a specific operation from the Submodel synchronously or asynchronously
         * @param {string} idShortPathToOperation The IdShort path to the Operation
         * @param {InvocationRequest} [body] The parameterized request object for the invocation
         * @param {boolean} [async] Determines whether the execution of the operation is asynchronous (true) or not (false)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invokeOperationByIdShort(idShortPathToOperation: string, body?: InvocationRequest, async?: boolean, options: any = {}): FetchArgs {
            // verify required parameter 'idShortPathToOperation' is not null or undefined
            if (idShortPathToOperation === null || idShortPathToOperation === undefined) {
                throw new RequiredError('idShortPathToOperation', 'Required parameter idShortPathToOperation was null or undefined when calling invokeOperationByIdShort.');
            }
            const localVarPath = `/submodel/submodelElements/{idShortPathToOperation}/invoke`
                .replace(`{${"idShortPathToOperation"}}`, encodeURIComponent(String(idShortPathToOperation)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (async !== undefined) {
                localVarQueryParameter['async'] = async;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"InvocationRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates or updates a Submodel-Element at the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {SubmodelElement} [body] The Submodel-Element object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSubmodelElement(seIdShortPath: string, body?: SubmodelElement, options: any = {}): FetchArgs {
            // verify required parameter 'seIdShortPath' is not null or undefined
            if (seIdShortPath === null || seIdShortPath === undefined) {
                throw new RequiredError('seIdShortPath', 'Required parameter seIdShortPath was null or undefined when calling putSubmodelElement.');
            }
            const localVarPath = `/submodel/submodelElements/{seIdShortPath}`
                .replace(`{${"seIdShortPath"}}`, encodeURIComponent(String(seIdShortPath)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"SubmodelElement" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates the Submodel-Element's value
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {any} [body] The new value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSubmodelElementValueByIdShort(seIdShortPath: string, body?: any, options: any = {}): FetchArgs {
            // verify required parameter 'seIdShortPath' is not null or undefined
            if (seIdShortPath === null || seIdShortPath === undefined) {
                throw new RequiredError('seIdShortPath', 'Required parameter seIdShortPath was null or undefined when calling putSubmodelElementValueByIdShort.');
            }
            const localVarPath = `/submodel/submodelElements/{seIdShortPath}/value`
                .replace(`{${"seIdShortPath"}}`, encodeURIComponent(String(seIdShortPath)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SubmodelApi - functional programming interface
 * @export
 */
export const SubmodelApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes a specific Submodel-Element from the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubmodelElementByIdShort(seIdShortPath: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Result> {
            const localVarFetchArgs = SubmodelApiFetchParamCreator(configuration).deleteSubmodelElementByIdShort(seIdShortPath, options);
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
         * @summary Retrieves the result of an asynchronously started operation
         * @param {string} idShortPathToOperation The IdShort path to the Operation
         * @param {string} requestId The request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvocationResultByIdShort(idShortPathToOperation: string, requestId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InvocationResponse> {
            const localVarFetchArgs = SubmodelApiFetchParamCreator(configuration).getInvocationResultByIdShort(idShortPathToOperation, requestId, options);
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
         * @summary Retrieves the entire Submodel
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodel(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Submodel> {
            const localVarFetchArgs = SubmodelApiFetchParamCreator(configuration).getSubmodel(options);
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
         * @summary Retrieves a specific Submodel-Element from the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelElementByIdShort(seIdShortPath: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SubmodelElement> {
            const localVarFetchArgs = SubmodelApiFetchParamCreator(configuration).getSubmodelElementByIdShort(seIdShortPath, options);
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
         * @summary Retrieves the value of a specific Submodel-Element from the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelElementValueByIdShort(seIdShortPath: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
            const localVarFetchArgs = SubmodelApiFetchParamCreator(configuration).getSubmodelElementValueByIdShort(seIdShortPath, options);
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
         * @summary Retrieves all Submodel-Elements from the Submodel
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelElements(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<SubmodelElement>> {
            const localVarFetchArgs = SubmodelApiFetchParamCreator(configuration).getSubmodelElements(options);
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
         * @summary Retrieves the minimized version of a Submodel, i.e. only the values of SubmodelElements are serialized and returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelValues(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = SubmodelApiFetchParamCreator(configuration).getSubmodelValues(options);
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
         * @summary Invokes a specific operation from the Submodel synchronously or asynchronously
         * @param {string} idShortPathToOperation The IdShort path to the Operation
         * @param {InvocationRequest} [body] The parameterized request object for the invocation
         * @param {boolean} [async] Determines whether the execution of the operation is asynchronous (true) or not (false)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invokeOperationByIdShort(idShortPathToOperation: string, body?: InvocationRequest, async?: boolean, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InvocationResponse> {
            const localVarFetchArgs = SubmodelApiFetchParamCreator(configuration).invokeOperationByIdShort(idShortPathToOperation, body, async, options);
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
         * @summary Creates or updates a Submodel-Element at the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {SubmodelElement} [body] The Submodel-Element object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSubmodelElement(seIdShortPath: string, body?: SubmodelElement, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SubmodelElement> {
            const localVarFetchArgs = SubmodelApiFetchParamCreator(configuration).putSubmodelElement(seIdShortPath, body, options);
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
         * @summary Updates the Submodel-Element's value
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {any} [body] The new value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSubmodelElementValueByIdShort(seIdShortPath: string, body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = SubmodelApiFetchParamCreator(configuration).putSubmodelElementValueByIdShort(seIdShortPath, body, options);
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
 * SubmodelApi - factory interface
 * @export
 */
export const SubmodelApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Deletes a specific Submodel-Element from the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubmodelElementByIdShort(seIdShortPath: string, options?: any) {
            return SubmodelApiFp(configuration).deleteSubmodelElementByIdShort(seIdShortPath, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Retrieves the result of an asynchronously started operation
         * @param {string} idShortPathToOperation The IdShort path to the Operation
         * @param {string} requestId The request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvocationResultByIdShort(idShortPathToOperation: string, requestId: string, options?: any) {
            return SubmodelApiFp(configuration).getInvocationResultByIdShort(idShortPathToOperation, requestId, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Retrieves the entire Submodel
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodel(options?: any) {
            return SubmodelApiFp(configuration).getSubmodel(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Retrieves a specific Submodel-Element from the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelElementByIdShort(seIdShortPath: string, options?: any) {
            return SubmodelApiFp(configuration).getSubmodelElementByIdShort(seIdShortPath, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Retrieves the value of a specific Submodel-Element from the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelElementValueByIdShort(seIdShortPath: string, options?: any) {
            return SubmodelApiFp(configuration).getSubmodelElementValueByIdShort(seIdShortPath, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Retrieves all Submodel-Elements from the Submodel
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelElements(options?: any) {
            return SubmodelApiFp(configuration).getSubmodelElements(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Retrieves the minimized version of a Submodel, i.e. only the values of SubmodelElements are serialized and returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubmodelValues(options?: any) {
            return SubmodelApiFp(configuration).getSubmodelValues(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Invokes a specific operation from the Submodel synchronously or asynchronously
         * @param {string} idShortPathToOperation The IdShort path to the Operation
         * @param {InvocationRequest} [body] The parameterized request object for the invocation
         * @param {boolean} [async] Determines whether the execution of the operation is asynchronous (true) or not (false)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invokeOperationByIdShort(idShortPathToOperation: string, body?: InvocationRequest, async?: boolean, options?: any) {
            return SubmodelApiFp(configuration).invokeOperationByIdShort(idShortPathToOperation, body, async, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Creates or updates a Submodel-Element at the Submodel
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {SubmodelElement} [body] The Submodel-Element object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSubmodelElement(seIdShortPath: string, body?: SubmodelElement, options?: any) {
            return SubmodelApiFp(configuration).putSubmodelElement(seIdShortPath, body, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Updates the Submodel-Element's value
         * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
         * @param {any} [body] The new value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSubmodelElementValueByIdShort(seIdShortPath: string, body?: any, options?: any) {
            return SubmodelApiFp(configuration).putSubmodelElementValueByIdShort(seIdShortPath, body, options)(fetch, basePath);
        },
    };
};

/**
 * SubmodelApi - object-oriented interface
 * @export
 * @class SubmodelApi
 * @extends {BaseAPI}
 */
export class SubmodelApi extends BaseAPI {
    /**
     * 
     * @summary Deletes a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    public deleteSubmodelElementByIdShort(seIdShortPath: string, options?: any) {
        return SubmodelApiFp(this.configuration).deleteSubmodelElementByIdShort(seIdShortPath, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Retrieves the result of an asynchronously started operation
     * @param {string} idShortPathToOperation The IdShort path to the Operation
     * @param {string} requestId The request id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    public getInvocationResultByIdShort(idShortPathToOperation: string, requestId: string, options?: any) {
        return SubmodelApiFp(this.configuration).getInvocationResultByIdShort(idShortPathToOperation, requestId, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Retrieves the entire Submodel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    public getSubmodel(options?: any) {
        return SubmodelApiFp(this.configuration).getSubmodel(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Retrieves a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    public getSubmodelElementByIdShort(seIdShortPath: string, options?: any) {
        return SubmodelApiFp(this.configuration).getSubmodelElementByIdShort(seIdShortPath, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Retrieves the value of a specific Submodel-Element from the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    public getSubmodelElementValueByIdShort(seIdShortPath: string, options?: any) {
        return SubmodelApiFp(this.configuration).getSubmodelElementValueByIdShort(seIdShortPath, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Retrieves all Submodel-Elements from the Submodel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    public getSubmodelElements(options?: any) {
        return SubmodelApiFp(this.configuration).getSubmodelElements(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Retrieves the minimized version of a Submodel, i.e. only the values of SubmodelElements are serialized and returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    public getSubmodelValues(options?: any) {
        return SubmodelApiFp(this.configuration).getSubmodelValues(options)(this.fetch, this.basePath);
    }

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
    public invokeOperationByIdShort(idShortPathToOperation: string, body?: InvocationRequest, async?: boolean, options?: any) {
        return SubmodelApiFp(this.configuration).invokeOperationByIdShort(idShortPathToOperation, body, async, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Creates or updates a Submodel-Element at the Submodel
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {SubmodelElement} [body] The Submodel-Element object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    public putSubmodelElement(seIdShortPath: string, body?: SubmodelElement, options?: any) {
        return SubmodelApiFp(this.configuration).putSubmodelElement(seIdShortPath, body, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Updates the Submodel-Element's value
     * @param {string} seIdShortPath The Submodel-Element&#x27;s IdShort-Path
     * @param {any} [body] The new value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmodelApi
     */
    public putSubmodelElementValueByIdShort(seIdShortPath: string, body?: any, options?: any) {
        return SubmodelApiFp(this.configuration).putSubmodelElementValueByIdShort(seIdShortPath, body, options)(this.fetch, this.basePath);
    }

}
