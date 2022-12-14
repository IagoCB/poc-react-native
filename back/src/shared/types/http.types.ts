/* eslint-disable @typescript-eslint/no-explicit-any */
export type HTTPRequest = {
  query: any;
  params: any;
  body: any;
  headers: any;
};

export type HTTPResponse = {
  statusCode: number;
  body: any;
};
