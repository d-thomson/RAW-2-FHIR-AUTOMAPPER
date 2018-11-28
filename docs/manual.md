Every application MUST include an “as detailed as necessary” manual. All of the documentation that you submit with your final project should be treated as an official document – this includes the manual. Therefore, any manual that is not carefully structured or clearly written will result in significant point loss. Additionally, your Team Name, Team Members, Project Name and GitHub link should be included in this file. It shall be called “Manual – <Team Name>.pdf.”

# Raw to FHIR Auto-mapper Manual
**Team Vnnnng**:
  * Kevaugn Brown
  * Bryan Gorges,
  * Zach Hanley
  * Sumit Kumar
  * Steven Seidman
  * Daniel Thomson
  
**github link:** https://github.gatech.edu/gt-cs6440-hit-fall2018/RAW-2-FHIR-AUTOMAPPER

## Introduction

One of the greatest difficulties in the healthcare industry today is the lack of interoperabilty between all of the technological applications that have been created within the ecosystem. This lack of interoperability is specifically an issue in the case of EMRs or Electronic Medical Records. EMRs were created to allow for the collection and storage of patient and population health information in a digital format. Moving these records to a digital format allowed for many benefits such as a more accurate system that could reduce the risk of erro, immediate data access rather than tracking down all previous paper medical records, the ability for patients to have access to their records, and many other things. Unfortunately, although each EMR serves a purpose, it does not mean that the data is accessbile via a common standard. Each EMR defines their own database structure and variable field names that can make querying the data especially difficult. As the healthcare industry has moved towards adopting the hl7 FHIR standards in application development, the value of these EMRs would be increased significantly if the data could be mapped from the native schema to the FHIR standards. The **RAW to FHIR Auto-mapper** was specifically designed to address this issue.
 
Given access to an EMR database, the **RAW to FHIR Auto-mapper** is able use the data schema (DDL) and auto-map to FHIR as best as possible. Additionally, once the mapping has been generated, a user maintains the ability to curate the output of the application to improve matching as well as save the mapping for future use. The success and adoption of this application will allow for easier conversion from EMRs to FHIR standards as well as contribute to a larger knowledge base for other EMRs to benefit from.

