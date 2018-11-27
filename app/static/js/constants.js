Count = []

Goal_Target = ['detailCodeableConcept', 'dueDuration', 'detailRange', 'detailQuantity', '_dueDate', 'measure', 'dueDate']

Goal = ['status', 'category', '_startDate', 'addresses', 'description', 'startDate', 'resourceType', '_statusReason', 'expressedBy', 'startCodeableConcept', 'statusReason', 'priority', 'note', 'outcomeReference', 'outcomeCode', 'target', 'statusDate', '_status', 'identifier', '_statusDate', 'subject']

Age = []

Organization_Contact = ['telecom', 'address', 'purpose', 'name']

Organization = ['endpoint', 'name', 'telecom', 'resourceType', '_active', '_name', 'alias', '_alias', 'contact', 'address', 'active', 'identifier', 'type', 'partOf']

Coding = ['code', 'system', '_version', '_code', 'version', '_display', 'userSelected', '_system', '_userSelected', 'display']

Signature = ['_whoUri', 'onBehalfOfUri', 'onBehalfOfReference', 'when', '_contentType', 'whoUri', '_blob', 'blob', 'contentType', 'whoReference', 'type', '_onBehalfOfUri', '_when']

ExpansionProfile_Exclude = ['designation']

ExpansionProfile_Designation1 = ['_language', 'use', 'language']

ExpansionProfile_Designation = ['exclude', 'include']

ExpansionProfile_Include = ['designation']

ExpansionProfile_FixedVersion = ['_mode', 'system', '_version', 'version', 'mode', '_system']

ExpansionProfile_ExcludedSystem = ['_system', 'system', 'version', '_version']

ExpansionProfile = ['excludeNotForUI', '_description', 'limitedExpansion', 'jurisdiction', '_experimental', '_excludePostCoordinated', '_activeOnly', '_limitedExpansion', '_displayLanguage', '_excludeNested', '_excludeNotForUI', 'activeOnly', '_includeDesignations', 'version', 'fixedVersion', '_status', 'status', 'description', 'excludedSystem', 'useContext', 'date', 'includeDesignations', '_date', 'excludePostCoordinated', 'publisher', '_includeDefinition', 'name', 'designation', 'resourceType', 'displayLanguage', '_version', 'includeDefinition', '_name', 'url', 'contact', '_url', '_publisher', 'excludeNested', 'identifier', 'experimental']

ExpansionProfile_Designation2 = ['_language', 'use', 'language']

Money = []

VisionPrescription = ['status', 'reasonCodeableConcept', 'patient', 'resourceType', 'dispense', 'dateWritten', '_dateWritten', 'prescriber', 'reasonReference', '_status', 'identifier', 'encounter']

VisionPrescription_Dispense = ['diameter', 'cylinder', 'backCurve', 'color', '_add', '_axis', '_backCurve', 'duration', 'axis', 'eye', '_sphere', 'add', 'note', 'prism', '_brand', 'product', '_cylinder', 'power', 'brand', '_diameter', '_eye', 'base', '_base', '_prism', 'sphere', '_power', '_color']

Media = ['height', 'operator', 'bodySite', 'frames', 'reasonCode', '_duration', 'subject', 'note', 'basedOn', 'content', 'width', '_occurrenceDateTime', 'occurrencePeriod', '_frames', 'type', '_type', '_height', 'duration', 'device', 'occurrenceDateTime', 'resourceType', '_width', 'subtype', 'context', 'identifier', 'view']

RelatedArtifact = ['_type', 'resource', 'url', 'citation', 'display', '_url', '_display', 'document', 'type', '_citation']

Measure_Stratifier = ['path', '_path', 'identifier', '_criteria', 'criteria']

Measure_Group = ['stratifier', 'description', '_description', '_name', 'name', 'identifier', 'population']

Measure_Population = ['code', 'description', '_description', '_name', 'criteria', 'identifier', '_criteria', 'name']

Measure_SupplementalData = ['_criteria', 'criteria', 'usage', 'path', 'identifier', '_path']

Measure = ['set', '_description', 'jurisdiction', '_riskAdjustment', 'library', '_experimental', '_copyright', '_improvementNotation', '_lastReviewDate', '_usage', 'contributor', 'clinicalRecommendationStatement', 'scoring', '_definition', 'group', '_disclaimer', 'copyright', 'title', 'guidance', '_purpose', '_guidance', 'improvementNotation', 'lastReviewDate', 'rateAggregation', 'topic', 'version', 'riskAdjustment', 'usage', '_rateAggregation', '_status', 'type', 'status', 'approvalDate', 'supplementalData', '_approvalDate', '_rationale', 'description', 'definition', '_clinicalRecommendationStatement', 'effectivePeriod', 'compositeScoring', 'useContext', 'purpose', 'rationale', 'date', '_title', '_date', 'publisher', 'name', 'resourceType', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'relatedArtifact', 'identifier', '_set', 'experimental', 'disclaimer']

Questionnaire = ['code', '_description', '_subjectType', 'jurisdiction', '_experimental', '_lastReviewDate', '_copyright', 'copyright', 'title', '_purpose', 'lastReviewDate', 'version', '_status', 'status', 'approvalDate', '_approvalDate', 'description', 'item', 'effectivePeriod', 'useContext', 'purpose', 'date', '_title', '_date', 'subjectType', 'publisher', 'name', 'resourceType', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'identifier', 'experimental']

Questionnaire_EnableWhen = ['answerDate', '_answerDateTime', '_answerTime', '_answerDecimal', 'answerReference', '_hasAnswer', 'answerQuantity', 'answerAttachment', 'answerTime', 'question', 'answerDecimal', '_answerString', '_answerUri', '_question', '_answerDate', 'answerUri', 'answerInteger', '_answerInteger', 'answerBoolean', '_answerBoolean', 'hasAnswer', 'answerDateTime', 'answerCoding', 'answerString']

Questionnaire_Item = ['code', '_initialString', 'linkId', 'initialAttachment', 'maxLength', 'prefix', '_repeats', '_maxLength', '_initialDateTime', '_initialBoolean', '_definition', '_initialDate', '_initialUri', 'initialDate', '_prefix', '_required', 'text', 'type', '_type', 'initialCoding', 'option', '_initialTime', 'enableWhen', '_readOnly', 'initialBoolean', 'readOnly', 'initialReference', 'initialInteger', '_text', '_initialDecimal', 'initialTime', 'initialDecimal', 'initialUri', 'definition', '_linkId', 'initialDateTime', 'required', 'initialQuantity', 'item', '_initialInteger', 'initialString', 'repeats', 'options']

Questionnaire_Option = ['valueTime', '_valueString', 'valueInteger', '_valueDate', '_valueTime', 'valueDate', '_valueInteger', 'valueCoding', 'valueString']

DetectedIssue = ['status', 'category', '_detail', 'patient', 'severity', 'reference', '_severity', 'resourceType', 'author', '_reference', 'detail', 'implicated', 'mitigation', 'date', '_status', 'identifier', '_date']

DetectedIssue_Mitigation = ['action', 'date', '_date', 'author']

Observation_ReferenceRange = ['text', 'age', 'high', 'low', '_text', 'type', 'appliesTo']

Observation_Component = ['valueCodeableConcept', 'valueTime', 'code', 'interpretation', '_valueString', '_valueTime', 'valueRange', 'valueQuantity', 'valueRatio', 'valueAttachment', 'referenceRange', '_valueDateTime', 'valueDateTime', 'valuePeriod', 'valueSampledData', 'dataAbsentReason', 'valueString']

Observation = ['comment', 'code', 'interpretation', 'valueAttachment', 'issued', 'related', 'performer', 'bodySite', '_valueDateTime', 'subject', 'category', 'dataAbsentReason', '_valueTime', 'basedOn', 'valueBoolean', 'effectiveDateTime', '_status', 'method', 'valueString', 'status', 'valueCodeableConcept', '_valueString', 'specimen', 'effectivePeriod', 'component', 'valueRange', 'valuePeriod', 'device', 'valueDateTime', 'valueSampledData', 'valueTime', 'identifier', 'resourceType', '_comment', '_effectiveDateTime', 'referenceRange', 'valueQuantity', 'valueRatio', '_valueBoolean', 'context', '_issued']

Observation_Related = ['_type', 'type', 'target']

Condition_Evidence = ['code', 'detail']

Condition = ['_clinicalStatus', 'code', 'abatementRange', 'onsetString', '_onsetDateTime', 'onsetDateTime', 'assertedDate', 'clinicalStatus', 'onsetPeriod', 'bodySite', 'onsetRange', 'abatementPeriod', 'onsetAge', 'subject', 'category', 'severity', '_abatementString', 'note', 'stage', 'evidence', '_abatementDateTime', '_onsetString', '_abatementBoolean', 'abatementString', 'abatementDateTime', 'abatementBoolean', 'asserter', '_assertedDate', 'resourceType', '_verificationStatus', 'abatementAge', 'context', 'identifier', 'verificationStatus']

Condition_Stage = ['assessment', 'summary']

Sequence_Quality = ['_gtFP', '_queryFP', 'truthFN', 'gtFP', '_start', 'end', 'standardSequence', 'start', '_end', 'score', 'type', 'method', '_truthTP', '_type', 'precision', '_fScore', '_truthFN', 'queryTP', 'fScore', '_recall', 'queryFP', 'recall', 'truthTP', '_queryTP', '_precision']

Sequence_ReferenceSeq = ['windowEnd', '_windowEnd', 'referenceSeqString', 'genomeBuild', '_strand', 'referenceSeqPointer', 'referenceSeqId', 'strand', '_windowStart', '_genomeBuild', 'windowStart', 'chromosome', '_referenceSeqString']

Sequence_Variant = ['_observedAllele', 'end', '_cigar', 'observedAllele', 'cigar', 'start', '_end', 'variantPointer', '_start', '_referenceAllele', 'referenceAllele']

Sequence_Repository = ['_type', '_variantsetId', 'name', 'url', 'variantsetId', '_name', '_datasetId', 'readsetId', '_url', '_readsetId', 'type', 'datasetId']

Sequence = ['referenceSeq', '_type', 'performer', 'patient', 'repository', 'observedSeq', 'quantity', 'resourceType', '_observedSeq', 'specimen', 'variant', 'coordinateSystem', 'pointer', '_readCoverage', 'quality', 'device', 'identifier', 'type', 'readCoverage', '_coordinateSystem']

RiskAssessment_Prediction = ['probabilityDecimal', 'probabilityRange', 'rationale', '_relativeRisk', '_probabilityDecimal', 'qualitativeRisk', '_rationale', 'relativeRisk', 'whenRange', 'whenPeriod', 'outcome']

RiskAssessment = ['comment', 'code', 'prediction', 'performer', 'subject', 'reasonCodeableConcept', 'basis', 'basedOn', 'mitigation', '_occurrenceDateTime', 'occurrencePeriod', '_status', 'method', 'status', 'parent', 'occurrenceDateTime', 'condition', 'reasonReference', '_mitigation', 'resourceType', '_comment', 'context', 'identifier']

PaymentReconciliation = ['status', 'requestOrganization', 'outcome', 'form', 'created', 'resourceType', 'requestProvider', 'request', 'period', 'detail', '_disposition', 'disposition', 'organization', 'total', '_created', '_status', 'identifier', 'processNote']

PaymentReconciliation_ProcessNote = ['text', 'type', '_text']

PaymentReconciliation_Detail = ['payee', 'request', 'date', 'amount', 'submitter', 'type', 'response', '_date']

MessageHeader_Destination = ['_endpoint', 'endpoint', 'target', 'name', '_name']

MessageHeader_Response = ['code', '_identifier', 'identifier', 'details', '_code']

MessageHeader_Source = ['endpoint', 'name', '_endpoint', '_version', '_name', '_software', 'version', 'contact', 'software']

MessageHeader = ['_timestamp', 'sender', 'focus', 'author', 'resourceType', 'timestamp', 'destination', 'enterer', 'responsible', 'response', 'source', 'reason', 'receiver', 'event']

OperationDefinition_Parameter = ['_use', '_min', 'use', 'name', 'searchType', 'min', '_searchType', 'max', 'documentation', 'binding', '_type', '_name', 'part', 'profile', '_max', 'type', '_documentation']

OperationDefinition_Binding = ['_valueSetUri', '_strength', 'strength', 'valueSetReference', 'valueSetUri']

OperationDefinition_Overload = ['comment', 'parameterName', '_comment', '_parameterName']

OperationDefinition = ['comment', 'code', '_description', 'jurisdiction', '_experimental', '_system', 'instance', '_idempotent', '_purpose', 'system', 'overload', '_code', 'version', '_status', 'type', 'status', '_type', 'description', '_kind', 'base', 'useContext', 'purpose', 'date', '_date', 'publisher', 'kind', 'resource', 'name', '_resource', '_instance', 'resourceType', 'parameter', '_comment', 'idempotent', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'experimental']

Communication = ['topic', '_sent', 'reasonCode', 'payload', 'subject', 'category', 'basedOn', 'note', '_status', 'sent', 'status', 'medium', 'notDoneReason', 'received', 'recipient', 'definition', 'reasonReference', 'sender', '_notDone', 'resourceType', 'context', '_received', 'notDone', 'identifier', 'partOf']

Communication_Payload = ['contentAttachment', 'contentString', 'contentReference', '_contentString']

BodySite = ['code', 'patient', 'qualifier', '_description', 'resourceType', '_active', 'active', 'identifier', 'image', 'description']

Subscription_Channel = ['_type', 'endpoint', '_endpoint', '_payload', '_header', 'header', 'type', 'payload']

Subscription = ['status', 'end', '_criteria', 'resourceType', 'error', 'tag', 'reason', '_end', 'contact', 'criteria', '_status', '_reason', 'channel', '_error']

DataElement = ['jurisdiction', '_experimental', '_copyright', 'element', 'copyright', 'title', 'version', '_status', 'status', '_stringency', 'mapping', 'useContext', 'date', '_title', '_date', 'publisher', 'stringency', 'name', 'resourceType', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'identifier', 'experimental']

