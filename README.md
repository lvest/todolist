# Todo List

## 1. 기능

- 날짜 표시
- todo 추가
- todo 삭제

<img width="80%" src="https://user-images.githubusercontent.com/88753089/129070799-31467eea-5dce-4922-9ada-ec1c33672d48.gif"/>

## 2. 상세 설명

- todo 추가
  1. 사용자가 input을 입력
  2. Enter를 누르거나 버튼을 클릭하면 event 발생
  3. input값을 인자로 받는 makeList 함수 실행
- todo 삭제
  1. 사용자가 휴지통을 클릭
  2. 휴지통의 경로위에 있는 li element(e.path[3])를 삭제

## 3. 해결한 에러사항

- todo 삭제 기능
  - ul element에 eventlistener을 걸어 삭제기능을 구현했는데, 휴지통 이외의 ul 영역이 눌릴 때마다 다른 element가 지워지는 오류가 발생
    => className을 기준으로 한 번 걸러주어 오류 해결

## 4. 개선해야할 점

- todo 개수 제한(scroll 만들기)
- 공백 입력 못하게 만들기

## 5. 추가하고싶은 기능

- check box
- 수정버튼
