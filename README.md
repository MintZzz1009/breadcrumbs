# breadcrumbs

## POST /grandparents

-   grandparent 페이지 생성 (최상위 페이지)

## GET /grandparents/:gpId

-   grandparent 페이지 정보(이름, 내용)
-   grandparent 서브페이지리스트
    parents 중 p_of_parent가 grandparent_id와 같은 row들

## POST /grandparents/:gpId/parents

-   parent 페이지 생성 (최상위 페이지의 하위 페이지)

## GET /grandparents/:gpId/parents/:pId

-   parent 페이지 정보(이름, 내용)
-   parent 서브페이지리스트
    childs 중 p_of_child가 parent_id와 같은 row들

## POST /grandparents/:gpId/parents/:pId/childs

-   child 페이지 생성 (최상위 페이지의 하위 페이지의 하위 페이지)

## GET /grandparents/:gpId/parents/:pId/childs/:cId

-   child 페이지 정보(이름, 내용)
-   child 서브페이지리스트
    grandaSAschilds 중 p_of_grandchild가 child_id와 같은 row들

## POST /grandparents/:gpId/parents/:pId/childs/:cId/grandchilds

-   grandchild 페이지 생성 (최상위 페이지의 하위 페이지의 하위 페이지의 하위 페이지)

## GET /grandparents/:gpId/parents/:pId/childs/:cId/grandchilds/:gcId

-   grandchild 페이지 정보(이름, 내용)
-   grandchild 서브페이지리스트
    grandaSAschilds 중 p_of_grandchild가 child_id와 같은 row들
    [DB](https://drawsql.app/teams/haksoo-jis-team/diagrams/breadcrumbs)