DataElement_Mapping = ['comment', 'name', '_comment', 'uri', '_name', '_uri', '_identity', 'identity']

Practitioner_Qualification = ['code', 'identifier', 'period', 'issuer']

Practitioner = ['photo', 'name', 'resourceType', 'gender', '_active', 'communication', 'birthDate', '_gender', 'telecom', 'qualification', 'address', 'active', 'identifier', '_birthDate']

Specimen_Container = ['capacity', 'description', '_description', 'additiveCodeableConcept', 'additiveReference', 'specimenQuantity', 'identifier', 'type']

Specimen = ['status', '_receivedTime', 'parent', 'accessionIdentifier', 'resourceType', 'receivedTime', 'processing', 'request', 'collection', 'note', 'container', '_status', 'identifier', 'type', 'subject']

Specimen_Processing = ['additive', 'description', '_description', 'timeDateTime', '_timeDateTime', 'timePeriod', 'procedure']

Specimen_Collection = ['collectedPeriod', 'collectedDateTime', '_collectedDateTime', 'bodySite', 'collector', 'method', 'quantity']

ImmunizationRecommendation_Protocol = ['description', '_description', 'series', 'authority', 'doseSequence', '_doseSequence', '_series']

ImmunizationRecommendation_Recommendation = ['protocol', '_doseNumber', 'forecastStatus', 'dateCriterion', 'vaccineCode', 'supportingPatientInformation', 'targetDisease', 'date', '_date', 'doseNumber', 'supportingImmunization']

ImmunizationRecommendation_DateCriterion = ['_value', 'code', 'value']

ImmunizationRecommendation = ['resourceType', 'identifier', 'patient', 'recommendation']

Narrative = ['status', '_status', 'div']

Quantity = ['_comparator', '_unit', 'code', 'comparator', 'system', 'value', '_value', '_code', '_system', 'unit']

CodeSystem_Property1 = ['code', '_valueString', 'valueCode', 'valueInteger', '_valueCode', '_code', '_valueBoolean', 'valueBoolean', 'valueDateTime', '_valueInteger', 'valueCoding', '_valueDateTime', 'valueString']

CodeSystem_Concept = ['concept', 'definition', 'code', 'designation', '_code', '_definition', '_display', 'property', 'display']

CodeSystem = ['concept', '_hierarchyMeaning', 'valueSet', '_description', 'jurisdiction', '_experimental', 'caseSensitive', '_compositional', '_copyright', 'copyright', 'title', '_purpose', 'content', 'version', '_status', '_caseSensitive', 'status', 'description', '_content', 'versionNeeded', 'useContext', 'purpose', 'hierarchyMeaning', 'date', '_title', '_date', 'count', 'publisher', '_count', 'property', 'name', 'resourceType', '_version', '_name', 'filter', 'url', 'contact', '_url', '_publisher', '_versionNeeded', 'identifier', 'compositional', 'experimental', '_valueSet']

CodeSystem_Filter = ['code', 'description', '_description', '_operator', '_value', '_code', 'value', 'operator']

CodeSystem_Designation = ['_language', '_value', 'use', 'value', 'language']

CodeSystem_Property = ['_type', 'code', 'description', '_description', 'uri', '_code', '_uri', 'type']

List_Entry = ['deleted', '_deleted', 'item', 'flag', 'date', '_date']

List = ['status', 'code', 'orderedBy', 'title', 'resourceType', '_mode', 'note', 'source', 'emptyReason', 'mode', 'date', 'entry', '_status', 'identifier', '_date', '_title', 'encounter', 'subject']

HealthcareService_AvailableTime = ['allDay', 'daysOfWeek', 'availableStartTime', '_allDay', '_daysOfWeek', 'availableEndTime', '_availableStartTime', '_availableEndTime']

HealthcareService_NotAvailable = ['during', 'description', '_description']

HealthcareService = ['comment', 'programName', 'telecom', 'photo', 'providedBy', 'referralMethod', 'category', 'eligibilityNote', 'availabilityExceptions', 'location', 'coverageArea', 'type', 'eligibility', 'availableTime', 'specialty', 'endpoint', '_programName', '_eligibilityNote', 'extraDetails', 'appointmentRequired', 'active', '_extraDetails', '_availabilityExceptions', 'notAvailable', 'name', 'resourceType', 'characteristic', '_active', '_appointmentRequired', '_name', 'serviceProvisionCode', 'identifier', '_comment']

AppointmentResponse = ['comment', '_start', 'end', 'resourceType', '_comment', 'actor', 'start', '_end', 'participantType', 'appointment', '_participantStatus', 'identifier', 'participantStatus']

ImplementationGuide_Package = ['description', '_description', 'resource', 'name', '_name']

ImplementationGuide_Dependency = ['_type', '_uri', 'type', 'uri']

ImplementationGuide_Global = ['profile', '_type', 'type']

ImplementationGuide = ['_description', 'jurisdiction', '_experimental', '_copyright', 'binary', 'copyright', 'dependency', 'version', '_status', 'status', 'global', 'description', 'fhirVersion', 'useContext', 'date', '_binary', '_date', 'publisher', 'name', 'package', 'resourceType', '_fhirVersion', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'page', 'experimental']

ImplementationGuide_Page = ['kind', 'title', '_format', 'format', '_source', '_kind', '_type', 'package', 'source', '_package', 'type', '_title', 'page']

ImplementationGuide_Resource = ['_sourceUri', 'description', 'sourceUri', '_description', 'acronym', '_name', 'sourceReference', 'exampleFor', '_example', 'example', '_acronym', 'name']

Provenance = ['target', 'resourceType', '_policy', 'signature', 'recorded', 'period', 'agent', 'entity', 'reason', 'location', 'activity', 'policy', '_recorded']

Provenance_Entity = ['agent', 'whatReference', 'role', 'whatIdentifier', 'whatUri', '_whatUri', '_role']

Provenance_Agent = ['relatedAgentType', '_whoUri', 'onBehalfOfUri', 'onBehalfOfReference', 'whoUri', 'role', 'whoReference', '_onBehalfOfUri']

Group = ['_type', 'code', 'actual', 'name', 'resourceType', 'characteristic', '_active', '_name', 'member', '_actual', 'active', '_quantity', 'identifier', 'type', 'quantity']

Group_Member = ['_inactive', 'inactive', 'period', 'entity']

Group_Characteristic = ['valueCodeableConcept', 'code', 'period', 'valueRange', 'valueQuantity', '_valueBoolean', 'valueBoolean', 'exclude', '_exclude']

AdverseEvent = ['category', 'reaction', 'referenceDocument', 'outcome', 'description', '_description', 'resourceType', '_category', 'suspectEntity', 'subjectMedicalHistory', 'seriousness', 'location', 'eventParticipant', 'date', 'recorder', 'identifier', 'type', 'study', '_date', 'subject']

AdverseEvent_SuspectEntity = ['_causalityProductRelatedness', 'causality', 'causalityMethod', 'causalityProductRelatedness', 'causalityAssessment', 'instance', '_causality', 'causalityAuthor', 'causalityResult']

EnrollmentResponse = ['status', 'requestOrganization', 'outcome', 'created', 'resourceType', 'requestProvider', 'request', '_disposition', 'disposition', 'organization', '_created', '_status', 'identifier']

Coverage = ['_order', 'payor', 'sequence', '_sequence', 'period', 'subscriberId', 'subscriber', 'network', '_network', '_subscriberId', 'beneficiary', '_status', 'type', 'status', 'relationship', 'dependent', 'policyHolder', '_dependent', 'resourceType', 'contract', 'identifier', 'order', 'grouping']

Coverage_Grouping = ['_plan', '_subClass', '_subGroup', 'planDisplay', 'subGroup', 'group', '_groupDisplay', 'subClass', '_group', '_class', 'subClassDisplay', '_classDisplay', '_subGroupDisplay', 'subPlan', 'plan', '_planDisplay', 'class', 'classDisplay', 'subPlanDisplay', '_subPlan', 'groupDisplay', '_subClassDisplay', 'subGroupDisplay', '_subPlanDisplay']

Identifier = ['_use', 'use', 'assigner', 'system', 'value', 'period', '_value', '_system', 'type']

SearchParameter_Component = ['definition', '_expression', 'expression']

SearchParameter = ['xpathUsage', 'xpath', '_derivedFrom', 'code', 'chain', '_description', 'jurisdiction', '_experimental', '_comparator', '_xpathUsage', '_modifier', '_target', '_purpose', '_chain', '_xpath', '_code', 'version', '_status', 'type', 'status', '_type', 'description', 'derivedFrom', 'component', 'base', 'useContext', 'purpose', 'date', '_date', 'target', 'publisher', 'name', 'comparator', 'resourceType', '_expression', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'modifier', 'expression', 'experimental', '_base']

MedicationDispense_Substitution = ['_wasSubstituted', 'reason', 'wasSubstituted', 'type', 'responsibleParty']

MedicationDispense = ['performer', 'eventHistory', 'destination', 'subject', 'category', '_whenHandedOver', '_whenPrepared', 'detectedIssue', 'authorizingPrescription', 'notDoneReasonReference', 'note', 'medicationCodeableConcept', 'notDoneReasonCodeableConcept', '_status', 'type', 'supportingInformation', 'status', 'whenHandedOver', 'substitution', 'whenPrepared', '_notDone', 'resourceType', 'daysSupply', 'dosageInstruction', 'medicationReference', 'context', 'receiver', 'notDone', 'identifier', 'partOf', 'quantity']

MedicationDispense_Performer = ['onBehalfOf', 'actor']

MessageDefinition_AllowedResponse = ['situation', 'message', '_situation']

MessageDefinition_Focus = ['profile', '_min', 'code', 'min', 'max', '_max', '_code']

MessageDefinition = ['_description', '_category', 'jurisdiction', 'focus', '_experimental', '_copyright', 'event', 'category', 'copyright', 'title', '_purpose', 'version', '_status', 'allowedResponse', 'status', '_responseRequired', 'description', 'parent', 'base', 'useContext', 'purpose', 'date', '_title', '_date', 'publisher', 'replaces', 'name', 'resourceType', '_version', '_name', 'url', 'contact', 'responseRequired', '_url', '_publisher', 'identifier', 'experimental']

Account = ['status', 'balance', 'name', '_description', 'resourceType', 'description', 'period', '_name', 'owner', 'coverage', 'active', '_status', 'identifier', 'type', 'guarantor', 'subject']

Account_Guarantor = ['_onHold', 'party', 'onHold', 'period']

Account_Coverage = ['priority', '_priority', 'coverage']

CompartmentDefinition_Resource = ['code', '_param', 'documentation', 'param', '_code', '_documentation']

CompartmentDefinition = ['code', '_description', 'jurisdiction', '_experimental', 'title', '_purpose', '_code', '_status', 'status', 'description', 'useContext', 'purpose', 'date', '_title', '_date', 'publisher', 'search', 'resource', 'name', 'resourceType', '_search', '_name', 'url', 'contact', '_url', '_publisher', 'experimental']

EpisodeOfCare = ['status', 'managingOrganization', 'account', 'statusHistory', 'patient', 'resourceType', 'period', 'careManager', 'referralRequest', 'diagnosis', 'team', '_status', 'identifier', 'type']

EpisodeOfCare_StatusHistory = ['status', '_status', 'period']

EpisodeOfCare_Diagnosis = ['_rank', 'role', 'rank', 'condition']

RequestGroup_Condition = ['kind', 'description', 'language', '_description', '_expression', '_kind', '_language', 'expression']

RequestGroup = ['status', 'definition', 'replaces', 'reasonReference', '_intent', 'groupIdentifier', 'resourceType', 'author', 'basedOn', 'priority', '_priority', 'authoredOn', 'intent', '_authoredOn', 'context', 'action', '_status', 'identifier', 'reasonCodeableConcept', 'note', 'subject']

RequestGroup_Action = ['_label', 'code', 'timingPeriod', '_description', 'condition', 'timingDateTime', 'timingRange', 'requiredBehavior', 'participant', 'title', '_precheckBehavior', 'label', '_textEquivalent', 'type', 'description', 'timingTiming', '_timingDateTime', 'precheckBehavior', '_cardinalityBehavior', '_title', 'relatedAction', '_groupingBehavior', 'resource', '_selectionBehavior', 'timingDuration', 'documentation', 'groupingBehavior', 'textEquivalent', '_requiredBehavior', 'action', 'selectionBehavior', 'cardinalityBehavior']

RequestGroup_RelatedAction = ['relationship', '_actionId', '_relationship', 'offsetRange', 'actionId', 'offsetDuration']

GuidanceResponse = ['status', 'reasonCodeableConcept', 'result', 'performer', 'reasonReference', '_requestId', 'resourceType', 'outputParameters', 'module', 'note', 'evaluationMessage', '_occurrenceDateTime', 'requestId', 'context', 'dataRequirement', '_status', 'identifier', 'occurrenceDateTime', 'subject']

DeviceRequest = ['codeReference', 'relevantHistory', '_priority', 'performer', '_authoredOn', 'reasonCode', 'priorRequest', 'subject', 'note', 'basedOn', 'priority', 'occurrencePeriod', '_occurrenceDateTime', '_status', 'status', 'codeCodeableConcept', 'groupIdentifier', 'supportingInfo', 'intent', 'requester', 'occurrenceDateTime', 'definition', 'authoredOn', 'reasonReference', 'performerType', 'resourceType', 'occurrenceTiming', 'context', 'identifier']

DeviceRequest_Requester = ['onBehalfOf', 'agent']

CommunicationRequest_Payload = ['contentAttachment', 'contentString', 'contentReference', '_contentString']

CommunicationRequest = ['topic', '_priority', '_authoredOn', 'reasonCode', 'payload', 'subject', 'category', 'note', 'basedOn', 'priority', '_occurrenceDateTime', 'occurrencePeriod', '_status', 'status', 'medium', 'groupIdentifier', 'authoredOn', 'requester', 'occurrenceDateTime', 'recipient', 'replaces', 'reasonReference', 'sender', 'resourceType', 'context', 'identifier']

