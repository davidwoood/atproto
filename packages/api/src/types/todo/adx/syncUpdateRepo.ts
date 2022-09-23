/**
* GENERATED CODE - DO NOT MODIFY
* Created Thu Sep 22 2022
*/
import { Headers } from '@adxp/xrpc'

export interface QueryParams {
  did: string;
}

export interface CallOptions {
  headers?: Headers;
  encoding: 'application/cbor';
}

export type InputSchema = string | Uint8Array

export interface Response {
  success: boolean;
  error: boolean;
  headers: Headers;
}