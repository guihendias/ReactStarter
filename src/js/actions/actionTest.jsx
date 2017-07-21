import {ACTION} from '../actions';

export function test(testParam) {
  console.log('calling action: ', ACTION);

  return {
    type: ACTION,
    payload: testParam
  };
}