CommunicationRequest_Requester = ['onBehalfOf', 'agent']

DiagnosticReport_Image = ['comment', '_comment', 'link']

DiagnosticReport_Performer = ['role', 'actor']

DiagnosticReport = ['codedDiagnosis', 'code', 'issued', 'image', 'performer', 'result', 'subject', 'category', 'basedOn', 'effectiveDateTime', '_status', 'conclusion', 'status', '_conclusion', 'specimen', 'effectivePeriod', 'presentedForm', 'identifier', 'resourceType', 'imagingStudy', '_effectiveDateTime', 'context', '_issued']

ValueSet_Filter = ['_op', 'value', '_value', '_property', 'property', 'op']

ValueSet_Include = ['concept', 'valueSet', 'system', '_version', 'filter', 'version', '_system', '_valueSet']

ValueSet = ['_purpose', '_description', 'jurisdiction', '_experimental', '_extensible', '_copyright', 'compose', 'copyright', 'title', '_immutable', 'version', '_status', 'immutable', 'status', 'description', 'expansion', 'useContext', 'purpose', 'date', '_title', '_date', 'publisher', 'name', 'resourceType', '_version', '_name', 'url', 'contact', 'extensible', '_url', '_publisher', 'identifier', 'experimental']

ValueSet_Contains = ['_abstract', 'code', 'version', 'designation', 'abstract', 'contains', 'system', '_version', '_code', 'inactive', '_display', '_inactive', '_system', 'display']

ValueSet_Compose = ['lockedDate', '_lockedDate', 'inactive', 'exclude', '_inactive', 'include']

ValueSet_Expansion = ['_total', '_timestamp', 'timestamp', 'contains', '_offset', 'offset', 'total', '_identifier', 'identifier', 'parameter']

ValueSet_Designation = ['_language', '_value', 'use', 'value', 'language']

ValueSet_Concept = ['_code', 'code', 'display', 'designation', '_display']

ValueSet_Parameter = ['_valueCode', '_valueString', 'valueInteger', 'valueUri', 'valueDecimal', 'name', 'valueCode', '_valueBoolean', '_valueUri', 'valueBoolean', '_valueInteger', '_name', '_valueDecimal', 'valueString']

Encounter_Diagnosis = ['_rank', 'role', 'rank', 'condition']

Encounter_StatusHistory = ['status', '_status', 'period']

Encounter_Participant = ['individual', 'type', 'period']

Encounter_Hospitalization = ['origin', 'admitSource', 'specialCourtesy', 'specialArrangement', 'dietPreference', 'reAdmission', 'dischargeDisposition', 'destination', 'preAdmissionIdentifier']

Encounter_ClassHistory = ['class', 'period']

Encounter = ['period', 'statusHistory', 'subject', 'participant', 'priority', 'location', '_status', 'type', 'status', 'appointment', 'hospitalization', 'serviceProvider', 'reason', 'episodeOfCare', 'class', 'incomingReferral', 'account', 'resourceType', 'classHistory', 'length', 'diagnosis', 'identifier', 'partOf']

Encounter_Location = ['status', '_status', 'location', 'period']

Address = ['_use', '_line', 'use', '_district', 'district', 'city', 'text', '_country', '_state', '_type', '_postalCode', 'period', 'country', 'state', '_text', 'postalCode', 'line', '_city', 'type']

Claim_Diagnosis = ['diagnosisCodeableConcept', 'sequence', '_sequence', 'packageCode', 'diagnosisReference', 'type']

Claim_Information = ['category', 'timingDate', '_timingDate', 'code', 'valueReference', 'timingPeriod', 'sequence', '_sequence', '_valueString', 'valueQuantity', 'reason', 'valueAttachment', 'valueString']

Claim_Accident = ['date', 'locationAddress', 'type', 'locationReference', '_date']

Claim = ['_use', 'facility', 'related', 'fundsReserve', 'originalPrescription', 'billablePeriod', 'total', 'insurance', 'information', 'use', 'item', 'enterer', 'priority', 'provider', '_status', 'type', 'status', 'patient', 'hospitalization', 'insurer', 'accident', '_created', 'employmentImpacted', 'referral', 'prescription', 'created', 'resourceType', 'payee', 'subType', 'diagnosis', 'careTeam', 'organization', 'identifier', 'procedure']

Claim_Related = ['claim', 'reference', 'relationship']

Claim_SubDetail = ['category', 'udi', 'service', 'revenue', '_sequence', 'sequence', '_factor', 'factor', 'programCode', 'net', 'modifier', 'unitPrice', 'quantity']

Claim_Payee = ['resourceType', 'party', 'type']

Claim_Detail = ['category', 'udi', 'service', 'revenue', 'subDetail', '_sequence', 'sequence', '_factor', 'factor', 'programCode', 'net', 'modifier', 'unitPrice', 'quantity']

Claim_CareTeam = ['_responsible', 'sequence', '_sequence', 'responsible', 'role', 'qualification', 'provider']

Claim_Procedure = ['sequence', '_sequence', 'procedureReference', 'procedureCodeableConcept', 'date', '_date']

Claim_Item = ['sequence', 'informationLinkId', '_sequence', 'procedureLinkId', 'detail', 'careTeamLinkId', 'bodySite', '_servicedDate', 'subSite', 'category', 'service', '_careTeamLinkId', '_factor', 'revenue', 'diagnosisLinkId', 'factor', 'programCode', 'net', 'locationAddress', 'udi', 'unitPrice', 'encounter', '_procedureLinkId', 'servicedDate', '_diagnosisLinkId', 'servicedPeriod', 'locationCodeableConcept', 'modifier', 'locationReference', '_informationLinkId', 'quantity']

Claim_Insurance = ['businessArrangement', 'sequence', '_preAuthRef', '_sequence', '_focal', 'preAuthRef', 'coverage', '_businessArrangement', 'claimResponse', 'focal']

Person = ['managingOrganization', 'photo', 'name', 'resourceType', 'gender', '_active', 'birthDate', '_gender', 'telecom', 'link', 'address', 'active', 'identifier', '_birthDate']

Person_Link = ['_assurance', 'target', 'assurance']

Slot = ['status', 'overbooked', 'serviceCategory', '_start', 'end', 'schedule', 'resourceType', '_comment', 'serviceType', 'comment', 'specialty', 'start', '_end', 'appointmentType', '_status', 'identifier', '_overbooked']

Location_Position = ['altitude', 'longitude', 'latitude', '_latitude', '_longitude', '_altitude']

Location = ['status', 'managingOrganization', '_mode', 'name', 'telecom', '_description', 'resourceType', '_alias', '_name', 'alias', 'operationalStatus', 'endpoint', 'mode', 'address', 'position', '_status', 'identifier', 'type', 'physicalType', 'partOf', 'description']

DocumentManifest = ['status', '_description', 'author', 'masterIdentifier', 'resourceType', 'recipient', 'description', 'created', 'related', 'content', 'source', '_source', '_created', '_status', 'identifier', 'type', 'subject']

DocumentManifest_Related = ['identifier', 'ref']

DocumentManifest_Content = ['pAttachment', 'pReference']

StructureMap_Rule = ['target', 'dependent', 'documentation', 'rule', '_name', 'source', '_documentation', 'name']

StructureMap_Input = ['_type', 'documentation', 'name', '_mode', '_name', 'mode', 'type', '_documentation']

StructureMap_Target = ['listRuleId', '_context', 'transform', '_variable', '_contextType', '_listMode', '_element', 'element', 'listMode', 'contextType', '_transform', 'context', 'variable', 'parameter', '_listRuleId']

StructureMap = ['_description', 'jurisdiction', '_experimental', '_copyright', 'group', 'copyright', 'title', '_purpose', 'version', 'structure', 'import', '_status', 'status', 'description', '_import', 'useContext', 'purpose', 'date', '_title', '_date', 'publisher', 'name', 'resourceType', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'identifier', 'experimental']

StructureMap_Group = ['typeMode', 'name', '_extends', 'documentation', 'rule', '_name', 'extends', 'input', '_documentation', '_typeMode']

StructureMap_Source = ['defaultValueTime', 'defaultValueAttachment', 'defaultValueExtension', 'defaultValueTriggerDefinition', 'defaultValueBase64Binary', '_defaultValueOid', 'defaultValueUnsignedInt', 'defaultValueContactPoint', 'defaultValueIdentifier', '_defaultValueString', '_defaultValueBoolean', 'defaultValueMarkdown', 'defaultValueDataRequirement', 'defaultValueTiming', 'condition', 'defaultValueReference', 'defaultValueParameterDefinition', 'defaultValueDecimal', 'listMode', 'defaultValueUsageContext', 'min', '_defaultValueId', '_context', '_defaultValueInteger', '_defaultValueDate', 'defaultValueCoding', 'defaultValueId', '_variable', 'defaultValueDosage', 'defaultValueNarrative', 'defaultValueOid', 'defaultValueDate', 'defaultValuePeriod', 'defaultValueElement', '_defaultValuePositiveInt', 'defaultValueElementDefinition', 'defaultValueSignature', 'defaultValueMoney', 'defaultValueDateTime', '_defaultValueUnsignedInt', 'context', 'defaultValueDuration', 'defaultValueCode', 'defaultValuePositiveInt', 'defaultValueQuantity', 'defaultValueSimpleQuantity', 'defaultValueRange', '_defaultValueUuid', '_check', 'type', '_min', 'defaultValueMeta', '_defaultValueDateTime', '_defaultValueCode', 'defaultValueContributor', 'defaultValueInteger', 'defaultValueBackboneElement', 'defaultValueAddress', '_defaultValueInstant', 'defaultValueCount', '_defaultValueTime', '_max', 'defaultValueUri', 'defaultValueRelatedArtifact', 'defaultValueInstant', 'defaultValueBoolean', 'defaultValueContactDetail', '_defaultValueDecimal', 'defaultValueDistance', 'check', 'defaultValueString', 'defaultValueAnnotation', 'defaultValueSampledData', '_defaultValueBase64Binary', '_type', '_defaultValueMarkdown', 'max', 'defaultValueUuid', 'defaultValueAge', 'variable', 'defaultValueRatio', '_condition', '_listMode', '_element', 'element', 'defaultValueCodeableConcept', '_defaultValueUri', 'defaultValueHumanName']

StructureMap_Structure = ['documentation', 'url', '_mode', 'alias', '_alias', 'mode', '_url', '_documentation']

StructureMap_Parameter = ['_valueString', 'valueInteger', 'valueDecimal', '_valueId', '_valueBoolean', 'valueBoolean', '_valueInteger', 'valueId', '_valueDecimal', 'valueString']

StructureMap_Dependent = ['variable', 'name', '_variable', '_name']

EnrollmentRequest = ['status', 'organization', 'created', 'resourceType', 'insurer', 'coverage', 'provider', '_created', '_status', 'identifier', 'subject']

SupplyDelivery_SuppliedItem = ['itemReference', 'itemCodeableConcept', 'quantity']

SupplyDelivery = ['status', 'patient', 'resourceType', 'destination', 'basedOn', '_occurrenceDateTime', 'occurrenceTiming', 'receiver', 'supplier', 'occurrencePeriod', '_status', 'identifier', 'type', 'occurrenceDateTime', 'partOf', 'suppliedItem']

AuditEvent_Agent = ['name', 'reference', 'altId', 'media', '_policy', 'userId', '_name', 'requestor', 'purposeOfUse', 'role', '_altId', '_requestor', 'policy', 'network', 'location']

AuditEvent_Source = ['identifier', 'type', 'site', '_site']

AuditEvent = ['_outcome', 'resourceType', 'outcomeDesc', '_action', 'recorded', '_outcomeDesc', 'entity', 'subtype', 'agent', 'purposeOfEvent', 'action', 'outcome', 'type', '_recorded', 'source']

AuditEvent_Entity = ['name', 'reference', '_description', 'detail', '_name', '_query', 'role', 'query', 'securityLabel', 'identifier', 'type', 'lifecycle', 'description']

AuditEvent_Detail = ['_value', '_type', 'type', 'value']

AuditEvent_Network = ['_address', '_type', 'type', 'address']

ExplanationOfBenefit_Insurance = ['_preAuthRef', 'preAuthRef', 'coverage']

ExplanationOfBenefit_AddItem = ['_sequenceLinkId', 'category', 'sequenceLinkId', 'fee', 'service', 'revenue', '_noteNumber', 'detail', 'adjudication', 'noteNumber', 'modifier']

ExplanationOfBenefit_ProcessNote = ['language', 'text', 'number', '_text', 'type', '_number']

ExplanationOfBenefit_Related = ['claim', 'reference', 'relationship']

ExplanationOfBenefit_Payment = ['identifier', 'adjustmentReason', 'amount', 'date', 'adjustment', 'type', '_date']

ExplanationOfBenefit_Adjudication = ['category', '_value', 'reason', 'amount', 'value']

ExplanationOfBenefit_BenefitBalance = ['category', 'term', 'financial', 'subCategory', '_description', 'description', '_excluded', '_name', 'network', 'excluded', 'unit', 'name']

ExplanationOfBenefit_Detail = ['category', 'udi', '_noteNumber', 'service', 'revenue', 'subDetail', '_sequence', 'sequence', '_factor', 'adjudication', 'unitPrice', 'noteNumber', 'factor', 'programCode', 'net', 'modifier', 'type', 'quantity']

ExplanationOfBenefit_Information = ['category', 'timingDate', '_timingDate', 'code', 'valueReference', 'timingPeriod', 'sequence', '_sequence', '_valueString', 'valueQuantity', 'reason', 'valueAttachment', 'valueString']

ExplanationOfBenefit_SubDetail = ['category', 'udi', '_noteNumber', 'service', 'revenue', '_sequence', 'sequence', '_factor', 'adjudication', 'unitPrice', 'noteNumber', 'factor', 'programCode', 'net', 'modifier', 'type', 'quantity']

