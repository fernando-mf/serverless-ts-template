import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (
  event: APIGatewayEvent,
): Promise<APIGatewayProxyResult> => ({
  body: JSON.stringify({ hello: 'world', event }),
  statusCode: 200,
});
