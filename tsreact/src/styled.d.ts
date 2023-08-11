// d.ts : 외부 라이브러리의 데이터를 활용해서 타입을 정의하고자 할 때 사용

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}