ExplanationOfBenefit_Detail1 = ['category', 'fee', 'service', 'revenue', '_noteNumber', 'adjudication', 'noteNumber', 'modifier']

ExplanationOfBenefit = ['claim', 'precedence', 'facility', 'originalPrescription', 'related', 'subType', 'claimResponse', 'billablePeriod', 'processNote', 'insurance', 'totalCost', 'information', 'item', 'enterer', 'provider', '_status', 'type', 'status', 'benefitBalance', 'identifier', 'patient', 'hospitalization', 'form', 'insurer', '_disposition', 'addItem', 'accident', 'disposition', '_created', 'payment', 'employmentImpacted', 'outcome', 'prescription', 'created', 'resourceType', '_precedence', 'totalBenefit', 'unallocDeductable', 'payee', 'diagnosis', 'careTeam', 'organization', 'referral', 'procedure']

ExplanationOfBenefit_Item = ['sequence', 'informationLinkId', '_sequence', 'procedureLinkId', 'adjudication', 'careTeamLinkId', 'bodySite', '_servicedDate', 'subSite', 'category', 'service', '_careTeamLinkId', '_factor', 'revenue', 'diagnosisLinkId', 'factor', 'programCode', 'net', '_noteNumber', 'detail', 'noteNumber', 'locationAddress', 'udi', 'unitPrice', 'encounter', '_procedureLinkId', 'servicedDate', '_diagnosisLinkId', 'servicedPeriod', 'locationCodeableConcept', 'modifier', 'locationReference', '_informationLinkId', 'quantity']

ExplanationOfBenefit_CareTeam = ['_responsible', 'sequence', '_sequence', 'responsible', 'role', 'qualification', 'provider']

ExplanationOfBenefit_Payee = ['resourceType', 'party', 'type']

ExplanationOfBenefit_Procedure = ['sequence', '_sequence', 'procedureReference', 'procedureCodeableConcept', 'date', '_date']

ExplanationOfBenefit_Accident = ['date', 'locationAddress', 'type', 'locationReference', '_date']

ExplanationOfBenefit_Financial = ['allowedUnsignedInt', 'usedMoney', '_allowedUnsignedInt', 'allowedMoney', 'usedUnsignedInt', '_allowedString', '_usedUnsignedInt', 'type', 'allowedString']

ExplanationOfBenefit_Diagnosis = ['diagnosisCodeableConcept', 'sequence', '_sequence', 'packageCode', 'diagnosisReference', 'type']

ConceptMap_Element = ['_code', 'code', 'target', 'display', '_display']

ConceptMap_DependsOn = ['code', '_system', 'system', '_code', '_display', '_property', 'property', 'display']

ConceptMap_Group = ['target', '_target', '_source', 'element', 'sourceVersion', 'source', 'unmapped', '_sourceVersion', 'targetVersion', '_targetVersion']

ConceptMap_Target = ['comment', 'product', 'code', '_code', '_comment', 'equivalence', '_equivalence', '_display', 'dependsOn', 'display']

ConceptMap_Unmapped = ['code', 'url', '_mode', '_code', 'mode', '_url', '_display', 'display']

ConceptMap = ['_description', 'jurisdiction', 'group', '_experimental', '_copyright', '_sourceUri', 'copyright', 'title', '_purpose', 'targetReference', 'targetUri', 'version', '_status', 'status', 'description', 'sourceUri', 'sourceReference', 'useContext', 'purpose', 'date', '_targetUri', '_title', '_date', 'publisher', 'name', 'resourceType', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'identifier', 'experimental']

Resource = ['_implicitRules', 'language', 'meta', '_language', '_id', 'id', 'implicitRules']

DeviceMetric = ['category', 'parent', 'calibration', 'resourceType', '_category', 'measurementPeriod', 'source', 'color', 'operationalStatus', '_operationalStatus', '_color', 'identifier', 'type', 'unit']

DeviceMetric_Calibration = ['_type', '_state', '_time', 'state', 'time', 'type']

ProcedureRequest = ['code', 'relevantHistory', '_priority', 'performer', '_authoredOn', 'reasonCode', 'asNeededBoolean', 'subject', 'category', 'note', 'asNeededCodeableConcept', 'basedOn', 'priority', 'occurrencePeriod', '_occurrenceDateTime', '_status', 'authoredOn', 'status', '_intent', 'specimen', 'supportingInfo', '_doNotPerform', 'intent', 'requester', 'occurrenceDateTime', '_asNeededBoolean', 'definition', 'replaces', 'reasonReference', 'performerType', 'resourceType', 'doNotPerform', 'requisition', 'occurrenceTiming', 'context', 'identifier', 'bodySite']

ProcedureRequest_Requester = ['onBehalfOf', 'agent']

PlanDefinition_Condition = ['kind', 'description', 'language', '_description', '_expression', '_kind', '_language', 'expression']

PlanDefinition_Target = ['detailRange', 'detailQuantity', 'due', 'detailCodeableConcept', 'measure']

PlanDefinition_RelatedAction = ['relationship', '_actionId', '_relationship', 'offsetRange', 'actionId', 'offsetDuration']

PlanDefinition = ['_description', 'jurisdiction', 'library', '_experimental', '_copyright', '_lastReviewDate', '_usage', 'contributor', 'goal', 'copyright', 'title', '_purpose', 'lastReviewDate', 'topic', 'version', 'usage', '_status', 'type', 'status', 'approvalDate', '_approvalDate', 'description', 'effectivePeriod', 'action', 'useContext', 'purpose', 'date', '_title', '_date', 'publisher', 'name', 'resourceType', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'relatedArtifact', 'identifier', 'experimental']

PlanDefinition_Participant = ['role', '_type', 'type']

PlanDefinition_Goal = ['category', 'addresses', 'documentation', 'priority', 'start', 'target', 'description']

PlanDefinition_DynamicValue = ['description', 'language', '_description', '_expression', '_language', 'path', 'expression', '_path']

PlanDefinition_Action = ['_label', 'code', 'timingPeriod', '_description', 'condition', 'timingDateTime', 'timingRange', 'requiredBehavior', 'participant', 'triggerDefinition', 'title', '_precheckBehavior', 'transform', 'label', '_textEquivalent', 'input', 'timingDuration', 'description', 'timingTiming', '_timingDateTime', 'precheckBehavior', 'reason', 'dynamicValue', 'selectionBehavior', '_cardinalityBehavior', 'goalId', '_title', 'relatedAction', 'definition', '_groupingBehavior', '_goalId', '_selectionBehavior', 'type', 'documentation', 'groupingBehavior', 'textEquivalent', '_requiredBehavior', 'action', 'output', 'cardinalityBehavior']

DeviceComponent = ['languageCode', 'productionSpecification', 'parent', 'resourceType', 'parameterGroup', 'lastSystemChange', 'source', 'operationalStatus', 'measurementPrinciple', '_lastSystemChange', '_measurementPrinciple', 'identifier', 'type']

DeviceComponent_ProductionSpecification = ['_productionSpec', 'specType', 'productionSpec', 'componentId']

TestReport_Action = ['assert', 'operation']

TestReport_Teardown = ['action']

TestReport_Participant = ['_type', 'uri', '_uri', '_display', 'type', 'display']

TestReport_Setup = ['action']

TestReport = ['status', '_result', '_issued', 'name', 'tester', 'resourceType', '_score', 'setup', '_tester', '_name', 'teardown', 'score', 'testScript', 'issued', 'test', 'participant', '_status', 'identifier', 'result']

TestReport_Action2 = ['operation']

TestReport_Test = ['action', 'description', '_description', 'name', '_name']

TestReport_Operation = ['_detail', '_message', 'detail', '_result', 'result', 'message']

TestReport_Action1 = ['assert', 'operation']

TestReport_Assert = ['_detail', '_message', 'detail', '_result', 'result', 'message']

Contract_Agent1 = ['role', 'actor']

TestScript_Test = ['action', 'description', '_description', 'name', '_name']

Practitioner_Qualification = ['code', 'identifier', 'period', 'issuer']

GraphDefinition_Link = ['_min', 'description', 'min', 'max', '_description', '_sliceName', '_max', 'target', 'path', 'sliceName', '_path']

TestScript_Rule = ['resource', 'param']

ActivityDefinition = ['productCodeableConcept', 'code', 'timingPeriod', '_description', 'jurisdiction', 'library', '_experimental', '_copyright', 'timingDateTime', '_lastReviewDate', 'bodySite', '_usage', 'contributor', 'participant', 'copyright', 'title', '_purpose', 'transform', 'lastReviewDate', 'topic', 'version', 'location', 'timingRange', 'usage', '_status', 'status', 'approvalDate', '_approvalDate', 'productReference', 'description', 'timingTiming', '_timingDateTime', 'effectivePeriod', '_kind', 'useContext', 'purpose', 'dynamicValue', 'date', '_title', '_date', 'publisher', 'kind', 'name', 'resourceType', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'relatedArtifact', 'identifier', 'dosage', 'experimental', 'quantity']

ElementDefinition_Binding = ['_valueSetUri', 'strength', 'description', '_description', 'valueSetReference', 'valueSetUri', '_strength']

Goal = ['status', 'category', '_startDate', 'addresses', 'description', 'startDate', 'resourceType', '_statusReason', 'expressedBy', 'startCodeableConcept', 'statusReason', 'priority', 'note', 'outcomeReference', 'outcomeCode', 'target', 'statusDate', '_status', 'identifier', '_statusDate', 'subject']

Consent_Policy = ['_authority', '_uri', 'uri', 'authority']

DeviceComponent_ProductionSpecification = ['_productionSpec', 'specType', 'productionSpec', 'componentId']

UsageContext = ['valueCodeableConcept', 'valueQuantity', 'code', 'valueRange']

StructureMap_Source = ['defaultValueTime', 'defaultValueAttachment', 'defaultValueExtension', 'defaultValueTriggerDefinition', 'defaultValueBase64Binary', '_defaultValueOid', 'defaultValueUnsignedInt', 'defaultValueContactPoint', 'defaultValueIdentifier', '_defaultValueString', '_defaultValueBoolean', 'defaultValueMarkdown', 'defaultValueDataRequirement', 'defaultValueTiming', 'condition', 'defaultValueReference', 'defaultValueParameterDefinition', 'defaultValueDecimal', 'listMode', 'defaultValueUsageContext', 'min', '_defaultValueId', '_context', '_defaultValueInteger', '_defaultValueDate', 'defaultValueCoding', 'defaultValueId', '_variable', 'defaultValueDosage', 'defaultValueNarrative', 'defaultValueOid', 'defaultValueDate', 'defaultValuePeriod', 'defaultValueElement', '_defaultValuePositiveInt', 'defaultValueElementDefinition', 'defaultValueSignature', 'defaultValueMoney', 'defaultValueDateTime', '_defaultValueUnsignedInt', 'context', 'defaultValueDuration', 'defaultValueCode', 'defaultValuePositiveInt', 'defaultValueQuantity', 'defaultValueSimpleQuantity', 'defaultValueRange', '_defaultValueUuid', '_check', 'type', '_min', 'defaultValueMeta', '_defaultValueDateTime', '_defaultValueCode', 'defaultValueContributor', 'defaultValueInteger', 'defaultValueBackboneElement', 'defaultValueAddress', '_defaultValueInstant', 'defaultValueCount', '_defaultValueTime', '_max', 'defaultValueUri', 'defaultValueRelatedArtifact', 'defaultValueInstant', 'defaultValueBoolean', 'defaultValueContactDetail', '_defaultValueDecimal', 'defaultValueDistance', 'check', 'defaultValueString', 'defaultValueAnnotation', 'defaultValueSampledData', '_defaultValueBase64Binary', '_type', '_defaultValueMarkdown', 'max', 'defaultValueUuid', 'defaultValueAge', 'variable', 'defaultValueRatio', '_condition', '_listMode', '_element', 'element', 'defaultValueCodeableConcept', '_defaultValueUri', 'defaultValueHumanName']

TestReport_Operation = ['_detail', '_message', 'detail', '_result', 'result', 'message']

Encounter = ['period', 'statusHistory', 'subject', 'participant', 'priority', 'location', '_status', 'type', 'status', 'appointment', 'hospitalization', 'serviceProvider', 'reason', 'episodeOfCare', 'class', 'incomingReferral', 'account', 'resourceType', 'classHistory', 'length', 'diagnosis', 'identifier', 'partOf']

TestScript_Action1 = ['assert', 'operation']

TestScript_Action2 = ['operation']

RequestGroup_Condition = ['kind', 'description', 'language', '_description', '_expression', '_kind', '_language', 'expression']

CapabilityStatement_Software = ['name', '_releaseDate', '_version', '_name', 'releaseDate', 'version']

HealthcareService = ['comment', 'programName', 'telecom', 'photo', 'providedBy', 'referralMethod', 'category', 'eligibilityNote', 'availabilityExceptions', 'location', 'coverageArea', 'type', 'eligibility', 'availableTime', 'specialty', 'endpoint', '_programName', '_eligibilityNote', 'extraDetails', 'appointmentRequired', 'active', '_extraDetails', '_availabilityExceptions', 'notAvailable', 'name', 'resourceType', 'characteristic', '_active', '_appointmentRequired', '_name', 'serviceProvisionCode', 'identifier', '_comment']

CodeSystem_Concept = ['concept', 'definition', 'code', 'designation', '_code', '_definition', '_display', 'property', 'display']

TestScript_Action = ['assert', 'operation']

Reference = ['identifier', '_reference', 'display', 'reference', '_display']

TestScript_RequestHeader = ['_value', 'field', '_field', 'value']

CapabilityStatement_Interaction1 = ['_code', 'code', '_documentation', 'documentation']

CapabilityStatement_SupportedMessage = ['definition', '_mode', 'mode']

CapabilityStatement_Messaging = ['endpoint', 'supportedMessage', '_reliableCache', 'event', 'reliableCache', '_documentation', 'documentation']

CapabilityStatement_Security = ['description', 'certificate', '_description', '_cors', 'service', 'cors']

