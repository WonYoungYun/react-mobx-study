React X Mobx
=

[여기](https://velog.io/@velopert/MobX-1-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-9sjltans3p)를 참고하였습니다.


주요개념
=

1. Observable State(관찰 받는 state)
- mobx를 사용하고 있는 앱의 상태는 Observable하다. 관찰되고 있다는 의미이며, 특정 부분이 바뀌면 Mobx는 어떤 부분이 바뀌었는지 알 수 있다.
2. Computed Value(연산된 값)
-  연산된 값은 기존의 상태값과 다른 연산된 값에 기반하여 만들어 질 수 있는 값
-  성능의 최적화를 위해 사용, 연산에 기반되는 값이 바뀔때 연산하고, 바뀌지 않으면 기존의 값을 사용한다.
3. Reactions(반응)
- Computed Value와 비슷하지만, 특정값의 연산에만 처리가 되는 반면에 Reactions는  값이 바뀔때마다 해야하는 일을 정하는 것을 의미한다.
4. Actions
- 상태에 변화를 일으키는 것,
- Observable State에 변화를 일으키는 코드를 호출하는 것도 하나의 액션
- Redux와는 다르게 객체형태로만들지는 않는다

react에서 mobx사용하기
-

```
yarn add mobx mobx-react
```


Provider 를 통해 react에 Mobx스토어 적용

inject를 통해 컴포넌트에 스토어 주입



mobx-react-devtools
어떤 값을 바꿨을 때 어떠한 컴포넌트들이 영향을 받고, 업데이트는 얼마나 걸리고, 어떠한 변화가 일어났는지에 대한 세부적인 정보를 볼 수 있게 해준다
```
yarn add mobx-react-devtools
```