# RAW-2-FHIR-AUTOMAPPER

## Overview
This is a tool developed by Daniel Thomson, Sumit Kumar, Bryan Gorges, Kevaughn Brown, Zach Hanley and Steven Seidman. The purpose is to connect to a EMR database and generate mappings to the FHIR format.

## Stack
This is a containerized flask application sitting on postgres. A demo of the tool can be found [here](https://youtu.be/culfu8LH7Zw?t=397).

## Problem Statement
EMRs abound, most of which use terms, that are not mapped into any
standard. This makes semantic interoperability difficult. This project
accepts the data schema (DDL) of the EMR and auto-maps it to FHIR as
best as possible. The computer-generated mapping can then be curated
or audited prior to use in production. This hastens (and standardizes) the
mapping process. Optionally, users can share their mapping table and
contribute to a larger knowledge base for other EMRs to benefit from.