CapabilityStatement_SearchParam = ['definition', '_type', '_definition', 'name', 'documentation', '_name', 'type', '_documentation']

CapabilityStatement_Rest = ['documentation', 'resource', 'operation', '_mode', '_compartment', 'interaction', 'searchParam', 'mode', 'security', 'compartment', '_documentation']

CapabilityStatement_Implementation = ['url', 'description', '_url', '_description']

CapabilityStatement = ['profile', '_implementationGuide', 'patchFormat', '_description', 'jurisdiction', 'rest', '_experimental', 'implementationGuide', '_copyright', 'copyright', 'title', 'implementation', '_format', '_purpose', 'version', '_patchFormat', '_status', 'acceptUnknown', '_instantiates', 'status', 'description', 'fhirVersion', 'format', '_kind', '_acceptUnknown', 'useContext', 'purpose', 'date', '_title', '_date', 'instantiates', 'publisher', 'kind', 'document', 'name', 'resourceType', '_fhirVersion', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'messaging', 'experimental', 'software']

CapabilityStatement_Interaction = ['_code', 'code', '_documentation', 'documentation']

CapabilityStatement_Software = ['name', '_releaseDate', '_version', '_name', 'releaseDate', 'version']

CapabilityStatement_Operation = ['definition', 'name', '_name']

CapabilityStatement_Document = ['profile', '_documentation', '_mode', 'mode', 'documentation']

CapabilityStatement_Resource = ['_conditionalRead', '_versioning', 'conditionalCreate', 'conditionalRead', 'searchInclude', 'updateCreate', 'conditionalUpdate', '_conditionalCreate', 'type', 'profile', '_type', 'conditionalDelete', '_conditionalDelete', '_searchInclude', 'searchRevInclude', '_searchRevInclude', 'readHistory', '_documentation', 'interaction', '_updateCreate', '_referencePolicy', 'documentation', '_readHistory', 'referencePolicy', 'searchParam', '_conditionalUpdate', 'versioning']

CapabilityStatement_Event = ['category', 'code', '_category', '_mode', 'request', 'focus', '_focus', 'mode', '_documentation', 'response', 'documentation']

CapabilityStatement_Certificate = ['_type', '_blob', 'type', 'blob']

CapabilityStatement_Endpoint = ['_address', 'protocol', 'address']

Ratio = ['denominator', 'numerator']

TriggerDefinition = ['_eventTimingDateTime', '_type', 'eventTimingDateTime', '_eventName', 'eventTimingTiming', 'eventTimingDate', 'eventName', 'eventData', 'eventTimingReference', 'type', '_eventTimingDate']

StructureDefinition_Snapshot = ['element']

StructureDefinition = ['_abstract', '_context', '_description', 'abstract', 'jurisdiction', '_experimental', '_copyright', 'copyright', 'title', '_purpose', 'version', '_baseDefinition', '_status', 'contextInvariant', 'type', 'status', '_type', 'description', 'fhirVersion', '_contextType', '_derivation', '_kind', 'mapping', 'baseDefinition', 'derivation', 'useContext', 'purpose', 'date', '_title', '_date', '_contextInvariant', 'publisher', 'kind', 'context', 'name', 'keyword', 'resourceType', 'differential', '_fhirVersion', '_version', '_name', 'url', 'contextType', 'contact', 'snapshot', '_url', '_publisher', 'identifier', 'experimental']

StructureDefinition_Mapping = ['comment', 'name', '_comment', 'uri', '_name', '_uri', '_identity', 'identity']

StructureDefinition_Differential = ['element']

QuestionnaireResponse_Answer = ['valueAttachment', 'valueTime', 'valueUri', 'valueReference', '_valueString', 'valueInteger', '_valueDate', 'item', '_valueTime', 'valueDecimal', 'valueQuantity', '_valueBoolean', '_valueUri', 'valueBoolean', 'valueDate', 'valueDateTime', '_valueInteger', 'valueCoding', '_valueDateTime', '_valueDecimal', 'valueString']

QuestionnaireResponse_Item = ['definition', '_definition', 'linkId', '_text', 'item', 'text', 'answer', '_linkId', 'subject']

QuestionnaireResponse = ['status', 'parent', 'author', 'resourceType', 'item', 'basedOn', 'source', 'context', 'questionnaire', 'identifier', '_authored', '_status', 'authored', 'subject']

Bundle_Request = ['_ifNoneMatch', 'url', '_ifNoneExist', 'ifNoneMatch', 'ifModifiedSince', 'ifNoneExist', '_ifMatch', '_url', 'ifMatch', '_ifModifiedSince', 'method', '_method']

Bundle_Search = ['score', '_mode', 'mode', '_score']

Bundle = ['_total', '_type', 'identifier', 'resourceType', 'link', 'signature', 'entry', 'total', 'type']

Bundle_Link = ['url', '_relation', 'relation', '_url']

Bundle_Entry = ['search', 'resource', '_fullUrl', 'request', 'response', 'link', 'fullUrl']

Bundle_Response = ['status', '_location', 'lastModified', 'etag', 'location', '_lastModified', '_status', 'outcome', '_etag']

Parameters_Parameter = ['valueContactDetail', '_valueMarkdown', 'valueExtension', '_valueUri', '_valueOid', 'valueParameterDefinition', 'valueDecimal', 'valueNarrative', '_valueCode', '_valueBoolean', '_valueInteger', 'valueReference', '_valueDateTime', '_valueBase64Binary', '_valueUuid', 'valueCodeableConcept', 'valueIdentifier', 'valueElement', 'valueBackboneElement', 'valueOid', 'valueDistance', '_valueDate', 'valueTiming', '_valueTime', 'valueRatio', 'valueCode', '_valueInstant', 'valueBoolean', 'valueDataRequirement', 'valueUnsignedInt', 'valueCoding', 'valueId', '_valuePositiveInt', 'valueMarkdown', 'valueString', 'valueAnnotation', '_valueString', 'valueSignature', 'valueInteger', 'valueAddress', 'valueHumanName', 'valueUri', '_valueId', 'valuePositiveInt', 'valueRange', 'valueTriggerDefinition', 'valueDosage', 'valueContactPoint', 'valueSimpleQuantity', 'valueDate', 'valueAge', 'valueDateTime', 'part', 'valueUsageContext', 'valueSampledData', 'valueTime', '_valueUnsignedInt', 'valuePeriod', 'resource', 'name', 'valueDuration', 'valueElementDefinition', 'valueContributor', 'valueMoney', 'valueInstant', '_name', 'valueMeta', 'valueQuantity', 'valueCount', 'valueAttachment', 'valueRelatedArtifact', 'valueUuid', 'valueBase64Binary', '_valueDecimal']

Parameters = ['parameter']

DomainResource = ['text', 'contained', 'modifierExtension', 'extension']

DeviceUseStatement = ['status', 'bodySite', '_recordedOn', 'timingPeriod', 'whenUsed', 'resourceType', '_timingDateTime', 'recordedOn', 'note', 'timingTiming', 'timingDateTime', 'indication', 'source', 'device', '_status', 'identifier', 'subject']

Endpoint = ['status', 'managingOrganization', 'name', '_address', 'resourceType', 'header', 'period', 'connectionType', '_name', 'payloadType', 'contact', '_header', 'address', '_status', 'identifier', 'payloadMimeType', '_payloadMimeType']

DocumentReference_Related = ['identifier', 'ref']

DocumentReference = ['_description', 'securityLabel', 'subject', 'author', '_docStatus', 'content', 'indexed', '_status', 'type', 'status', 'description', 'masterIdentifier', 'custodian', 'relatesTo', 'authenticator', 'docStatus', 'class', 'created', 'resourceType', 'context', '_created', 'identifier', '_indexed']

DocumentReference_Context = ['practiceSetting', 'sourcePatientInfo', 'period', 'related', 'facilityType', 'event', 'encounter']

DocumentReference_RelatesTo = ['_code', 'code', 'target']

DocumentReference_Content = ['attachment', 'format']

Appointment = ['comment', 'serviceCategory', '_description', '_priority', '_start', 'slot', 'end', 'priority', 'start', '_end', '_status', 'requestedPeriod', '_minutesDuration', 'status', 'serviceType', 'description', 'specialty', 'reason', 'minutesDuration', 'participant', 'incomingReferral', 'created', 'resourceType', '_comment', 'indication', 'supportingInformation', 'appointmentType', '_created', 'identifier']

Appointment_Participant = ['status', 'required', 'actor', '_required', '_status', 'type']

Substance_Ingredient = ['substanceReference', 'substanceCodeableConcept', 'quantity']

Substance_Instance = ['identifier', '_expiry', 'quantity', 'expiry']

Substance = ['status', 'category', 'code', 'description', '_description', 'resourceType', 'instance', '_status', 'identifier', 'ingredient']

ContactPoint = ['_use', '_rank', 'use', 'system', 'value', 'period', '_value', 'rank', '_system']

ContactDetail = ['telecom', 'name', '_name']

OperationOutcome = ['resourceType', 'issue']

OperationOutcome_Issue = ['code', 'severity', '_severity', '_diagnostics', '_expression', '_code', '_location', 'details', 'diagnostics', 'expression', 'location']

ServiceDefinition = ['_description', 'jurisdiction', '_experimental', '_copyright', '_lastReviewDate', '_usage', 'contributor', 'copyright', 'title', 'trigger', '_purpose', 'lastReviewDate', 'topic', 'version', 'usage', '_status', 'status', 'approvalDate', '_approvalDate', 'description', 'operationDefinition', 'effectivePeriod', 'dataRequirement', 'useContext', 'purpose', 'date', '_title', '_date', 'publisher', 'name', 'resourceType', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'relatedArtifact', 'identifier', 'experimental']

HumanName = ['_use', 'use', 'suffix', 'family', '_prefix', 'text', '_given', 'given', 'period', 'prefix', '_text', '_suffix', '_family']

TestScript_Test = ['action', 'description', '_description', 'name', '_name']

TestScript_Assert = ['_label', 'headerField', '_description', '_navigationLinks', '_contentType', '_compareToSourcePath', '_compareToSourceExpression', 'value', 'operator', '_direction', 'compareToSourceId', '_headerField', '_requestMethod', 'validateProfileId', '_operator', 'label', 'compareToSourcePath', 'ruleset', '_response', 'direction', 'contentType', 'description', 'navigationLinks', 'requestURL', '_requestURL', '_minimumId', '_value', '_responseCode', '_sourceId', 'path', 'compareToSourceExpression', 'response', '_warningOnly', 'resource', '_resource', 'sourceId', 'warningOnly', '_expression', 'rule', 'requestMethod', 'minimumId', '_compareToSourceId', 'responseCode', '_validateProfileId', 'expression', '_path']

TestScript_Link = ['url', 'description', '_url', '_description']

TestScript_Param1 = ['_value', 'name', 'value', '_name']

TestScript_Param2 = ['_value', 'name', 'value', '_name']

TestScript_Param3 = ['_value', 'name', 'value', '_name']

TestScript_Rule = ['resource', 'param']

TestScript_Operation = ['origin', '_label', '_requestId', '_targetId', '_description', '_encodeRequestUrl', 'responseId', 'accept', 'requestHeader', '_destination', 'destination', 'label', '_responseId', 'params', 'requestId', 'type', '_contentType', 'contentType', 'description', 'targetId', '_sourceId', '_origin', '_params', 'encodeRequestUrl', 'resource', '_resource', 'sourceId', '_accept', 'url', '_url']

TestScript_Rule1 = ['_ruleId', 'param', 'ruleId']

TestScript_Capability = ['origin', '_destination', 'destination', 'description', '_description', 'required', '_validated', '_link', '_required', 'link', 'capabilities', '_origin', 'validated']

TestScript_Action1 = ['assert', 'operation']

TestScript_RequestHeader = ['_value', 'field', '_field', 'value']

TestScript_Destination = ['profile', 'index', '_index']

TestScript_Origin = ['profile', 'index', '_index']

TestScript_Fixture = ['_autodelete', 'resource', '_autocreate', 'autodelete', 'autocreate']

TestScript_Action2 = ['operation']

TestScript = ['origin', 'profile', 'destination', '_description', 'jurisdiction', 'fixture', '_experimental', 'variable', '_copyright', 'copyright', 'title', 'teardown', '_purpose', 'version', 'ruleset', 'test', '_status', 'metadata', 'status', 'description', 'useContext', 'purpose', 'date', '_title', '_date', 'publisher', 'name', 'resourceType', 'setup', '_version', 'rule', '_name', 'url', 'contact', '_url', '_publisher', 'identifier', 'experimental']

TestScript_Ruleset = ['resource', 'rule']

TestScript_Variable = ['_defaultValue', '_headerField', 'description', 'headerField', '_description', 'sourceId', 'defaultValue', 'hint', '_name', '_hint', '_sourceId', 'path', '_path', 'expression', '_expression', 'name']

TestScript_Action = ['assert', 'operation']

TestScript_Teardown = ['action']

TestScript_Ruleset1 = ['rulesetId', 'rule', '_rulesetId']

TestScript_Param = ['_value', 'name', 'value', '_name']

TestScript_Rule2 = ['_ruleId', 'param', 'ruleId']

TestScript_Rule3 = ['_ruleId', 'param', 'ruleId']

TestScript_Setup = ['action']

TestScript_Metadata = ['capability', 'link']

Reference = ['identifier', '_reference', 'display', 'reference', '_display']

Task_Restriction = ['repetitions', 'recipient', '_repetitions', 'period']

Task = ['restriction', 'code', '_description', 'executionPeriod', 'requester', 'focus', 'statusReason', '_priority', '_authoredOn', 'owner', 'definitionReference', 'note', 'for', 'basedOn', 'priority', '_definitionUri', 'input', '_status', 'status', 'description', '_intent', 'groupIdentifier', 'definitionUri', 'reason', 'intent', 'relevantHistory', '_lastModified', 'businessStatus', 'authoredOn', 'performerType', 'resourceType', 'lastModified', 'context', 'output', 'identifier', 'partOf']

