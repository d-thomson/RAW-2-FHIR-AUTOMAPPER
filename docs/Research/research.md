## Introduction
EMR systems have existed for a long time, and have helped doctors and hospitals streamline operations, however, lack of interoperability amongst different EMR systems is still a massive problem and poses hurdles for both patients and healthcare providers. One solution to this is the use of the FHIR (Fast Healthcare Interoperability Resources), an industry standard API used to promote interoperability. While this seems like a perfect solution, moving data to this standard poses another challenge.

## Why have interoperability
EMR's become more valuable with the ability to share information, in a study done by Regina Corso Consulting, 86% of doctors said they could improve patient care if EMR's were interoperable with other technologies [1]. Having this property gives providers the ability to interact with other vendors that have support for FHIR. The electronic exchange of health information will improve quality of healthcare for both the patient and provider.

## Growth in Adoption of EMR Systems
In 2008, Only 4% of providers utilized EMR systems, compared to 2018 where most of hospitals and 50% of providers utilize EMR systems. On an average, hospitals use more than 10 different EMR vendors – further complicating interoperability [2]. The FHIR standard can potentially solve this problem. However, mapping a large-scale systems data to the FHIR standard is tedious, resource intensive, error prone and time consuming. There is still a need for a tool that can map the databases from different EMR to FHIR.

## Disparate EMR Systems
As EMRs have exploded in adoption over the last 10 years, many standards were developed for different areas. Some existing EMR systems utilize "FHIR Adapters" to solve interoperability with new FHIR standard. Multiple standards were developed in the same areas such as clinical documentation, relationships, and processes. Such standards as ICD-10, NDC, CPT, SNOMED, LOINC and RxNorm need to be taken into consideration when mapping raw data to FHIR resources. Another potential issue is that of data warehousing and analytics platforms. Google Cloud Platform, Amazon AWS and Microsoft Azure cloud services all offer data warehousing and analytics platforms for big data that are often used by healthcare providers. Simply connecting to a database for mappings is not an option here as multiple sources are contributing data. 

## References
[1] https://www.emrandehr.com/2018/07/23/physicians-lack-it-tools-needed-for-value-based-care/  
[2] https://www.healthcareitnews.com/news/why-ehr-data-interoperability-such-mess-3-charts/  
[3] https://vigyanix.com/blog/healthcare-interoperability-opportunities-challenges-solutions/  