Task_Input = ['valueContactDetail', '_valueMarkdown', 'valueExtension', '_valueUri', '_valueOid', '_valuePositiveInt', 'valueParameterDefinition', 'valueDecimal', 'valueNarrative', '_valueCode', '_valueBoolean', '_valueInteger', 'valueReference', '_valueDateTime', '_valueBase64Binary', '_valueUuid', 'valueCodeableConcept', 'valueIdentifier', 'valueElement', 'valueBackboneElement', 'valueOid', 'valueDistance', '_valueDate', 'valueTiming', '_valueTime', 'valueRatio', 'valueCode', '_valueInstant', 'valueBoolean', 'valueDataRequirement', 'valueUnsignedInt', 'valueCoding', 'valueId', 'type', 'valueMarkdown', 'valueString', 'valueAnnotation', '_valueString', 'valueSignature', 'valueInteger', 'valueAddress', 'valueHumanName', 'valueUri', '_valueId', 'valuePositiveInt', 'valueRange', 'valueTriggerDefinition', 'valueDosage', 'valueContactPoint', 'valueSimpleQuantity', 'valueDate', 'valueAge', 'valueDateTime', 'valueUsageContext', 'valueSampledData', 'valueTime', '_valueUnsignedInt', 'valuePeriod', 'valueDuration', 'valueElementDefinition', 'valueContributor', 'valueMoney', 'valueInstant', 'valueMeta', 'valueQuantity', 'valueCount', 'valueAttachment', 'valueRelatedArtifact', 'valueUuid', 'valueBase64Binary', '_valueDecimal']

Task_Output = ['valueContactDetail', '_valueMarkdown', 'valueExtension', '_valueUri', '_valueOid', '_valuePositiveInt', 'valueParameterDefinition', 'valueDecimal', 'valueNarrative', '_valueCode', '_valueBoolean', '_valueInteger', 'valueReference', '_valueDateTime', '_valueBase64Binary', '_valueUuid', 'valueCodeableConcept', 'valueIdentifier', 'valueElement', 'valueBackboneElement', 'valueOid', 'valueDistance', '_valueDate', 'valueTiming', '_valueTime', 'valueRatio', 'valueCode', '_valueInstant', 'valueBoolean', 'valueDataRequirement', 'valueUnsignedInt', 'valueCoding', 'valueId', 'type', 'valueMarkdown', 'valueString', 'valueAnnotation', '_valueString', 'valueSignature', 'valueInteger', 'valueAddress', 'valueHumanName', 'valueUri', '_valueId', 'valuePositiveInt', 'valueRange', 'valueTriggerDefinition', 'valueDosage', 'valueContactPoint', 'valueSimpleQuantity', 'valueDate', 'valueAge', 'valueDateTime', 'valueUsageContext', 'valueSampledData', 'valueTime', '_valueUnsignedInt', 'valuePeriod', 'valueDuration', 'valueElementDefinition', 'valueContributor', 'valueMoney', 'valueInstant', 'valueMeta', 'valueQuantity', 'valueCount', 'valueAttachment', 'valueRelatedArtifact', 'valueUuid', 'valueBase64Binary', '_valueDecimal']

Task_Requester = ['onBehalfOf', 'agent']

ElementDefinition_Type = ['profile', 'code', '_targetProfile', '_profile', 'aggregation', '_code', 'targetProfile', '_aggregation', '_versioning', 'versioning']

ElementDefinition_Discriminator = ['path', '_type', 'type', '_path']

ElementDefinition = ['_maxValueTime', 'defaultValueTime', 'code', '_fixedId', 'maxValueDecimal', 'fixedDistance', 'patternAddress', 'fixedMoney', 'maxValueInteger', 'patternRatio', 'defaultValueAttachment', 'defaultValueExtension', 'fixedDosage', 'mapping', '_patternString', 'fixedDataRequirement', 'defaultValueTriggerDefinition', 'defaultValueBase64Binary', 'maxValueDateTime', 'defaultValueUnsignedInt', 'patternSimpleQuantity', 'defaultValueContactPoint', 'defaultValueIdentifier', 'isSummary', '_defaultValueString', '_representation', 'patternTiming', 'fixedString', '_fixedDecimal', 'fixedTime', 'fixedAttachment', '_defaultValueBoolean', '_patternTime', 'patternDecimal', 'patternBase64Binary', 'defaultValueMarkdown', 'patternCodeableConcept', 'defaultValueDataRequirement', '_patternInstant', 'fixedInstant', 'slicing', 'patternIdentifier', 'fixedCode', 'fixedBase64Binary', '_maxValueUnsignedInt', 'maxLength', 'patternOid', 'fixedElement', 'defaultValueTiming', 'patternNarrative', 'minValueTime', 'patternDateTime', 'fixedQuantity', 'patternId', 'patternContactDetail', 'defaultValueReference', 'fixedAddress', 'patternContributor', 'fixedContactPoint', 'fixedUuid', 'defaultValueParameterDefinition', 'defaultValueDecimal', 'orderMeaning', '_maxValueDate', 'defaultValueUsageContext', 'min', '_fixedOid', 'fixedBoolean', 'mustSupport', '_minValueDate', '_defaultValueId', 'fixedCount', '_patternBoolean', 'fixedContactDetail', '_fixedUuid', '_defaultValueInteger', '_minValueInteger', '_minValuePositiveInt', '_patternMarkdown', '_defaultValueDate', 'fixedDate', '_patternCode', '_patternPositiveInt', 'maxValuePositiveInt', '_patternBase64Binary', 'defaultValueCoding', 'defaultValueId', 'fixedUri', '_minValueTime', 'fixedInteger', 'patternRange', '_definition', 'defaultValueDosage', '_fixedString', 'fixedSignature', 'patternMarkdown', 'defaultValueNarrative', 'label', 'fixedDateTime', 'defaultValueOid', '_alias', 'patternPositiveInt', 'minValueDate', 'fixedId', 'patternInstant', 'defaultValueDate', 'defaultValuePeriod', '_fixedDate', 'patternBackboneElement', 'minValueDecimal', 'patternAttachment', 'defaultValueElement', '_requirements', 'fixedTriggerDefinition', '_fixedTime', 'base', 'fixedUnsignedInt', '_maxValueDateTime', 'path', '_defaultValuePositiveInt', 'fixedAnnotation', 'definition', 'defaultValueElementDefinition', 'maxValueTime', 'constraint', 'defaultValueSignature', 'defaultValueMoney', 'defaultValueDateTime', '_isModifier', '_defaultValueUnsignedInt', 'fixedDecimal', 'fixedMarkdown', 'fixedBackboneElement', 'patternCount', 'defaultValueDuration', 'patternContactPoint', 'comment', '_label', 'defaultValueCode', 'patternMeta', '_minValueDecimal', 'defaultValuePositiveInt', 'defaultValueQuantity', 'minValueUnsignedInt', 'defaultValueSimpleQuantity', 'patternAnnotation', 'patternDate', '_isSummary', 'defaultValueRange', '_defaultValueUuid', 'fixedContributor', '_maxLength', '_patternId', 'fixedTiming', 'patternUuid', '_patternUnsignedInt', 'patternRelatedArtifact', 'fixedPositiveInt', '_fixedMarkdown', 'fixedElementDefinition', 'patternTime', 'patternUri', 'fixedAge', 'fixedParameterDefinition', 'isModifier', 'fixedUsageContext', '_patternDate', '_maxValuePositiveInt', '_meaningWhenMissing', 'fixedCoding', 'type', 'patternQuantity', '_min', 'maxValueInstant', '_maxValueInteger', 'defaultValueMeta', '_mustSupport', 'patternDataRequirement', '_defaultValueMarkdown', 'patternAge', 'fixedOid', '_fixedBase64Binary', 'maxValueUnsignedInt', '_defaultValueCode', 'patternSampledData', 'defaultValueContributor', 'defaultValueInteger', 'minValueQuantity', 'meaningWhenMissing', 'maxValueQuantity', 'defaultValueBackboneElement', 'defaultValueAddress', '_patternUuid', '_defaultValueInstant', 'defaultValueCount', '_defaultValueTime', 'patternDosage', '_comment', '_max', '_minValueDateTime', 'defaultValueUri', '_minValueInstant', 'fixedRange', 'fixedSampledData', 'example', '_fixedCode', 'fixedCodeableConcept', 'patternElementDefinition', '_patternOid', '_orderMeaning', 'binding', '_short', 'defaultValueRelatedArtifact', 'condition', 'patternHumanName', '_patternUri', 'minValuePositiveInt', 'fixedNarrative', 'patternDistance', 'fixedRatio', 'sliceName', '_patternDecimal', 'fixedIdentifier', 'defaultValueBoolean', 'patternParameterDefinition', 'fixedDuration', 'defaultValueContactDetail', 'fixedReference', 'requirements', 'patternCode', '_defaultValueDecimal', 'defaultValueDistance', '_fixedUnsignedInt', 'patternUnsignedInt', '_fixedDateTime', 'defaultValueString', '_sliceName', 'fixedHumanName', 'defaultValueAnnotation', 'patternTriggerDefinition', 'patternInteger', 'defaultValueSampledData', 'fixedMeta', '_fixedInteger', 'minValueInteger', 'patternExtension', 'fixedSimpleQuantity', '_defaultValueBase64Binary', '_fixedInstant', 'patternSignature', 'minValueInstant', '_defaultValueDateTime', 'minValueDateTime', '_fixedBoolean', 'patternMoney', 'patternBoolean', 'max', 'patternUsageContext', 'patternString', 'fixedRelatedArtifact', 'contentReference', 'defaultValueUuid', 'defaultValueAge', 'patternDuration', '_contentReference', '_patternInteger', 'defaultValueRatio', 'patternReference', '_maxValueInstant', 'fixedPeriod', 'short', '_patternDateTime', '_condition', '_defaultValueOid', 'maxValueDate', 'patternCoding', 'defaultValueInstant', 'alias', 'patternElement', 'defaultValueCodeableConcept', '_defaultValueUri', 'patternPeriod', 'fixedExtension', '_maxValueDecimal', 'representation', '_fixedUri', '_minValueUnsignedInt', '_fixedPositiveInt', 'defaultValueHumanName', '_path']

ElementDefinition_Constraint = ['_human', 'xpath', 'requirements', 'severity', '_severity', '_key', 'human', '_source', '_requirements', 'source', '_xpath', 'key', 'expression', '_expression']

ElementDefinition_Example = ['valueContactDetail', '_label', '_valueMarkdown', 'valueExtension', '_valueUri', '_valueOid', 'valueParameterDefinition', 'valueDecimal', 'valueNarrative', '_valueCode', '_valueBoolean', '_valueInteger', 'valueReference', '_valueDateTime', '_valueBase64Binary', '_valueUuid', 'valueCodeableConcept', 'valueIdentifier', 'valueElement', 'valueBackboneElement', 'valueOid', 'valueDistance', '_valueDate', 'valueTiming', '_valueTime', 'valueRatio', 'label', 'valueCode', '_valueInstant', 'valueBoolean', 'valueDataRequirement', 'valueUnsignedInt', 'valueCoding', 'valueId', '_valuePositiveInt', 'valueMarkdown', 'valueString', 'valueAnnotation', '_valueString', 'valueSignature', 'valueInteger', 'valueAddress', 'valueHumanName', 'valueUri', '_valueId', 'valuePositiveInt', 'valueRange', 'valueTriggerDefinition', 'valueDosage', 'valueContactPoint', 'valueSimpleQuantity', 'valueDate', 'valueAge', 'valueDateTime', 'valueUsageContext', 'valueSampledData', 'valueTime', '_valueUnsignedInt', 'valuePeriod', 'valueDuration', 'valueElementDefinition', 'valueContributor', 'valueMoney', 'valueInstant', 'valueMeta', 'valueQuantity', 'valueCount', 'valueAttachment', 'valueRelatedArtifact', 'valueUuid', 'valueBase64Binary', '_valueDecimal']

ElementDefinition_Base = ['_min', 'min', 'max', '_max', 'path', '_path']

ElementDefinition_Mapping = ['comment', 'map', 'language', '_map', '_comment', '_language', '_identity', 'identity']

ElementDefinition_Slicing = ['ordered', 'description', '_description', 'rules', '_rules', '_ordered', 'discriminator']

ElementDefinition_Binding = ['_valueSetUri', 'strength', 'description', '_description', 'valueSetReference', 'valueSetUri', '_strength']

Immunization_Reaction = ['date', 'reported', 'detail', '_date', '_reported']

Immunization = ['_primarySource', 'site', '_expirationDate', 'expirationDate', 'practitioner', '_lotNumber', '_notGiven', 'note', 'encounter', '_status', 'location', 'status', 'patient', 'reportOrigin', 'explanation', 'doseQuantity', 'lotNumber', 'date', 'primarySource', '_date', 'manufacturer', 'reaction', 'notGiven', 'resourceType', 'route', 'vaccineCode', 'vaccinationProtocol', 'identifier']

Immunization_VaccinationProtocol = ['seriesDoses', 'description', '_seriesDoses', '_description', 'series', 'doseStatusReason', 'authority', 'doseSequence', '_doseSequence', 'doseStatus', 'targetDisease', '_series']

Immunization_Practitioner = ['role', 'actor']

Immunization_Explanation = ['reason', 'reasonNotGiven']

Flag = ['status', 'category', 'code', 'author', 'resourceType', 'period', '_status', 'identifier', 'encounter', 'subject']

Library = ['_description', 'jurisdiction', '_experimental', '_copyright', '_lastReviewDate', '_usage', 'contributor', 'copyright', 'title', '_purpose', 'lastReviewDate', 'content', 'topic', 'version', 'usage', '_status', 'type', 'status', 'approvalDate', '_approvalDate', 'description', 'effectivePeriod', 'dataRequirement', 'useContext', 'purpose', 'date', '_title', '_date', 'publisher', 'name', 'resourceType', 'parameter', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'relatedArtifact', 'identifier', 'experimental']

ReferralRequest_Requester = ['onBehalfOf', 'agent']

ReferralRequest = ['_description', 'relevantHistory', '_priority', '_authoredOn', 'reasonCode', 'subject', 'note', 'basedOn', 'serviceRequested', 'priority', 'occurrencePeriod', '_occurrenceDateTime', '_status', 'type', 'status', 'description', '_intent', 'groupIdentifier', 'specialty', 'supportingInfo', 'authoredOn', 'intent', 'requester', 'occurrenceDateTime', 'recipient', 'definition', 'replaces', 'reasonReference', 'resourceType', 'context', 'identifier']

Distance = []

Attachment = ['_contentType', 'contentType', '_hash', 'language', 'title', 'url', 'creation', '_creation', '_url', '_language', '_size', '_data', 'data', '_title', 'hash', 'size']

ParameterDefinition = ['_use', '_min', 'use', 'name', 'min', 'max', 'documentation', '_type', '_name', 'profile', '_max', 'type', '_documentation']

Contributor = ['_type', 'contact', 'type', 'name', '_name']

UsageContext = ['valueCodeableConcept', 'valueQuantity', 'code', 'valueRange']

Linkage_Item = ['resource', '_type', 'type']

Linkage = ['resourceType', 'active', '_active', 'item', 'author']

BackboneElement = ['modifierExtension']

SupplyRequest = ['status', 'category', 'authoredOn', 'reasonReference', 'resourceType', 'deliverTo', 'orderedItem', 'priority', 'deliverFrom', '_priority', 'reasonCodeableConcept', '_occurrenceDateTime', 'occurrenceTiming', 'requester', 'supplier', 'occurrencePeriod', '_status', 'identifier', 'occurrenceDateTime', '_authoredOn']

SupplyRequest_OrderedItem = ['itemReference', 'itemCodeableConcept', 'quantity']

SupplyRequest_Requester = ['onBehalfOf', 'agent']

Device = ['_expirationDate', 'expirationDate', 'owner', '_lotNumber', '_manufacturer', 'note', 'version', 'safety', 'location', '_status', 'type', 'status', 'patient', 'lotNumber', 'udi', '_manufactureDate', 'manufacturer', '_model', 'resourceType', '_version', 'manufactureDate', 'url', 'contact', '_url', 'model', 'identifier']

Device_Udi = ['deviceIdentifier', 'name', 'carrierHRF', '_carrierHRF', 'jurisdiction', '_jurisdiction', '_name', '_issuer', '_deviceIdentifier', 'carrierAIDC', '_carrierAIDC', '_entryType', 'entryType', 'issuer']

Timing = ['code', '_event', 'event', 'repeat']

Timing_Repeat = ['periodUnit', 'durationUnit', 'frequencyMax', 'period', 'frequency', 'duration', 'periodMax', '_durationMax', '_durationUnit', '_periodMax', 'countMax', '_offset', '_frequency', 'when', '_duration', 'timeOfDay', '_periodUnit', 'dayOfWeek', '_timeOfDay', 'boundsRange', '_frequencyMax', '_dayOfWeek', 'offset', '_when', 'count', '_count', 'boundsPeriod', 'boundsDuration', 'durationMax', '_period', '_countMax']

Medication_Content = ['itemReference', 'amount', 'itemCodeableConcept']

Medication = ['status', '_isBrand', 'code', 'isOverTheCounter', 'form', '_isOverTheCounter', 'resourceType', 'image', 'package', 'isBrand', '_status', 'ingredient', 'manufacturer']

Medication_Ingredient = ['itemReference', 'amount', '_isActive', 'itemCodeableConcept', 'isActive']

Medication_Batch = ['_expirationDate', '_lotNumber', 'lotNumber', 'expirationDate']

Medication_Package = ['content', 'container', 'batch']

MeasureReport_Group = ['stratifier', 'measureScore', 'identifier', '_measureScore', 'population']

MeasureReport = ['status', '_type', 'patient', 'resourceType', 'period', 'evaluatedResources', 'reportingOrganization', 'measure', 'date', 'group', '_status', 'identifier', 'type', '_date']

MeasureReport_Population1 = ['code', 'count', '_count', 'identifier', 'patients']

MeasureReport_Stratifier = ['identifier', 'stratum']

MeasureReport_Population = ['code', 'count', '_count', 'identifier', 'patients']

MeasureReport_Stratum = ['_value', 'measureScore', '_measureScore', 'value', 'population']

ClinicalImpression_Finding = ['itemReference', 'itemCodeableConcept', '_basis', 'basis']

ClinicalImpression = ['prognosisCodeableConcept', 'code', 'protocol', '_description', 'summary', 'previous', 'note', 'investigation', 'prognosisReference', 'finding', 'effectiveDateTime', '_status', 'subject', 'assessor', 'status', '_summary', 'description', 'effectivePeriod', '_protocol', 'date', '_date', 'resourceType', '_effectiveDateTime', 'context', 'action', 'problem', 'identifier']

ClinicalImpression_Investigation = ['item', 'code']

ProcessResponse = ['status', 'requestOrganization', 'outcome', 'form', 'created', 'resourceType', 'requestProvider', 'request', '_disposition', 'communicationRequest', 'error', 'disposition', 'organization', '_created', '_status', 'identifier', 'processNote']

ProcessResponse_ProcessNote = ['text', 'type', '_text']

Patient_Contact = ['name', 'relationship', 'telecom', 'gender', 'period', '_gender', 'address', 'organization']

Patient_Link = ['_type', 'other', 'type']

Patient_Communication = ['_preferred', 'preferred', 'language']

Patient = ['maritalStatus', 'telecom', 'photo', 'birthDate', '_gender', 'generalPractitioner', '_multipleBirthBoolean', 'managingOrganization', 'deceasedDateTime', 'multipleBirthInteger', 'animal', 'communication', '_deceasedBoolean', 'multipleBirthBoolean', '_deceasedDateTime', '_multipleBirthInteger', 'link', 'address', 'active', 'name', 'resourceType', 'gender', '_active', 'deceasedBoolean', 'contact', 'identifier', '_birthDate']

Patient_Animal = ['genderStatus', 'breed', 'species']

Basic = ['code', 'created', 'resourceType', 'author', '_created', 'identifier', 'subject']

MedicationAdministration_Performer = ['onBehalfOf', 'actor']

MedicationAdministration = ['performer', 'reasonCode', 'subject', 'category', 'reasonNotGiven', 'eventHistory', 'note', 'medicationCodeableConcept', 'effectiveDateTime', '_status', 'supportingInformation', 'status', 'effectivePeriod', 'device', 'reasonReference', '_notGiven', 'definition', 'prescription', 'notGiven', 'resourceType', '_effectiveDateTime', 'medicationReference', 'context', 'identifier', 'dosage', 'partOf']

MedicationAdministration_Dosage = ['text', 'route', 'site', 'dose', 'rateRatio', 'rateSimpleQuantity', '_text', 'method']

SampledData = ['origin', '_dimensions', 'dimensions', 'lowerLimit', '_factor', 'period', '_lowerLimit', '_period', '_upperLimit', 'factor', '_data', 'data', 'upperLimit']

PaymentNotice = ['status', 'organization', '_statusDate', 'created', 'resourceType', 'request', 'paymentStatus', 'provider', 'statusDate', '_created', '_status', 'identifier', 'response', 'target']

CarePlan_Detail = ['code', 'scheduledString', '_description', 'statusReason', 'productCodeableConcept', 'performer', 'reasonCode', 'category', 'dailyAmount', 'goal', 'location', '_status', 'status', 'productReference', 'description', '_scheduledString', 'prohibited', 'definition', 'reasonReference', 'scheduledPeriod', '_statusReason', 'scheduledTiming', '_prohibited', 'quantity']

CarePlan = ['addresses', '_description', 'period', 'subject', 'category', 'goal', 'title', 'basedOn', 'note', '_status', 'status', 'description', '_intent', 'supportingInfo', 'intent', '_title', 'definition', 'replaces', 'resourceType', 'author', 'context', 'activity', 'careTeam', 'identifier', 'partOf']

CarePlan_Activity = ['progress', 'outcomeCodeableConcept', 'outcomeReference', 'reference', 'detail']

GraphDefinition = ['profile', '_description', '_profile', 'jurisdiction', '_experimental', '_start', '_purpose', 'start', 'version', '_status', 'status', 'description', 'useContext', 'purpose', 'date', '_date', 'publisher', 'name', 'resourceType', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'link', 'experimental']

GraphDefinition_Target = ['profile', '_type', '_profile', 'link', 'compartment', 'type']

GraphDefinition_Compartment = ['code', 'description', '_description', '_expression', '_rule', 'rule', '_code', 'expression']

GraphDefinition_Link = ['_min', 'description', 'min', 'max', '_description', '_sliceName', '_max', 'target', 'path', 'sliceName', '_path']

Annotation = ['_text', '_authorString', 'text', 'authorReference', 'authorString', '_time', 'time']

Extension = ['valueContactDetail', '_valueMarkdown', 'valueExtension', '_valueUri', '_valueOid', 'valueParameterDefinition', 'valueDecimal', 'valueNarrative', '_valueCode', '_valueBoolean', '_valueInteger', 'valueReference', '_valueDateTime', '_valueBase64Binary', '_valueUuid', 'valueCodeableConcept', 'valueIdentifier', 'valueElement', 'valueBackboneElement', 'valueOid', 'valueDistance', '_valueDate', 'valueTiming', '_valueTime', 'valueRatio', 'valueCode', '_valueInstant', 'valueBoolean', 'valueDataRequirement', 'valueUnsignedInt', 'valueCoding', 'valueId', '_valuePositiveInt', 'valueMarkdown', 'valueString', 'valueAnnotation', '_valueString', 'valueSignature', 'valueInteger', 'valueAddress', 'valueHumanName', 'valueUri', '_valueId', 'valuePositiveInt', 'valueRange', 'valueTriggerDefinition', 'valueDosage', 'valueContactPoint', 'valueSimpleQuantity', 'valueDate', 'valueAge', 'valueDateTime', 'valueUsageContext', 'valueSampledData', 'valueTime', '_valueUnsignedInt', 'valuePeriod', 'valueDuration', 'url', 'valueElementDefinition', 'valueContributor', 'valueMoney', 'valueInstant', 'valueMeta', 'valueQuantity', 'valueCount', 'valueAttachment', 'valueRelatedArtifact', '_url', 'valueUuid', 'valueBase64Binary', '_valueDecimal']

CodeableConcept = ['text', 'coding', '_text']

DataRequirement_CodeFilter = ['valueCodeableConcept', '_valueSetString', 'valueSetString', 'valueSetReference', '_valueCode', 'valueCode', 'path', 'valueCoding', '_path']

DataRequirement_DateFilter = ['valuePeriod', 'valueDuration', 'valueDateTime', 'path', '_valueDateTime', '_path']

DataRequirement = ['profile', '_mustSupport', '_type', 'dateFilter', '_profile', 'codeFilter', 'mustSupport', 'type']

Period = ['start', '_end', '_start', 'end']

ProcessRequest = ['_exclude', 'reference', 'period', 'exclude', '_reference', 'provider', '_status', 'include', 'status', '_include', 'nullify', '_created', 'response', 'target', 'created', 'resourceType', '_action', 'request', 'item', 'action', 'organization', '_nullify', 'identifier']

ProcessRequest_Item = ['_sequenceLinkId', 'sequenceLinkId']

EligibilityResponse_Error = ['code']

EligibilityResponse_Financial = ['allowedUnsignedInt', 'usedMoney', '_allowedUnsignedInt', 'allowedMoney', 'usedUnsignedInt', '_allowedString', '_usedUnsignedInt', 'type', 'allowedString']

EligibilityResponse_BenefitBalance = ['category', 'term', 'financial', 'subCategory', '_description', 'description', '_excluded', '_name', 'network', 'excluded', 'unit', 'name']

EligibilityResponse = ['status', 'requestOrganization', 'outcome', 'form', 'created', 'resourceType', 'inforce', 'insurer', 'request', '_disposition', 'error', 'disposition', 'requestProvider', '_inforce', '_created', '_status', 'identifier', 'insurance']

EligibilityResponse_Insurance = ['benefitBalance', 'contract', 'coverage']

Contract_Legal = ['contentAttachment', 'contentReference']

Contract_Agent1 = ['role', 'actor']

Contract_ValuedItem1 = ['_effectiveTime', 'effectiveTime', '_factor', 'entityReference', 'points', 'factor', 'entityCodeableConcept', 'net', 'identifier', 'unitPrice', '_points', 'quantity']

Contract = ['domain', 'issued', 'authority', 'topic', 'subType', 'securityLabel', 'subject', 'legal', 'actionReason', '_status', 'type', 'friendly', 'status', 'valuedItem', 'action', 'agent', 'decisionType', 'contentDerivative', 'term', 'identifier', 'resourceType', 'bindingAttachment', 'rule', 'applies', 'signer', 'bindingReference', '_issued']

Contract_Friendly = ['contentAttachment', 'contentReference']

Contract_Term = ['valuedItem', '_issued', 'group', 'issued', '_text', 'agent', 'topic', 'subType', 'text', 'actionReason', 'applies', 'action', 'securityLabel', 'identifier', 'type']

Contract_Rule = ['contentAttachment', 'contentReference']

Contract_Signer = ['party', 'type', 'signature']

Contract_Agent = ['role', 'actor']

Contract_ValuedItem = ['_effectiveTime', 'effectiveTime', '_factor', 'entityReference', 'points', 'factor', 'entityCodeableConcept', 'net', 'identifier', 'unitPrice', '_points', 'quantity']

ResearchStudy_Arm = ['description', 'code', '_description', 'name', '_name']

ResearchStudy = ['protocol', '_description', 'jurisdiction', 'principalInvestigator', 'focus', 'reasonStopped', 'sponsor', 'arm', 'category', 'title', 'note', '_status', 'status', 'description', 'period', 'relatedArtifact', '_title', 'keyword', 'resourceType', 'enrollment', 'contact', 'site', 'identifier', 'partOf']

FamilyMemberHistory = ['note', 'deceasedAge', '_deceasedDate', '_ageString', 'deceasedDate', '_gender', '_bornString', 'reasonCode', 'deceasedRange', 'ageRange', '_estimatedAge', 'bornDate', 'bornString', 'deceasedString', '_deceasedString', 'estimatedAge', 'bornPeriod', 'condition', '_status', 'status', 'patient', 'relationship', '_deceasedBoolean', '_bornDate', 'notDone', 'date', '_date', 'definition', 'ageString', 'reasonReference', 'name', '_notDone', 'resourceType', 'gender', '_name', 'deceasedBoolean', 'notDoneReason', 'ageAge', 'identifier']

FamilyMemberHistory_Condition = ['code', 'onsetString', '_onsetString', 'note', 'onsetPeriod', 'onsetRange', 'onsetAge', 'outcome']

PractitionerRole = ['code', 'practitioner', 'endpoint', 'resourceType', 'availabilityExceptions', '_active', 'availableTime', 'period', 'specialty', 'telecom', '_availabilityExceptions', 'location', 'healthcareService', 'active', 'organization', 'identifier', 'notAvailable']

PractitionerRole_AvailableTime = ['allDay', 'daysOfWeek', 'availableStartTime', '_allDay', '_daysOfWeek', 'availableEndTime', '_availableStartTime', '_availableEndTime']

PractitionerRole_NotAvailable = ['during', 'description', '_description']

ResearchSubject = ['status', 'resourceType', 'consent', 'study', '_assignedArm', 'period', 'actualArm', 'individual', '_status', 'identifier', 'assignedArm', '_actualArm']

Dosage = ['sequence', '_sequence', 'maxDosePerLifetime', 'rateRatio', 'rateSimpleQuantity', 'asNeededBoolean', 'asNeededCodeableConcept', 'additionalInstruction', 'maxDosePerPeriod', 'doseRange', 'text', 'method', '_patientInstruction', '_text', 'timing', '_asNeededBoolean', 'route', 'maxDosePerAdministration', 'doseSimpleQuantity', 'site', 'patientInstruction', 'rateRange']

ImagingManifest_Series = ['instance', '_uid', 'endpoint', 'uid']

ImagingManifest = ['authoringTime', 'patient', 'description', 'author', 'resourceType', 'study', '_description', 'identifier', '_authoringTime']

ImagingManifest_Study = ['series', '_uid', 'endpoint', 'uid', 'imagingStudy']

ImagingManifest_Instance = ['sopClass', '_uid', '_sopClass', 'uid']

CareTeam = ['status', 'category', 'participant', 'name', 'managingOrganization', 'resourceType', 'period', '_name', 'note', 'reasonReference', 'context', 'reasonCode', '_status', 'identifier', 'subject']

CareTeam_Participant = ['member', 'onBehalfOf', 'role', 'period']

ImagingStudy_Series = ['performer', 'endpoint', 'description', '_description', 'started', 'laterality', '_availability', 'availability', 'number', 'numberOfInstances', 'instance', '_uid', 'bodySite', '_numberOfInstances', 'uid', '_started', 'modality', '_number']

ImagingStudy_Instance = ['uid', 'title', 'sopClass', 'number', '_uid', '_sopClass', '_title', '_number']

ImagingStudy = ['uid', '_description', 'series', 'procedureReference', 'accession', 'modalityList', '_uid', 'numberOfSeries', 'interpreter', 'availability', '_availability', 'basedOn', 'procedureCode', '_started', 'patient', 'description', 'started', 'numberOfInstances', 'reason', 'endpoint', 'resourceType', 'referrer', '_numberOfSeries', 'context', '_numberOfInstances', 'identifier']

ActivityDefinition = ['productCodeableConcept', 'code', 'timingPeriod', '_description', 'jurisdiction', 'library', '_experimental', '_copyright', 'timingDateTime', '_lastReviewDate', 'bodySite', '_usage', 'contributor', 'participant', 'copyright', 'title', '_purpose', 'transform', 'lastReviewDate', 'topic', 'version', 'location', 'timingRange', 'usage', '_status', 'status', 'approvalDate', '_approvalDate', 'productReference', 'description', 'timingTiming', '_timingDateTime', 'effectivePeriod', '_kind', 'useContext', 'purpose', 'dynamicValue', 'date', '_title', '_date', 'publisher', 'kind', 'name', 'resourceType', '_version', '_name', 'url', 'contact', '_url', '_publisher', 'relatedArtifact', 'identifier', 'dosage', 'experimental', 'quantity']

ActivityDefinition_Participant = ['role', '_type', 'type']

ActivityDefinition_DynamicValue = ['description', 'language', '_description', '_expression', '_language', 'path', 'expression', '_path']

MedicationRequest_Requester = ['onBehalfOf', 'agent']

MedicationRequest_DispenseRequest = ['performer', 'expectedSupplyDuration', 'numberOfRepeatsAllowed', '_numberOfRepeatsAllowed', 'validityPeriod', 'quantity']

MedicationRequest_Substitution = ['_allowed', 'reason', 'allowed']

MedicationRequest = ['dispenseRequest', '_priority', '_authoredOn', 'reasonCode', 'subject', 'category', 'note', 'detectedIssue', 'eventHistory', 'basedOn', 'priority', 'medicationCodeableConcept', '_status', 'supportingInformation', 'status', '_intent', 'groupIdentifier', 'intent', 'requester', 'recorder', 'definition', 'authoredOn', 'reasonReference', 'resourceType', 'substitution', 'dosageInstruction', 'medicationReference', 'context', 'identifier', 'priorPrescription']

EligibilityRequest = ['status', 'businessArrangement', 'organization', 'patient', 'benefitSubCategory', 'created', 'resourceType', 'provider', 'enterer', 'servicedDate', 'priority', 'servicedPeriod', 'facility', 'coverage', '_created', '_servicedDate', '_status', 'identifier', 'benefitCategory', 'insurer', '_businessArrangement']

Range = ['high', 'low']

Schedule = ['comment', 'serviceCategory', 'resourceType', '_active', 'serviceType', 'actor', 'specialty', 'planningHorizon', 'active', 'identifier', '_comment']

Procedure_FocalDevice = ['action', 'manipulated']

Procedure = ['performedPeriod', 'code', 'usedCode', 'performer', 'bodySite', 'reasonCode', 'subject', 'category', 'complication', 'basedOn', 'note', 'location', '_status', 'complicationDetail', 'status', 'followUp', 'usedReference', 'notDoneReason', '_performedDateTime', 'focalDevice', 'report', 'definition', 'outcome', 'reasonReference', '_notDone', 'resourceType', 'performedDateTime', 'context', 'notDone', 'identifier', 'partOf']

Procedure_Performer = ['onBehalfOf', 'role', 'actor']

Duration = []

MedicationStatement = ['dateAsserted', 'reasonCode', '_effectiveDateTime', 'subject', 'category', 'basedOn', 'note', 'medicationCodeableConcept', 'taken', 'effectiveDateTime', '_status', 'status', 'informationSource', 'context', 'derivedFrom', 'effectivePeriod', 'reasonNotTaken', 'reasonReference', 'resourceType', '_dateAsserted', 'medicationReference', '_taken', 'identifier', 'dosage', 'partOf']

RelatedPerson = ['patient', 'name', 'relationship', 'resourceType', 'gender', '_active', 'period', 'birthDate', '_gender', 'telecom', 'address', 'active', 'identifier', '_birthDate', 'photo']

Consent_Data = ['meaning', '_meaning', 'reference']

Consent_Policy = ['_authority', '_uri', 'uri', 'authority']

Consent = ['sourceAttachment', 'dataPeriod', 'period', 'securityLabel', 'category', 'except', 'actor', 'policy', '_policyRule', '_status', 'status', 'patient', 'consentingParty', 'policyRule', 'sourceReference', 'purpose', 'data', 'resourceType', 'dateTime', '_dateTime', 'action', 'organization', 'sourceIdentifier', 'identifier']

Consent_Actor1 = ['role', 'reference']

Consent_Actor = ['role', 'reference']

Consent_Data1 = ['meaning', '_meaning', 'reference']

Consent_Except = ['_type', 'code', 'dataPeriod', 'period', 'actor', 'data', 'purpose', 'action', 'securityLabel', 'type', 'class']

ChargeItem = ['code', 'priceOverride', 'subject', '_definition', 'participant', '_factorOverride', 'requestingOrganization', 'enterer', 'note', '_occurrenceDateTime', 'bodysite', 'occurrencePeriod', '_status', 'supportingInformation', 'status', 'performingOrganization', 'reason', '_enteredDate', 'occurrenceDateTime', 'definition', 'account', 'service', 'factorOverride', 'resourceType', 'overrideReason', '_overrideReason', 'occurrenceTiming', 'context', 'enteredDate', 'identifier', 'partOf', 'quantity']

ChargeItem_Participant = ['role', 'actor']

AllergyIntolerance = ['_clinicalStatus', 'code', 'onsetString', '_onsetDateTime', '_category', 'onsetDateTime', 'assertedDate', 'clinicalStatus', 'onsetPeriod', 'onsetRange', 'lastOccurrence', 'onsetAge', 'category', '_lastOccurrence', 'note', '_criticality', 'recorder', 'type', '_type', 'patient', 'criticality', '_onsetString', 'asserter', '_assertedDate', 'reaction', 'resourceType', '_verificationStatus', 'identifier', 'verificationStatus']

AllergyIntolerance_Reaction = ['note', 'substance', 'description', '_description', '_severity', '_onset', 'onset', 'exposureRoute', 'manifestation', 'severity']

Composition_Attester = ['_time', '_mode', 'mode', 'party', 'time']

Composition_Section = ['code', 'title', 'text', 'section', '_mode', 'orderedBy', 'emptyReason', 'mode', 'entry', '_title']

Composition = ['status', '_confidentiality', 'confidentiality', 'author', 'resourceType', 'custodian', 'attester', 'title', 'relatesTo', 'event', '_title', '_date', 'section', 'date', '_status', 'identifier', 'type', 'class', 'encounter', 'subject']

Composition_Event = ['code', 'period', 'detail']

Composition_RelatesTo = ['_code', 'code', 'targetReference', 'targetIdentifier']

Binary = ['_contentType', 'securityContext', '_content', 'resourceType', 'content', 'contentType']

ClaimResponse_SubDetail = ['_sequenceLinkId', 'sequenceLinkId', '_noteNumber', 'noteNumber', 'adjudication']

ClaimResponse_Payment = ['identifier', 'adjustmentReason', 'amount', 'date', 'adjustment', 'type', '_date']

ClaimResponse_Detail1 = ['category', 'fee', 'service', 'revenue', '_noteNumber', 'adjudication', 'noteNumber', 'modifier']

ClaimResponse_ProcessNote = ['language', 'text', 'number', '_text', 'type', '_number']

ClaimResponse_Error = ['_sequenceLinkId', 'sequenceLinkId', 'code', '_detailSequenceLinkId', '_subdetailSequenceLinkId', 'subdetailSequenceLinkId', 'detailSequenceLinkId']

ClaimResponse_Item = ['_sequenceLinkId', 'sequenceLinkId', '_noteNumber', 'detail', 'adjudication', 'noteNumber']

ClaimResponse = ['reserved', 'requestProvider', 'payeeType', 'processNote', 'insurance', 'totalCost', 'communicationRequest', '_status', 'status', 'patient', 'form', 'insurer', '_disposition', 'addItem', 'disposition', 'payment', 'requestOrganization', 'identifier', 'created', 'resourceType', 'request', 'totalBenefit', 'unallocDeductable', 'item', 'error', '_created', 'outcome']

ClaimResponse_AddItem = ['_sequenceLinkId', 'category', 'sequenceLinkId', 'fee', 'service', 'revenue', '_noteNumber', 'detail', 'adjudication', 'noteNumber', 'modifier']

ClaimResponse_Insurance = ['businessArrangement', 'sequence', '_preAuthRef', '_sequence', '_focal', 'preAuthRef', 'coverage', '_businessArrangement', 'claimResponse', 'focal']

ClaimResponse_Detail = ['_sequenceLinkId', 'sequenceLinkId', 'subDetail', '_noteNumber', 'adjudication', 'noteNumber']

ClaimResponse_Adjudication = ['category', '_value', 'reason', 'amount', 'value']

NutritionOrder_Administration = ['rateRatio', 'quantity', 'rateSimpleQuantity', 'schedule']

NutritionOrder_Nutrient = ['amount', 'modifier']

NutritionOrder_Texture = ['modifier', 'foodType']

NutritionOrder_EnteralFormula = ['_baseFormulaProductName', 'baseFormulaProductName', '_additiveProductName', 'additiveType', 'administrationInstruction', 'administration', '_administrationInstruction', 'additiveProductName', 'maxVolumeToDeliver', 'routeofAdministration', 'baseFormulaType', 'caloricDensity']

NutritionOrder_OralDiet = ['_instruction', 'schedule', 'instruction', 'texture', 'fluidConsistencyType', 'nutrient', 'type']

NutritionOrder_Supplement = ['_instruction', 'schedule', '_productName', 'instruction', 'productName', 'type', 'quantity']

NutritionOrder = ['status', 'patient', 'enteralFormula', 'resourceType', 'foodPreferenceModifier', 'dateTime', '_dateTime', 'orderer', 'supplement', 'allergyIntolerance', 'excludeFoodModifier', '_status', 'identifier', 'oralDiet', 'encounter']

Meta = ['profile', '_profile', 'lastUpdated', 'versionId', 'tag', '_lastUpdated', 'security', '_versionId']

NamingSystem_UniqueId = ['comment', '_type', '_comment', 'period', 'preferred', '_value', 'value', '_preferred', 'type']

NamingSystem = ['_description', 'jurisdiction', '_usage', '_responsible', 'responsible', 'uniqueId', 'usage', '_status', 'type', 'status', 'description', '_kind', 'replacedBy', 'useContext', 'date', '_date', 'publisher', 'kind', 'name', 'resourceType', '_name', 'contact', '_publisher']

